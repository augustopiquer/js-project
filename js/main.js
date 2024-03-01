

let cafe = 0;
let precioAbsoluto = 0;
const preciosItems = {
    1: 3600,
    2: 4300, 
    3: 5200, 
    4: 5400
};

if (true) {
    alert("Te damos la bienvenida a BlueBird Café, nuestro local de café de Mendoza!")
};

let seguirComprando = true;
while (seguirComprando) {

    let nuevoCafe = prompt("Por favor, seleccione lo que desee ordenar: \n1. Capuccino c/Facturas - $3600 \n2. Macchiato c/sandwich tostado - $4300\n3. Expreso doble c/facturas rellenas - $5200\n4. Americano c/tostados y facturas - $5400")

    cafe = nuevoCafe
    if (cafe <= 0 || cafe > 4 || isNaN(cafe)) {
        alert("Por favor, seleccione un número de artículo válido.");
    } else {
        if (cafe == 1) {
            precioAbsoluto += preciosItems[1];
            alert(`Agregamos una orden de Capuccino c/Facturas. Precio: $${preciosItems[1]}. Precio a pagar: $${precioAbsoluto}.`);

        } else if (cafe == 2) {
            precioAbsoluto += preciosItems[2];
            alert(`Agregamos una orden de Macchiato c/Sandwich tostado. Precio: $${preciosItems[2]}. Precio a pagar: $${precioAbsoluto}.`);

        } else if (cafe == 3) {
            precioAbsoluto += preciosItems[3];
            alert(`Agregamos una orden de Expreso doble c/Facturas rellena. Precio: $${preciosItems[3]}. Precio a pagar: $${precioAbsoluto}.`);

        } else if (cafe == 4) {
            precioAbsoluto += preciosItems[4];
             alert(`Agregamos una orden de Americano c/Tostados y Tacturas. Precio: $${preciosItems[4]}. Precio a pagar: $${precioAbsoluto}.`);
        }
        let respuesta = prompt("Por favor, ¿Desea seguir agregar otro pedido?(Si/No)").toLowerCase();
        if (respuesta == "no") {
            seguirComprando = false;
            break;
        }
    }
};
alert(`El total de su orden es: $${precioAbsoluto}. Gracias por comprar en BlueBird Café, buen provecho!.`);