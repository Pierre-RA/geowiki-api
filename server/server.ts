import * as express from "express";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import {Server, Path, GET} from "typescript-rest";

import * as homeController from "./controllers/home.controller";
import * as geoWikiService from "./routes/geo-wiki"
import {GeoWikiService} from "./routes/geo-wiki";

dotenv.config();

let app: express.Application = express();
Server.buildServices(app, GeoWikiService);

app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(app.get("port"), () => {
  console.log(("  App is running at http://localhost:%d in %s mode"),
    app.get("port"), app.get("env"));
  console.log("  Press CTRL-C to stop\n");
});

module.exports = app;
