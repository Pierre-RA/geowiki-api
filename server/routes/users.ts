import * as express from "express";
import {UserController} from "./../controllers/user.controller"
const userRoutes = express.Router();

/**
* Returns all the users
*/
userRoutes.get('/', (req, res, next) => {
  let userController = new UserController();
  res.json("{message: 'user list',version: 'geowiki_v.0.0.1'}");
});

/**
* Returns a user with a given id

router.get('/:id', (req, res, next) => {
  //let userController = new UserController();
  //res.json = userController.getUsers(req);
});


/**
* Adds a user with the given payload

router.post('/', (req, res, next) => {

}

/**
* Edits a given user with the given payload

router.put('/', (req, res, next) => {

}**/

module.exports = userRoutes;
