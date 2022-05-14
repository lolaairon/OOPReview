"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
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
    MobileLibrary.prototype.printLibrary = function () {
        console.log("This is al my mobiles: " + " \n ");
        for (var moviles in this.mobiles) {
            this.mobiles[moviles].printAll();
        }
        console.log("Price overall " + this.totalPrice + "\n");
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
/*

let movil = new Mobile ('nokia','3210','nokia',10,'negro', false, 0, 50);
let movil1 = new Mobile ('iphone','3G','apple',10,'blanco', true, 1, 150);
let movil2 = new Mobile ('samsung','Galaxy 10','samsung',12,'azul', true, 2, 350);
let mobiless : Mobile[] = [movil,movil1,movil2]
let prueba = new MobileLibrary ('nombre','lugar',mobiless)

let prb : Mobile[] = [movil,movil1,movil2]
 */
