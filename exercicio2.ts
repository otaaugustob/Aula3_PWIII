let fcarro :number = 0.7
let vellim: number = 120

let carro = (fcarro:number) => 300*(1/fcarro-1)

    let vlm :number = vellim * 1.2

let x: number = carro(fcarro)

    let multa = (y :number) => {
        if(y < vellim){
            console.log(`Velocidade do carro: ${y} multa: R$ 00,00`)
        }
        else if(y > vellim && y < vlm){
    
        
            console.log(`Velocidade do carro: ${y} multa: R$ 127,69`)
        }
        else{
            console.log(`Velocidade do carro: ${y} multa: R$ 574,62`)
        }
    }

    /*let carro = function (fcarro:number):number{ 

        return 300*(1/fcarro-1)
    }
    
        let vlm :number = vellim * 1.2
    
    let x: number = carro(fcarro)
    
        let multa = function (y :number):void {
            if(y < vellim){
                return console.log(`Velocidade do carro: ${y} multa: R$ 00,00`)
            }
            else if(y > vellim && y < vlm){
        
            
                return console.log(`Velocidade do carro: ${y} multa: R$ 127,69`)
            }
            else{
                return console.log(`Velocidade do carro: ${y} multa: R$ 574,62`)
            }
        }*/

    multa(x)


