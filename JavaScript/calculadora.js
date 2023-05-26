let comando;

while(comando !="3"){
    comando = prompt ("Seleccione una opción:\n\n- 1- Calcular precio producto \n- 2- Mensaje \n- 3- Salir")

    switch(comando){
        case "1":
            let precio = parseInt(prompt("Ingrese el precio del producto"));
            let tarjeta = prompt ("Indique su método de pago (credito o debito)");

            if (tarjeta === "debito"){
                alert ("No hay promociones disponibles con tarjetas de débito, el precio final es de $" + precio);
            } else if (tarjeta === "credito") {
                let precioConDescuento = precio * 0.85;
                alert ("Al abonar con tarjeta de crédito tienes un 15% de descuento, el precio final es de $" + precioConDescuento);
            }
            break;
        case "2":
            let mensaje = prompt("Dejenos su mensaje");
            alert("Se ha envíado el siguiente mensaje: " + mensaje)
            break;
    }
}