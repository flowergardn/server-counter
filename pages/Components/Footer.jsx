export default function Footer() {
  return (
    <footer className="text-gray-600 body-font mt-[45rem]">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl text-white">Server Counter</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          An{" "}
          <a
            href="https://github.com/astridlol/server-counter"
            className="text-gray-400 ml-1"
          >
            open source
          </a>{" "}
          project by
          <a
            href="https://github.com/astridlol"
            className="text-gray-400 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            astrid
          </a>
        </p>
      </div>
    </footer>
  );
}
