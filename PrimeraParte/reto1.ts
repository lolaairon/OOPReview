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


    private name:string
    private model:string
    private trademark:string
    private sdSize:number
    private color: string
    private is5G: boolean
    private cameraNumber:number
    private price:number

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
    public getname():string{
        return this.name
        
    }
    public setname(newdirect:string):void{
        this.name = newdirect
    }

    public getmodel():string{
        return this.model
        
    }
    public setmodel(newdirect:string):void{
        this.model = newdirect
    }

    public gettrademark():string{
        return this.trademark
        
    }
    public settrademark(newdirect:string):void{
        this.trademark = newdirect
    }

    public getsdSizek():number{
        return this.sdSize
        
    }
    public setsdSize(newdirect:number):void{
        this.sdSize = newdirect
    }
    public getcolor():string{
        return this.color
        
    }
    public setcolor(newdirect:string):void{
        this.color = newdirect
    }
    public getprice():number{
        return this.price
        
    }
    public setprice(newdirect:number):void{
        this.price = newdirect
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
        public printAll(){
            console.log(`The characteristics of the mobile name are: "\n"
            Name : ${this.name} "\n"
            Model : ${this.model} "\n"
            Trademark : ${this.trademark} "\n"
            SD Size : ${this.sdSize} "\n"
            Color : ${this.color} "\n"
            Is a 5G: ${this.is5G} "\n"
            Numbers of camaras : ${this.cameraNumber} "\n"
            
            `
            )

}
}