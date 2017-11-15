import * as express from "express";
import {UserController} from "./../controllers/user.controller"
const userRouter = express.Router();

/**
* Adds a user
* POST /users
*/
userRouter.post('/', (req, res, next) => {
  let userController = new UserController();
  var userPayload = req.body;
  var userPromise = userController.addUser(userPayload);
  userPromise.then((response) =>{
    if(response) {
        var userID = response._id;
        res.json('{"message":"user added", "userID":"'+userID+'"}');
    } else {
        res.json('{"message":"Error adding user"}');
    }
  }).catch((response) => {
    res.json('{"message":"Error adding user"}');
  });
});

/**
* Returns a user with a given id
* GET /users/:id
*/
userRouter.get('/:id', (req, res, next) => {
  let userController = new UserController();
  var userID = req.params.id;
  var userPromise = userController.getUser(userID);
  userPromise.then((response) =>{
    if(response) {
      res.json(JSON.stringify(response));
    } else {
      res.json('{"message":"User Not Found"}');
    }
  }).catch((response) => {
    res.json('{"message":"User Not Found"}');
  });
});

/**
* Edits a given user with a given id
*/
userRouter.put('/:id', (req, res, next) => {
  let userController = new UserController();
  var userID = req.params.id;
  var userPayload = req.body;
  var userPromise = userController.editUser(userID, userPayload);
  userPromise.then((response) =>{
    if(response) {
      res.json(response);
    } else {
      res.json('{"message":"User update error"}');
    }
  }).catch((response) => {
    res.json('{"message":"User update error"}');
  });
});

/**
* Deletes a given user with a given id
*/
userRouter.delete('/:id', (req, res, next) => {
  let userController = new UserController();
  var userID = req.params.id;
  var userPromise = userController.deleteUser(userID);
  userPromise.then((response) =>{
    if(response) {
      res.json(response);
    } else {
      res.json('{"message":"User deletion error"}');
    }
  }).catch((response) =>{
    res.json('{"message":"User deletion error"}');
  });
});

module.exports = userRouter;
