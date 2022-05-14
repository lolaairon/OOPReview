"use strict";
exports.__esModule = true;
var reto1_1 = require("../PrimeraParte/reto1");
var lib_1 = require("./lib");
var movl = new reto1_1.Mobile('Iphone', '13', 'Apple', 12, 'azul', true, 5, 1200);
var movl1 = new reto1_1.Mobile('Motorola', 'StartAC', 'Motorola', 14, 'gris', false, 1, 15);
var movl2 = new reto1_1.Mobile('Xiami', 'Redmi Note', 'Xiomi', 12, 'verde', true, 3, 199);
var movl3 = new reto1_1.Mobile('Samsung', 'A52s', 'Samsung', 14, 'gris', true, 1, 400);
var mobils = [movl, movl1, movl2, movl3];
var pruebas = new lib_1.MobileLibrary('nombre', 'lugar', mobils);
console.log(pruebas.totalPriceCalculation());
console.log(pruebas.getlocation());
console.log(pruebas.getmobiles());
console.log(pruebas.getlocation());
pruebas.printLibrary();
var movls = new reto1_1.Mobile('Iphone', '8', 'Apple', 12, 'blanco', true, 5, 400);
var movl1s = new reto1_1.Mobile('Motorola', 'Ip', 'Motorola', 14, 'gris', false, 1, 22);
var movl2s = new reto1_1.Mobile('Xiami', 'Redmi Note x', 'Xiomi', 12, 'verde', true, 3, 350);
var movl3s = new reto1_1.Mobile('Samsung', 'A4', 'Samsung', 14, 'gris', true, 4, 550);
var mvl = [movls, movl1s, movl2s, movl3s];
var ptr = new lib_1.MobileLibrary('nombre', 'lugar', mvl);
console.log(ptr.totalPriceCalculation());
console.log(ptr.getlocation());
console.log(ptr.getmobiles());
console.log(ptr.getlocation());
ptr.printLibrary();
