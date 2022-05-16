import {Punto} from "../Repaso3/point"
export class Triangulo {
    private puntoUNO:Punto
    private puntoDOS:Punto
    private puntoTresz:Punto

        constructor(puntoUNO:Punto,puntoDOS:Punto,puntoTresz:Punto){
            this.puntoUNO = puntoUNO
            this.puntoDOS = puntoDOS
            this.puntoTresz = puntoTresz
        }

        //MÉTODOS
        public calcularLongitudLados():number[]{

            let arrNum:number[] = []

            let distancia1 = this.puntoUNO.calcularDistancia(this.puntoDOS)
            let distancia2 = this.puntoUNO.calcularDistancia(this.puntoTresz)
            let distancia3 = this.puntoDOS.calcularDistancia(this.puntoTresz)
                
                arrNum = [distancia1,distancia2,distancia3]

                return

       }



}