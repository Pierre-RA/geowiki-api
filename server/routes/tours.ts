import * as express from "express";
//import {UserController} from "./../controllers/user.controller"
const router = express.Router();

/**
* Returns all the tours
*/
router.get('/', (req, res, next) => {
  //let userController = new UserController();
  res.json({message :" tours "});
});


module.exports = router;
