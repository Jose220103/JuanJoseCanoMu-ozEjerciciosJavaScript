let botonCalcular = document.getElementById('calcular')

botonCalcular.addEventListener('click', (calculo) => {

    let estatura = document.getElementById('estatura').value;
    let peso = document.getElementById('peso').value;

    const est = parseFloat(estatura);
    const pes = parseFloat(peso);
let operacion = est / 100
    let suma = pes / operacion

    let division = suma / operacion

    document.getElementById('resultado').value = division

})



 


  let seleccion = document.getElementById('seleccion')

seleccion.addEventListener('change', (divisa) => {

    let valorEentrada = document.getElementById('entrada1').value;
    let valorEntrada2 = document.getElementById('entrada2').value;

    const entrada = parseFloat(valorEentrada);
    const entrada2 = parseFloat(valorEntrada2);

    const seleccionOpcion = divisa.target.value

    let conversion;// let conversion = 17.8 * entrada
    //     let conversion2 = 919 * entrada
    //     let conversion3 = 3977.72 * entrada

   
    switch (seleccionOpcion) {
        case '1':
          conversion = 17.8 * entrada;
          break;
        case '2':
          conversion = 919.25 * entrada;
          break;
        case '3':
          conversion = 3974.58 * entrada;
          break;
       
      }

      document.getElementById('entrada2').value = conversion
})



let arrayNotas = []

arrayNotas.push ({id:1, titulo: 'Nota 1', texto: 'Texto nota 1', realizada: false });
arrayNotas.push ({id:2, titulo: 'Nota 2', texto: 'Texto nota 2', realizada: false });

let idGlobal = 2

function pintarNotas() {
  let contenedor = document.getElementById ('contenedor')
  contenedor.innerHTML = '';

  
if (arrayNotas.length === 0) {
  contenedor.innerHTML = `<p>NO HAY NOTAS PARA MOSTRAR</p>`;
  return;
}

arrayNotas.forEach ((nota) => {

  let contenedor = document.getElementById ('contenedor')
  let contenidoContendor = document.createElement ('div')
  contenidoContendor.className = "card text-bg-warning mb-3 notaspintadas"
  contenidoContendor.id = `nota-${nota.id}`;
  contenidoContendor.innerHTML = `
    <div class="form-check">
                <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada? "checked": ""} id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    ${nota.titulo}
                </label>
            </div>
            <div class="card-body text-center">
                <p class="card-text">${nota.texto} </p>
                <button class="btn btn-danger" onClick="borrarNota(${nota.id})">Borrar nota</button>
            </div>
  `
contenedor.appendChild (contenidoContendor);
})
  
}




function agregarNota(titulo, texto) {
  idGlobal++;
let objetosArray = {id: idGlobal, titulo, texto, realizada: false };

arrayNotas.push (objetosArray);

}

// console.log(arrayNotas);
// agregarNota()

let botonGuardar = document.getElementById ("btnGuardar")
botonGuardar.addEventListener ('click', (g) => {
let tituloNota = document.getElementById ('tituloNota').value;
let textoNota = document.getElementById ('textoNota').value;

if (tituloNota === '' || textoNota === '') {
  alert ('Porfavor llene los datos');
  return;
}
agregarNota(tituloNota, textoNota)
pintarNotas()
})


function borrarNota(id) {
  
arrayNotas = arrayNotas.filter (nota => nota.id !== id);
pintarNotas();
}



let botonBorrar = document.getElementById ("btnBorrar")
botonBorrar.addEventListener ('click', (b) => {
 document.getElementById ('tituloNota').value = '';
 document.getElementById ('textoNota').value = '';

})

function marcarRealizada(id) {

let nota = arrayNotas.find (nota => nota.id === id);
if (nota) {
  nota.realizada = !nota.realizada;
  pintarNotas ()
}
 
};

function filtrarRealizadas(array) {
  
let filtrarRealizadas = document.getElementById ('filtrarRealizadas').checked;
return filtrarRealizadas ? array.filter (nota => nota.realizada) : array;

}

function filtrarTexto(array, texto) {
  
if (texto === '') 
  return array ;

return array.filter (nota => nota.titulo.includes (texto) || nota.texto.includes (texto));

}

function actualizarNotasFiltradas() {
  let texto = document.getElementById ('filtrarTexto').value;
  let notasFiltradas = filtrarTexto (arrayNotas, texto);
  notasFiltradas = filtrarRealizadas(notasFiltradas);
  pintarNotasFiltradas (notasFiltradas);
}


function pintarNotasFiltradas(notasFiltradas) {
  let contenedor = document.getElementById ('contenedor')
  contenedor.innerHTML = '';

  
if (arrayNotas.length === 0) {
  contenedor.innerHTML = `<p>NO HAY NOTAS PARA MOSTRAR</p>`;
  return;
}

arrayNotas.forEach ((nota) => {

  let contenedor = document.getElementById ('contenedor')
  let contenidoContendor = document.createElement ('div')
  contenidoContendor.className = "card text-bg-warning mb-3 notaspintadas"
  contenidoContendor.id = `nota-${nota.id}`;
  contenidoContendor.innerHTML = `
    <div class="form-check">
                <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada? "checked": ""} id="flexCheckDefault-${nota.id} ">
                <label class="form-check-label" for="flexCheckDefault-${nota.id} ">
                    ${nota.titulo}
                </label>
            </div>
            <div class="card-body text-center">
                <p class="card-text">${nota.texto} </p>
                <button class="btn btn-danger" onClick="borrarNota(${nota.id})">Borrar nota</button>
            </div>
  `
contenedor.appendChild (contenidoContendor);
});

}

document.getElementById ('filtrarTexto').addEventListener('input', actualizarNotasFiltradas);
document.getElementById ('filtrarRealizadas').addEventListener('change', actualizarNotasFiltradas);

pintarNotas();