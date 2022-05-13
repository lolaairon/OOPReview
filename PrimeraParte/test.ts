import {Mobile} from "./reto1"

let movil = new Mobile ('nokia','3210','nokia',10,'negro', false, 0, 50);
let movil1 = new Mobile ('iphone','3G','apple',10,'blanco', true, 1, 150);
let movil2 = new Mobile ('samsung','Galaxy 10','samsung',12,'azul', true, 2, 350);
/*
console.log(movil);
console.log(movil1);
console.log(movil2);

movil1.printAll();
movil2.printAll();
console.log(movil);
console.log(movil1);
console.log(movil2);

console.log(movil.getcambiosisG());
movil.setcambiosisG(true);
console.log(movil.getcambiosisG());

console.log(movil.getcamara());
movil.setcamara(4);
console.log(movil.getcamara());
*/
/*
let librosEsL: Book[] = [book6,book7];
let libreria: Library = new Library( librosEsL , 'Mostoles' , 'Pepe')*/

let mobiles : Mobile[] = [movil,movil1,movil2]

for(let i = 0; i<mobiles.length ; i++){
    mobiles[i].printAll()
}