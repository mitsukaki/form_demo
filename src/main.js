const config = require('./static_config')

/* dependencies */
const express = require('express')
const helmet = require('helmet')

/* api endpoints */
const encryptHandle = require('./endpoints/encrypt')

// configure express
const app = express()

// set all guards but the csp
// TODO: configure csp
app.use(helmet({ contentSecurityPolicy: false }))
app.use(express.json());
app.use(express.static('public'))

// register our endpoints
app.post('/api/encrypt', encryptHandle)

// begin listening for connections
app.listen(config.server_port, () => {
    console.log("Server live on :" + config.server_port)
})
