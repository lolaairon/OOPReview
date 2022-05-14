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

pruebas.printLibrary();

let movls = new Mobile ('Iphone','8','Apple',12,'blanco', true, 5, 400)
let movl1s = new Mobile ('Motorola','Ip','Motorola',14,'gris', false, 1, 22)
let movl2s = new Mobile ('Xiami','Redmi Note x','Xiomi',12,'verde', true, 3, 350)
let movl3s = new Mobile ('Samsung','A4','Samsung',14,'gris', true, 4, 550)

let mvl : Mobile[] = [movls,movl1s,movl2s,movl3s];
let ptr = new MobileLibrary ('nombre','lugar',mvl)

console.log(ptr.totalPriceCalculation());
console.log(ptr.getlocation());
console.log(ptr.getmobiles());
console.log(ptr.getlocation())

ptr.printLibrary();

