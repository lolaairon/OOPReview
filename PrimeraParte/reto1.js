"use strict";
/*  1. Crear una clase llamada Mobile con las siguientes características:
• Propiedades Publicas
§ name
§ model
§ trademark
§ sdSize
§ color
§ is5G
§ cameraNumber
§ price
• Constructor a través del cual pueda inicializar todos los atributos  */
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.getname = function () {
        return this.name;
    };
    Mobile.prototype.setname = function (newdirect) {
        this.name = newdirect;
    };
    Mobile.prototype.getmodel = function () {
        return this.model;
    };
    Mobile.prototype.setmodel = function (newdirect) {
        this.model = newdirect;
    };
    Mobile.prototype.gettrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.settrademark = function (newdirect) {
        this.trademark = newdirect;
    };
    Mobile.prototype.getsdSizek = function () {
        return this.sdSize;
    };
    Mobile.prototype.setsdSize = function (newdirect) {
        this.sdSize = newdirect;
    };
    Mobile.prototype.getcolor = function () {
        return this.color;
    };
    Mobile.prototype.setcolor = function (newdirect) {
        this.color = newdirect;
    };
    Mobile.prototype.getprice = function () {
        return this.price;
    };
    Mobile.prototype.setprice = function (newdirect) {
        this.price = newdirect;
    };
    Mobile.prototype.getcambiosisG = function () {
        return this.is5G;
    };
    Mobile.prototype.setcambiosisG = function (newdirect) {
        this.is5G = newdirect;
    };
    Mobile.prototype.getcamara = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.setcamara = function (newdirect) {
        this.cameraNumber = newdirect;
    };
    Mobile.prototype.printAll = function () {
        console.log("The characteristics of the mobile name are: \"\n\"\n            Name : ".concat(this.name, " \"\n\"\n            Model : ").concat(this.model, " \"\n\"\n            Trademark : ").concat(this.trademark, " \"\n\"\n            SD Size : ").concat(this.sdSize, " \"\n\"\n            Color : ").concat(this.color, " \"\n\"\n            Is a 5G: ").concat(this.is5G, " \"\n\"\n            Numbers of camaras : ").concat(this.cameraNumber, " \"\n\"\n            \n            "));
    };
    return Mobile;
}());
exports.Mobile = Mobile;
