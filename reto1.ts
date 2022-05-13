/*  1. Crear una clase llamada Mobile con las siguientes características:
• Propiedades Publicas
§ name
§ model
§ trademark
§ sdSize
§ color
§ is5G
§ cameraNumber
§ price
• Constructor a través del cual pueda inicializar todos los atributos  */


export class Mobile {

    public name:string
    public model:string
    public trademark:string
    public sdSize:number
    public color: string
    public is5G: boolean
    public cameraNumber:number
    public price:number


    constructor(name:string,model:string,trademark:string,sdSize:number,color: string,is5G: boolean,cameraNumber:number,price:number){

        this.name = name
        this.model = model
        this.trademark = trademark
        this.sdSize=sdSize
        this.color = color
        this.is5G = is5G
        this.cameraNumber = cameraNumber
        this.price = price



    }

        public getcambiosisG():boolean{
            return this.is5G
            
        }
        public setcambiosisG(newdirect:boolean):void{
            this.is5G = newdirect
        }

        public getcamara():number{
            return this.cameraNumber
            
        }
        public setcamara(newdirect:number):void{
            this.cameraNumber = newdirect
        }





}
