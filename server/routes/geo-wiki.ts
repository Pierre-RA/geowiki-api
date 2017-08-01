import {Path, GET} from  "typescript-rest";

@Path("/geowiki")
export class GeoWikiService {
  @GET
   echo(): string {
    return "GEOWiki API v1 ";
  }
}
