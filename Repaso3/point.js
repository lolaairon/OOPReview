"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.setX = function (newdirect) {
        this.x = newdirect;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setY = function (newdirect) {
        this.y = newdirect;
    };
    Punto.prototype.toString = function () {
        console.log("".concat(this.x, ",").concat(this.y));
    };
    Punto.prototype.distanciaAlOrigen = function () {
        var primArr = 0;
        primArr = Math.sqrt((this.x * this.x) + (this.y * this.y));
        return primArr;
    };
    Punto.prototype.calcularDistancia = function (otroPunto) {
        var primArr2 = 0;
        primArr2 = Math.sqrt(Math.pow((this.x - otroPunto.getX()), 2) + Math.pow((this.y - otroPunto.getY()), 2));
        return primArr2;
    };
    Punto.prototype.CalcularCuadrante = function () {
        var calcCuadrante = 0;
        if (this.x == 0 || this.y == 0) {
            calcCuadrante = 0;
        }
        else if (this.x > 0 && this.y > 0) {
            calcCuadrante = 1;
        }
        else if (this.x < 0 && this.y > 0) {
            calcCuadrante = 2;
        }
        else if (this.x < 0 && this.y < 0) {
            calcCuadrante = 3;
        }
        else if (this.x > 0 && this.y < 0) {
            calcCuadrante = 4;
        }
        else {
            'No hay parametros';
        }
        return calcCuadrante;
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var puntoCerca = null;
        var puntoOrigen = new Punto(this.getX(), this.getY());
        for (var i = 0; i < puntos.length; i++) {
            if (puntoCerca == null || Math.abs(puntos[puntoCerca].calcularDistancia(puntoOrigen))
                > Math.abs(puntos[i].calcularDistancia(puntoOrigen))) {
                puntoCerca = i;
            }
        }
        return puntos[puntoCerca];
    };
    return Punto;
}());
exports.Punto = Punto;
