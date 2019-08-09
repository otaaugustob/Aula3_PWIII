let nota1 = 84

/*let fconceito = function (n1:number):void{

    if(nota1 == 0){
        console.log("E")
    }
    else if(nota1 >=1 && nota1 <= 35 ){
        console.log("D")
    }
    else if(nota1 >=36 && nota1 <=60){
        console.log("C")
    }
    else if(nota1 >= 61 && nota1 <= 85){
        console.log("B")
    }
    else {
        console.log("A")
    }
    */
   let fconceito = (n1:number)=> {

    if(nota1 == 0){
        console.log("E")
    }
    else if(nota1 >=1 && nota1 <= 35 ){
        console.log("D")
    }
    else if(nota1 >=36 && nota1 <=60){
        console.log("C")
    }
    else if(nota1 >= 61 && nota1 <= 85){
        console.log("B")
    }
    else {
        console.log("A")
    }
   }

fconceito(nota1)