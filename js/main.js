let usd = 285
let eur = 280 
let rea = 57


function salir() {
    alert ("Gracias por su compra")
    
}

function validarOperacion(plata,cantidad,valorUnitario) {

    if(plata>=cantidad*valorUnitario){

        plata-=cantidad*valorUnitario
        alert("tu saldo restante es " + plata )
        return plata
    
    }
    else{
        alert("Monto superado")

    }
    return plata
    
}

function reales(plata) {

    alert("valor del real en pesos es " + rea)

    cantidad = Number (prompt("Ingrese la cantidad a comprar:"))
    validarOperacion(plata,cantidad,rea)
}

function euros(plata) {

    alert("valor del euro en pesos es " + eur)

    cantidad = Number (prompt("Ingrese la cantidad a comprar:"))
    validarOperacion(plata,cantidad,eur)
}

function dolares(plata) {

    alert("valor del dolar en pesos es " + usd)

    cantidad = Number (prompt("Ingrese la cantidad a comprar:"))
    validarOperacion(plata,cantidad,usd)
    
}

function seleccionarTipoMoneda(nombre) {

    plata = Number(prompt("Ingrese su saldo a utilizar"))

    console.log("1: dolares")
    console.log("2: euros")
    console.log("3: reales")
    console.log("4: salir")

    let opcion = prompt("Ingresar opcion: 1:Dolares , 2:Euros , 3:Reales, 4:Salir")
    while (opcion != 4) {

        switch (opcion) {
            case "1":
                dolares(plata)

                opcion = prompt("Ingresar opcion: 1:Dolares , 2:Euros , 3:Reales, 4:Salir")
                
                break;

            case "2":
                 euros(plata)

                 opcion = prompt("Ingresar opcion: 1:Dolares , 2:Euros , 3:Reales, 4:Salir")

                break;

            case "3":
                reales(plata)

                opcion = prompt("Ingresar opcion: 1:Dolares , 2:Euros , 3:Reales, 4:Salir")

                break;

            case "4":
                salir()

                break;

            default:
                console.log("Operacion invalida")

        }
       

    }
}

function ingreseNombre(dni) {
    if(dni){
        let nombre = prompt("Ingresar nombre")
        seleccionarTipoMoneda(nombre)
    }
}

function ingreseDni() {

        let dni = prompt("Ingresar DNI")
        ingreseNombre(dni)
 
}

ingreseDni()