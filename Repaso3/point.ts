

export class Punto {

        private x:number
        private y:number

        constructor(x:number,y:number){
            this.x = x
            this.y = y
        }
            public getX():number{
                return this.x
            }
            public setX(newdirect:number){
                this.x = newdirect
            }
            public getY():number{
                return this.y
            }
            public setY(newdirect:number){
                this.y = newdirect
            }
    

        public toString(){
           console.log (`${this.x},${this.y}`)
        }

       public distanciaAlOrigen():number{
            let primArr:number = 0
            primArr =Math.sqrt((this.x*this.x)+ (this.y*this.y))
            return primArr
       }
      public calcularDistancia(otroPunto:Punto):number{
          let primArr2:number = 0
          primArr2= Math.sqrt(Math.pow((this.x-otroPunto.getX()),2) + Math.pow((this.y-otroPunto.getY()),2));
          return primArr2
          
        }
        public CalcularCuadrante():number{
            let calcCuadrante:number = 0;
            if(this.x==0 || this.y==0){
                calcCuadrante=0;
            }else if(this.x>0 && this.y>0){
                calcCuadrante=1;
            }else if(this.x<0 && this.y>0){
                calcCuadrante=2;
            }else if(this.x<0 && this.y<0){
                calcCuadrante=3;
            }else if(this.x>0 && this.y<0){
                calcCuadrante=4;
            }else{'No hay parametros'}
            return calcCuadrante;
        }
       public calcularMasCercano(puntos : Punto[]):Punto{
        
        let puntoCerca:number = null;
        let puntoOrigen:Punto = new Punto(this.getX(),this.getY());
        for(let i = 0;i<puntos.length;i++){
            if(puntoCerca == null || Math.abs(puntos[puntoCerca].calcularDistancia(puntoOrigen)) 
            >Math.abs(puntos[i].calcularDistancia(puntoOrigen))){
                puntoCerca = i
            }
        }
        return puntos[puntoCerca];
       
      






        }

}

