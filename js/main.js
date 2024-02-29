function seleccionarCafe() {
    alert("Bievenido a BlueBird Café!")
    
    while (true) {
        let tipoDeCafe = prompt("Por favor, seleccione numericamente, el tipo de café que desee ordenar: \n1. Capuccino \n2. Macchiato \n3. Expreso \n4. Americano \n0. Para salir")
        let costoInicial = 0;

        switch (tipoDeCafe.toUpperCase()) {
            case "1":
                costoInicial += 1200;
                alert("Usted ha seleccionado Capuccino")
                break;
            case "2":
                costoInicial += 1750;
                alert("Usted ha seleccionado Macchiato")
                break;
            case "3":
                costoInicial += 2200;
                alert("Usted ha seleccionado Expreso")
                break;
            case "4":
                costoInicial += 2600;
                alert("Usted ha seleccionado Americano")
                continue;
            case "0":
                alert("Usted está saliendo...");
                 break;
            default:
                alert("Tipo de caracter no válido, seleccione numéricamente por favor!")
                
        }   
    
        let tipoDeComida = prompt("Por favor, seleccione numéricamente lo que desee pedir para comer: \n1. Dos Facturas \n2. Tres Carlitos \n3. Dos Tortitas \n4. Cuatro Sopaipilla \n0. Para salir")
        let costoDeComida = 0;

        switch (tipoDeComida.toUpperCase()) {
            case "1":
                costoDeComida += 900;
                alert("Usted ha seleccionado Dos Facturas")
                break;
            case "2":
                costoDeComida += 1400;
                alert("Usted ha seleccionado Tres Carlitos")
                break;
            case "3":
                costoDeComida += 600;
                alert("Usted ha seleccionado Dos Tortitas")
                break;
            case "4":
                costoDeComida += 1500;
                alert("Usted ha seleccionado Cuatro Sopaipillas")
            case "0":
                alert("Usted está saliendo...");
                break;
            default:
                alert("Tipo de caracter no válido, seleccione numéricamente por favor!")
                break;
    }
  }
}
   
seleccionarCafe()


    

