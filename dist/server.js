"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var typescript_rest_1 = require("typescript-rest");
var app = express();
typescript_rest_1.Server.buildServices(app);
app.listen(3000, function () {
    console.log('Rest Server listening on port 3000!');
});
