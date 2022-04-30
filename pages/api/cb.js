// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios'
import { serialize } from 'cookie'

export default async function handler(req, res) {
  const { token: discordToken } = req.query

  // If no token was passed through, send a 400 status code
  if (!discordToken)
    res.status(400).json({ success: false, err: `Malformed token` })

  res.setHeader(
      'Set-Cookie',
      serialize('token', discordToken, { path: '/', maxAge: 60 * 60 * 24 * 7 })
  )

  res.redirect('/')
}
