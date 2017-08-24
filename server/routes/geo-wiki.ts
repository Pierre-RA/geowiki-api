import {Path, GET} from  "typescript-rest";
let pkg = require(__dirname + '/../../package.json');

@Path("/geowiki")
export class GeoWikiService {
  @GET
   echo(): string {
     var res = "{ message: 'Welcome to API sekeleton.', version: "+ pkg.version + "}";
     return res;
  }
}
