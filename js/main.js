
let usd = 285
let eur = 280 
let rea = 57


function salir() {
    alert ("")
    
}

function validarOperacion(plata,cantidad,valorUnitario) {
    if(plata>=cantidad*valorUnitario){
        plata-=cantidad*valorUnitario
        alert("tu saldo restante es " + plata )
       
    }
    else{
        alert("monto superado")

    }
    return plata
    
}

function reales(plata) {
    alert("valor del real en pesos es " + rea)
    cantidad = Number (prompt("ingrese la cantidad a comprar"))
    validarOperacion(plata,cantidad,rea)
}

function euros(plata) {
    alert("valor del euro en pesos es " + eur)
    cantidad = Number (prompt("ingrese la cantidad a comprar"))
    validarOperacion(plata,cantidad,eur)
}

function dolares(plata) {
    alert("valor del dolar en pesos es " + usd)
    cantidad = Number (prompt("ingrese la cantidad a comprar"))
    validarOperacion(plata,cantidad,usd)
    
}

function seleccionarTipoMoneda(apellido) {

    plata = Number(prompt("ingrese su saldo"))

    console.log("1: dolares")
    console.log("2: euros")
    console.log("3: reales")
    console.log("4: salir")

    let opcion = prompt("ingresar opcion")
    while (opcion != 4) {

        switch (opcion) {
            case "1":
                return dolares(plata)
                


                break;

                

            case "2":
                return euros(plata)

o

                break;
            case "3":
                return reales(plata)



                break;
            case "4":
                salir()

                break;

            default:
                console.log("operacion invalida")

        }
        opcion = prompt("ingresar opcion")

    }
}

function ingreseContraseña(dni) {
    if(dni){
        let contraseña = prompt("ingresar contraseña")
        seleccionarTipoMoneda(contraseña)
    }
    
}



function ingreseDni() {

        let dni = prompt("ingresar dni")
        ingreseContraseña(dni)

    
}





ingreseDni()