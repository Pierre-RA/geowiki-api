import * as express from "express";
import mongoose = require("mongoose");
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import {Server, Path, GET} from "typescript-rest";

import * as homeController from "./controllers/home.controller";

import {UserService} from "./routes/users"
import {GeoWikiService} from "./routes/geo-wiki";

dotenv.config();

let app: express.Application = express();
Server.buildServices(app, GeoWikiService);
Server.buildServices(app, UserService);

app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

try {
  mongoose.connect(process.env.MONGODB_URI);
  console.log('Attempt to connect to databse');
} catch (err) {
  console.log('Sever initialization failed ' , err.message);
}

app.listen(app.get("port"), () => {
  console.log(("  App is running at http://localhost:%d in %s mode"),
    app.get("port"), app.get("env"));
  console.log("  Press CTRL-C to stop\n");
});

module.exports = app;
