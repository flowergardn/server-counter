import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";

export default function Home() {
  const [token, setToken] = useState("");
  const [servers, setServers] = useState([]);

  useEffect(() => {
    const _token = Cookies.get("token");
    if (_token && _token.length > 5) {
      setToken(Cookies.get("token"));
      (async () => {
        if (!localStorage.getItem("servers")) {
          console.log(
            `Calling Discord API with the token: ${Cookies.get("token")}`
          );
          let discordInfo;
          try {
            discordInfo = (
              await axios.get(`https://discord.com/api/users/@me/guilds`, {
                // We specify the access token in the headers, to tell Discord that we want this specific users' information.
                headers: { Authorization: `Bearer ${Cookies.get("token")}` },
              })
            ).data;
          } catch (err) {
            console.error(err);
          }
          setServers(discordInfo);
        } else setServers(JSON.parse(localStorage.getItem("servers")));
      })();
    }
  }, []);

  useEffect(() => {
    if (servers && servers.length !== 0) {
      localStorage.setItem("servers", JSON.stringify(servers, null, 4));
    }
  }, [servers]);

  function Page(props) {
    return (
      <>
        <div className={"flex align-center justify-center mt-[5rem]"}>
          <div className={"flex flex-col items-center"}>{props.children}</div>
        </div>
      </>
    );
  }

  function loggedIn() {
    return (
      <Page>
        <h1 className={"text-3xl text-white"}>
          You are in {servers.length} servers!
        </h1>
      </Page>
    );
  }

  function loggedOut() {
    return (
      <Page>
        <h1 className={"text-3xl text-white"}>
          You are currently not logged in
        </h1>
        <h1 className={"text-1xl text-white mt-5"}>
          Click{" "}
          <a
            href={"/api/login"}
            className={"text-indigo-400 hover:text-indigo-500"}
          >
            here
          </a>{" "}
          to login with Discord
        </h1>
      </Page>
    );
  }

  return (
    <>
      <Head>
        <meta
          name="description"
          content="A web app to count all the servers you're in!"
        />
        <meta property="og:url" content="server-counter.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="theme-color" content="#1F2937" />
        <meta property="og:title" content={"Discord server counter"} />
        <meta
          name="og:description"
          content="A web app to count all the servers you're in!"
        />
        <title>Server counter</title>
      </Head>
      {token === "" ? loggedOut() : loggedIn()}
    </>
  );
}
