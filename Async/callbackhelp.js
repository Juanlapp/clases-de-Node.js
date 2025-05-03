function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola, ' + nombre);
        miCallback(nombre);
    }, 1500);
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log('Bla bla bla bla...');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otrocallback) {
    setTimeout(function () {
        console.log('adios,', nombre);
        otrocallback();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
}

console.log('Iniciando proceso ...');

hola('Carlos', function(nombre) {
    conversacion(nombre, 2, function() {
        console.log('Proceso terminado');
    });
});

// Se comenta esta parte para evitar que diga "Hola, Carlos" dos veces
// hola('Carlos', function (nombre) {
//     adios(nombre, function () {
//         console.log('Terminamos');
//     });
// });

// hola('Carlos', function (nombre) {
//     hablar(function () {
//         hablar(function () {
//             hablar(function () {
//                 adios(nombre, function () {
//                     console.log('Terminando proceso ...');
//                 });
//             });
//         });
//     });
// });
