"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var reto1_1 = require("../PrimeraParte/reto1");
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
    }
    MobileLibrary.prototype.setname = function (name) {
        this.name = name;
    };
    MobileLibrary.prototype.getname = function () {
        return this.name;
    };
    MobileLibrary.prototype.setlocation = function (location) {
        this.location = location;
    };
    MobileLibrary.prototype.getlocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.setmobiles = function (mobiles) {
        this.mobiles = mobiles;
    };
    MobileLibrary.prototype.getmobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.settotalPrice = function (totalPrice) {
        this.totalPrice = totalPrice;
    };
    MobileLibrary.prototype.gettotalPrice = function () {
        return this.totalPrice;
    };
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var box = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            box += this.mobiles[i].getprice();
        }
        return box;
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
var movil = new reto1_1.Mobile('nokia', '3210', 'nokia', 10, 'negro', false, 0, 50);
var movil1 = new reto1_1.Mobile('iphone', '3G', 'apple', 10, 'blanco', true, 1, 150);
var movil2 = new reto1_1.Mobile('samsung', 'Galaxy 10', 'samsung', 12, 'azul', true, 2, 350);
var mobiless = [movil, movil1, movil2];
var prueba = new MobileLibrary('nombre', 'lugar', mobiless);
console.log(prueba.totalPriceCalculation());
