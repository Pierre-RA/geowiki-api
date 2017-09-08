import * as http from 'http';
import * as express from 'express';
import mongoose = require("mongoose");
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";

dotenv.config();

const port = process.env.PORT || 3000;

const app :express.Application = express();
const users = require('./routes/users');
middleware();
routes();

const server = http.createServer(app);
server.listen(port);
server.on('listening', onListening);

try {
  mongoose.connect(process.env.MONGODB_URI);
  console.log('Attempt to connect to databse');
} catch (err) {
  console.log('Sever initialization failed ' , err.message);
}

function middleware(): void {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
}

// Configure API endpoints.
function routes(): void {
 let router = express.Router();
 // placeholder route handler
 app.use('/users', users);
}


function onListening(): void {
  let addr = server.address();
  let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
}
