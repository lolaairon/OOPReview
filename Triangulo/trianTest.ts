import { Triangulo } from "./trian";
import { Punto } from "../Repaso3/point";

let site1 = new Punto (1,1)
let site2 = new Punto (2,2)
let site3 = new Punto (3,3)
let site4 = new Punto (4,4)

let arrSite:Punto[] = [site1,site2,site3]
let triangulo = new Triangulo(site1,site2,site3)


console.log(site1)
console.log(site2)
console.log(site3)

console.log(site1.distanciaAlOrigen())
console.log(site2.distanciaAlOrigen())
console.log(site3.distanciaAlOrigen())

console.log(site1.calcularDistancia(site2))
console.log(site2.calcularDistancia(site3))

console.log(site1.CalcularCuadrante())
console.log(site2.CalcularCuadrante())
console.log(site3.CalcularCuadrante())

console.log(arrSite)
console.log(site4.calcularMasCercano(arrSite))
console.log(triangulo.calcularLongitudLados())
