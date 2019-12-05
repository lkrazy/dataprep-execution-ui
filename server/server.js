import express from 'express'
import session from 'express-session'
import cors from 'cors'
import sessionFileStore from 'session-file-store'
import bodyParser from 'body-parser'
import path from 'path'
import errorHandler from 'errorhandler'
import flash from 'connect-flash'
import controller from './controllers'
import './db'

if (process.env.NODE_ENV == 'development') {
  require('dotenv').config()
}

const FileStore = sessionFileStore(session)

process.on('uncaughtException', (exception) => {
  console.log(exception) // to see your exception details in the console
  // if you are on production, maybe you can send the exception details to your
  // email as well ?
})

const app = express()
app.use(errorHandler({
  dumpExceptions: true, showStack: true
}))
const port = process.env.VUE_APP_SERVER_PORT || 8080

const serverFolder = path.normalize(path.join(__dirname))

// set up our express application
app.use(express.static(path.join(serverFolder, 'public')))
app.use(bodyParser.json({ limit: '10mb' })) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies


// required for passport
app.use(session({
  secret: 'recipe',
  store: new FileStore(),
  resave: true,
  saveUninitialized: true
})) // session secret
app.use(flash()) // use connect-flash for flash messages stored in session

app.use(cors())

controller(app)

// launch ======================================================================
if (process.env.NODE_ENV === 'development') {
  app.listen(port, '0.0.0.0')
} else {
  app.listen(port, '127.0.0.1')
}
console.log(`Server listen on Port: ${port}`)
