"use strict";
exports.__esModule = true;
var point_1 = require("./point");
var coor = new point_1.Punto(2, 4);
var coor2 = new point_1.Punto(2, 8);
var arrPuntos = [coor, coor2];
coor.toString();
console.log(coor.distanciaAlOrigen());
console.log(coor.calcularDistancia(coor2));
console.log(coor.CalcularCuadrante());
var puntoCerca = coor.calcularMasCercano(arrPuntos);
puntoCerca.toString();