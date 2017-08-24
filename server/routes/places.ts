import {Path, GET, PathParam} from  "typescript-rest";

@Path("/places")
export class PlaceService {

  /*
  * Retrive the place from the database;
  * Here an exact match to the 'name' is returned
  */
  @Path("/:name")
  @GET
  getPlaceByName( @PathParam("name") name : String): string {
    return null;
  }

  /*
  * Retrive the place from the database;
  * Here a list of places matching the 'part' is returned
  */
  @Path("/:part")
  @GET
  getPlaceByPart( @PathParam("name") name : String): string {
    return null;
  }

  @Path("/:coordinate")
  @GET
  getPlaceByCoordinate( @PathParam("coordinate") coordinate : String): string {
    //Retrive the place from the database
    return null;
  }

}
