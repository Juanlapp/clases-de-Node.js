function hola(nombre, miCallback) {
    setTimeout (function () {
        console. log('Hola, '+ nombre);
        miCallback(nombre);
    }, 1500);
}

function adios(nombre, otrocallback){
    setTimeout (function(){
        console.log('adios,', nombre);
        otrocallback();
    }, 1000 );
}

console. log('Iniciando proceso ... ');
hola('Carlos ', function (nombre) {
    adios(nombre, function(){
      console. log('Terminando proceso ... ');

    });
   
});

//hola('Carlos', function () {});
//adios('Carlos', function () {});