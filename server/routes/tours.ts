import {Path, GET, POST} from  "typescript-rest";

@Path("/users")
export class TourService {

  // Returns all the tours
  @GET
  getTours(): string {
    return "GEOWiki API v1 ";
  }

  // Returns the tour with the given id
  @Path("/:id")
  @GET
  getTourById(): string {
    return "GEOWiki API v1 ";
  }

  // Returns the tours with guide id
  @Path("/:guideId")
  @GET
  getToursByGuide(): string {
    return "GEOWiki API v1 ";
  }

  // Returns the tours with the starting location
  // This may return a list of tours proposed to start within a certain
  // distance from a given location
  @Path("/:location")
  @GET
  getToursByStartLocation(): string {
    return "GEOWiki API v1 ";
  }

  // Returns the tours with a given tag (costal, country side, adcenture, etc)
  @Path("/:type")
  @GET
  getToursByType(): string {
    return "GEOWiki API v1 ";
  }

  //Returns a list of users who is based close to the given coordinate
  @Path("/:coordinate")
  @GET
  getToursByLocation(): string {
    return "GEOWiki API v1 ";
  }

}
