"use strict";
exports.__esModule = true;
var trian_1 = require("./trian");
var point_1 = require("../Repaso3/point");
var site1 = new point_1.Punto(1, 1);
var site2 = new point_1.Punto(2, 2);
var site3 = new point_1.Punto(3, 3);
var site4 = new point_1.Punto(4, 4);
var arrSite = [site1, site2, site3];
var triangulo = new trian_1.Triangulo(site1, site2, site3);
console.log(site1);
console.log(site2);
console.log(site3);
console.log(site1.distanciaAlOrigen());
console.log(site2.distanciaAlOrigen());
console.log(site3.distanciaAlOrigen());
console.log(site1.calcularDistancia(site2));
console.log(site2.calcularDistancia(site3));
console.log(site1.CalcularCuadrante());
console.log(site2.CalcularCuadrante());
console.log(site3.CalcularCuadrante());
console.log(arrSite);
console.log(site4.calcularMasCercano(arrSite));
console.log(triangulo.calcularLongitudLados());