import mongoose = require("mongoose");
import IUser = require("./IUser");
import ILocation = require("./ILocation")

var userSchema = new mongoose.Schema({
  name : String,
  dateOfBirth : Date,
  locale : String,
}, { versionKey: false });

interface IUserModel extends IUser, mongoose.Document { }
var User = mongoose.model<IUserModel>("geowikiusers", userSchema);
export = User;
