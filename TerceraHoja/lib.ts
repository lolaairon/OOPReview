import {Mobile} from "../PrimeraParte/reto1"

 export class MobileLibrary {

    private name:string;
    private location:string;
    private mobiles:Mobile[];
    private totalPrice:number

        constructor(name:string,location:string,mobiles:Mobile[]){
            this.name = name
            this.location = location
            this.mobiles = mobiles
        }

        public setname(name:string):void{
            this.name = name
        }
        
        public getname():string{
            return this.name
        }

        public setlocation(location:string):void{
            this.location = location
        }
        
        public getlocation():string{
            return this.location
        }

        public setmobiles(mobiles:Mobile[]):void{
            this.mobiles = mobiles
        }
        
        public getmobiles():Mobile[]{
            return this.mobiles
        }
        public settotalPrice(totalPrice:number):void{
            this.totalPrice = totalPrice
        }
        
        public gettotalPrice():number{
            return this.totalPrice
        }

        public totalPriceCalculation(){
            let box:number= 0
            for(let i = 0; i< this.mobiles.length ; i++){
               box += this.mobiles[i].getprice() 
              
            }
            return box
        }








}

let movil = new Mobile ('nokia','3210','nokia',10,'negro', false, 0, 50);
let movil1 = new Mobile ('iphone','3G','apple',10,'blanco', true, 1, 150);
let movil2 = new Mobile ('samsung','Galaxy 10','samsung',12,'azul', true, 2, 350);
let mobiless : Mobile[] = [movil,movil1,movil2]
let prueba = new MobileLibrary ('nombre','lugar',mobiless)

console.log(prueba.totalPriceCalculation());