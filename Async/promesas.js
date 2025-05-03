function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1500);
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Bla bla bla bla...');
            // Simulación de error
            reject('Hay un error');
            // resolve(nombre); // Esta línea quedaría si no quisieras el error
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('adios,', nombre);
            resolve();
        }, 1000);
    });
}

console.log('Iniciando el proceso...');

hola('Carlos')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then(() => {
        console.log('Terminando el proceso...');
    })
    .catch(error => {
        console.log('Ha habido un error:');
        console.log(error);
    });
