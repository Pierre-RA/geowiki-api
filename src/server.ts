import * as express from "express";
import {Server, Path, GET} from "typescript-rest";

@Path("/geowiki")
class GeoWikiService {

  @GET
   echo(): string {
    return "GEOWiki API v1 ";
  }
}

let app: express.Application = express();
Server.buildServices(app);

app.listen(3000, function() {
  console.log('Rest Server listening on port 3000!');
});
