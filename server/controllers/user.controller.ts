import User = require("../model/user")

export class UserController {

  constructor() {
    var x = 5;
  }

  /**
  * Adds a user
  */
  addUser(userPayload : string) {
    console.log("Adding user "+ userPayload.toString());
    var user = new User(userPayload);
    user.save();
  }

  /**
  * Returns the user given the ID
  */
  getUser(id : number): string {
    return null;
  }
}
