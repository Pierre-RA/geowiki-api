"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var typescript_rest_1 = require("typescript-rest");
var GeoWikiService = (function () {
    function GeoWikiService() {
    }
    GeoWikiService.prototype.echo = function () {
        return "GEOWiki API v1 ";
    };
    __decorate([
        typescript_rest_1.GET,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], GeoWikiService.prototype, "echo", null);
    GeoWikiService = __decorate([
        typescript_rest_1.Path("/geowiki")
    ], GeoWikiService);
    return GeoWikiService;
}());
var app = express();
typescript_rest_1.Server.buildServices(app);
app.listen(3000, function () {
    console.log('Rest Server listening on port 3000!');
});
