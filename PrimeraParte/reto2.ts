/*2. En otro fichero
• Crear un objeto de la clase Mobile llamado Nokia3210
• Crear un objeto de la clase Mobile llamado iPhone3G
• Crear un objeto de la clase Mobile llamado Samsug Galaxy 10
• Mostrar por consola todos los atributos de cada objeto
• Modificar el Nokia3210 para que tenga 5G y 4 camaras
• Mostrar todos los atributos del todos los objetos creados*/

import { Mobile } from "./reto1";

let movil = new Mobile ('nokia','3210','nokia',10,'negro', false, 0, 50);
let movil1 = new Mobile ('iphone','3G','apple',10,'blanco', true, 1, 150);
let movil2 = new Mobile ('samsung','Galaxy 10','samsung',12,'azul', true, 2, 350);

console.log(movil);
console.log(movil1);
console.log(movil2);

console.log(movil.getcambiosisG());
movil.setcambiosisG(true);
console.log(movil.getcambiosisG());

console.log(movil.getcamara());
movil.setcamara(4);
console.log(movil.getcamara());