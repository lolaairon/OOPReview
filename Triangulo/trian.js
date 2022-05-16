"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    function Triangulo(puntoUNO, puntoDOS, puntoTresz) {
        this.puntoUNO = puntoUNO;
        this.puntoDOS = puntoDOS;
        this.puntoTresz = puntoTresz;
    }
    //MÉTODOS
    Triangulo.prototype.calcularLongitudLados = function () {
        var arrNum = [];
        var distancia1 = this.puntoUNO.calcularDistancia(this.puntoDOS);
        var distancia2 = this.puntoUNO.calcularDistancia(this.puntoTresz);
        var distancia3 = this.puntoDOS.calcularDistancia(this.puntoTresz);
        arrNum = [distancia1, distancia2, distancia3];
        return;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
