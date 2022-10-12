
function salir() {
    alert("Fin del proceso")
}

function validarOperacion( moneda, plata) {

    cantidad = Number (prompt("Ingrese la cantidad a comprar de " + moneda.nombre + " : "))
    
    if (moneda.precio*cantidad<= plata) {

        plata -= cantidad * moneda.precio
        alert("tu saldo restante es " + plata)
        return plata
    } else {
        alert("Fondos insuficientes")
    }
}


function Continuar(){
opcion = prompt("Ingresar opcion: 1: Continuar , 2: Salir")

while(opcion != 2) {

    if(opcion === 1){
        seleccionarTipoMoneda()
    }
    else {alert("opcion invalida")

    opcion = prompt("Ingresar opcion: 1: Continuar , 2: Salir")
    }   
}
salir()
}

function Moneda(nombre, precio) {
    this.nombre = nombre;
    this.precio= precio;
 }

console.log("Selecciona Tu Moneda")

let dolares = new Moneda("DOLARES", 285)
console.log(dolares.nombre)

let euros = new Moneda("EUROS", 280)
console.log(euros.nombre)

let reales = new Moneda("REALES", 56)
console.log(reales.nombre)


let listaMonedas = [dolares, euros, reales]


function seleccionarTipoMoneda(){

    let seleccion = false
    while(seleccion != true){

        moneda = prompt("Ingresar Moneda: Dolares-Euros-Reales")

        moneda = moneda.toUpperCase()

        for(let i = 0; i<listaMonedas.length; i+=1){
            if(listaMonedas[i].nombre ===  moneda){
                seleccion = true
                validarOperacion(listaMonedas[i],plata)
                Continuar()
                return listaMonedas[i]
            }    
    }
    console.log("Seleccione un Personaje Valido")
    }
}


/* 
CODIGO COMENTADO DE LO QUE HE CAMBIADO Y AHORRADO LINEAS DE CODIGO
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
function seleccionarTipoMoneda() {
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
*/
function validarClave(clave) {
    if (clave === "1111") {
        plata = Number(prompt("Ingrese su saldo a utilizar"))
        seleccionarTipoMoneda()
    } else {
        alert("Clave incorrecta")
    }
}

function ingreseClave(nombre) {
    if (nombre) {
        let clave = prompt("Ingresar clave")
        validarClave(clave)
    }
}

function ingreseNombre(dni) {
    if (dni) {
        let nombre = prompt("Ingresar nombre")
        ingreseClave(nombre)
    }
}

function ingreseDni(inicio) {
    if (inicio) {
        let dni = Number(prompt("Ingresar DNI"))
        ingreseNombre(dni)
    }
}

function Inicio() {
    let inicio = confirm("Ustedes esta ingresando a Compra de divisas")
    ingreseDni(inicio)
}

Inicio()
