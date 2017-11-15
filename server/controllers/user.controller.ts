import User = require("../model/user")
import IUser = require("../model/IUser")

export class UserController {

  constructor() {}

  /**
  * Adds a user
  */
  public addUser(userPayload : any) {
    console.log(userPayload);
    var user = new User(userPayload);
    return user.save();
  }

  /**
  * Returns the user given the ID
  */
  public getUser(userID: string) : Promise<any> {
    var resolve = function(doc : any) {
      return doc;
    };

    var reject = function(err : any) {
      return err;
    };

    var promise = new Promise((resolve, reject)  => {
      User.findOne({_id: userID},
        (err, doc) => {
          if (err) {
            reject(err);
          } else {
            resolve(doc);
          }
      });
    });

    return promise;
  }

  /**
  * Edits a given user with the user ID
  */
  public editUser(userID : string, userPayload: any): Promise<any> {
    var newDocument = userPayload;

    var promise = new Promise((resolve, reject)  => {
      User.find({_id: userID}, (err, userDoc) => {
        if(userDoc) {
          User.findOneAndUpdate({_id: userID}, newDocument,
            (err : any, updatedDocument : any) => {
              if(err) {
                reject(err);
              } else {
                var changed = true;
                for (var attribute in newDocument) {
                   changed = changed && (updatedDocument[attribute] !== newDocument[attribute]);
                }
                if(changed) {
                  resolve('{"message":"User details changed"}');
                } else {
                  resolve('{"message":"User details unchanged"}');
                }
              }
            });
        };
        //User not found
        if(err) {
          resolve('{"message":"User Not Found"}');
        }

      });
    });
    return promise;
  }

  /**
  * Delete user with a given user ID
  */
  public deleteUser(userID : string) : Promise<any> {
    var promise = new Promise((resolve, reject)  => {
      User.remove({ _id: userID },
        ( err ) => {
          if (err) {
            resolve('{"message":"User Not Found"}');
          } else {
            resolve('{"message":"User '+userID+' deleted"}');
          }
        });
    });
    return promise;
  }

}
