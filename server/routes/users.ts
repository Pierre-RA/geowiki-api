import {Path, GET, POST, PathParam} from  "typescript-rest";
import * as bodyParser from 'body-parser';
import {UserController} from "../controllers/user.controller";

@Path("/users")
export class UserService {

  // Returns all the users
  @GET
  getUsers(): string {
    return "GEOWiki API v1 ";
  }

  // Inserts a user with the given playload
  @POST
  addUsers(userPayload : any): string {
    console.log(userPayload.name);
    let uc = new UserController();
    uc.addUser(userPayload);

    return "GEOWiki API v1 ";
  }

  @Path("/:id")
  @GET
  getUserById(@PathParam("id") id : string): string {
    console.log("id " +id);
    return "User with  "+ id  ;
  }

  // Returns users by type
  @Path("/:type")
  @GET
  getUserByType(): string {
    return "GEOWiki API v1 ";
  }

  //Returns a list of users who is based close to the given coordinate
  @Path("/:coordinate")
  @GET
  getUserByLocation(): string {
    return "GEOWiki API v1 ";
  }

}
