import { Mobile } from "../PrimeraParte/reto1";
import { MobileLibrary } from "./lib";

let movl = new Mobile ('Iphone','13','Apple',12,'azul', true, 5, 1200)
let movl1 = new Mobile ('Motorola','StartAC','Motorola',14,'gris', false, 1, 15)
let movl2 = new Mobile ('Xiami','Redmi Note','Xiomi',12,'verde', true, 3, 199)
let movl3 = new Mobile ('Samsung','A52s','Samsung',14,'gris', true, 1, 400)

let mobils : Mobile[] = [movl,movl1,movl2,movl3];
let pruebas = new MobileLibrary ('nombre','lugar',mobils)

console.log(pruebas.totalPriceCalculation());
console.log(pruebas.getlocation());
console.log(pruebas.getmobiles());
console.log(pruebas.getlocation())

