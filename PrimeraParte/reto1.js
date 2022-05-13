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
    return Mobile;
}());
exports.Mobile = Mobile;
