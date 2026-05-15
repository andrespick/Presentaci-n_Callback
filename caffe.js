// 1. Definimos la función que actuará como callback
function avisarListo() {
    console.log("¡Tu café está listo! Puedes pasar a recogerlo.");
}

// 2. Definimos la función principal
function prepararCafe(tipo, callback) {
    console.log(`Preparando tu café ${tipo}...`);

    // Simulamos que el café tarda 3 segundos en hacerse
    setTimeout(function () {
        // Una vez que el café "se termina", llamamos al callback
        callback();
    }, 3000);
}

// 3. Ejecutamos pasando el nombre de la función de aviso
prepararCafe("Capuchino", avisarListo);