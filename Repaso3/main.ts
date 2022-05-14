import { Punto } from "./point";

let coor = new Punto(2,4);
let coor2 = new Punto(2,8);
let arrPuntos:Punto[] = [coor,coor2]
coor.toString();
console.log(coor.distanciaAlOrigen());
console.log(coor.calcularDistancia(coor2))
console.log(coor.CalcularCuadrante())

let puntoCerca:Punto = coor.calcularMasCercano(arrPuntos);
puntoCerca.toString();
