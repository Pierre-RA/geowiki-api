import * as express from "express";
import * as bodyParser from "body-parser";

const userRoutes = require('./users');

class GeoWikiAPI {

  public express : express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
 private routes(): void {
   let router = express.Router();
   // placeholder route handler
   this.express.use('/', userRoutes);
 }

}

export default new GeoWikiAPI().express;
