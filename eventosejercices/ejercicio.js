let botonCalcular = document.getElementById('calcular')

botonCalcular.addEventListener('click', (calculo) => {

    let estatura = document.getElementById('estatura').value;
    let peso = document.getElementById('peso').value;

    const est = parseFloat(estatura);
    const pes = parseFloat(peso);

    let suma = est + pes

    let division = suma / pes

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

