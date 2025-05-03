async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1500);
    });
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Bla bla bla bla...');
            // Simulación de error
            // reject('Hay un error');
            resolve(nombre); // Esta línea quedaría si no quisieras el error
        }, 1000);
    }); 
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adios,', nombre);
            resolve();
        }, 1000);
    });
}

async function main() {
    try {
        let nombre = await hola('Carlos');
        await hablar(nombre); // Ahora le pasas el nombre a la función hablar
        await hablar(nombre);
        await hablar(nombre);
        await adios(nombre);
    } catch (error) {
        console.error("Error capturado:", error); // Captura y muestra el error sin detener el programa
    }
}

main();
