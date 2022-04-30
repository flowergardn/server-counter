export default async function handler(req, res) {
    res.redirect('https://discord.com/api/oauth2/authorize?client_id=969790016496746516&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcb&response_type=token&scope=identify%20guilds')
}
