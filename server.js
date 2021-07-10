const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 5666
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const getResponse = require('./lib/twitter');
const getUserTweets = require('./lib/timeline');
const getPage = require('./lib/puppet');
const data = require('./lib/mocks');

app.prepare().then(() => {
  const server = express()

  server.get('/api/positions', async (req, res) => {
    return res.send(data);
  })

  server.get('/twitter', async (req, res) => {
    const response = await getResponse();
    return res.send(response);
  })

  server.get('/timeline/:userId', async (req, res) => {
    const response = await getUserTweets(req.params.userId);
    return res.send(response);
  })

  server.get('/target/:userId', async (req, res) => {
    const response = await getPage(req.params.userId);
    return res.send(response);
  })

  server.get('*', async (req, res) => {
    // const response = await getResponse();
    // return res.send(response);
    return handle(req, res)
  })


  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})