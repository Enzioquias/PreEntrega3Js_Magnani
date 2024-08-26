const selector = document.getElementById("eleccionAnimal");
const inputCantidad = document.getElementById("cantidadAnimales");
const botonCalcular = document.getElementById("botonCalcular");

const resultadoTiempo = document.getElementById("resultadoTiempo");
const labelTiempo = document.getElementById("labelTiempo");
const resultadoKilosBalanceado = document.getElementById(
  "resultadoKilosBalanceado"
);
let resultadoCosto = document.getElementById("resultadoCosto");

botonCalcular.addEventListener("click", (event) => {
  event.preventDefault();
  calculoDePagina();
});

selector.addEventListener("change", (event) =>{
  calculoDePagina();
})

inputCantidad.addEventListener("change", (event) =>{
  calculoDePagina();
})





function calculoDePagina() {
  mostrarTiempo();
  // prevenimos el reseteo de la pagina al hacer submit con el boton

  let seleccionAnimal = selector.value;
  let cantidadAnimales = inputCantidad.value;

  switch (seleccionAnimal) {
    case "0":
      resultadoTiempo.value = 115;
      resultadoKilosBalanceado.value = 7 * cantidadAnimales;
      resultadoCosto.value= resultadoKilosBalanceado.value*350;
      break;

    case "1":
      resultadoTiempo.value = 115;
      resultadoKilosBalanceado.value = 6 * cantidadAnimales;
      resultadoCosto.value= resultadoKilosBalanceado.value*350;
      break;

    case "2":
      resultadoTiempo.value = 45;
      resultadoKilosBalanceado.value = 5.5 * cantidadAnimales;
      resultadoCosto.value= resultadoKilosBalanceado.value*380;
      break;

    case "3":
      removerTiempo();
      resultadoKilosBalanceado.value = 2.5 * cantidadAnimales;
      resultadoCosto.value= resultadoKilosBalanceado.value*390;
      break;

    case "4":
      removerTiempo();
      resultadoKilosBalanceado.value = 5 * cantidadAnimales;
      resultadoCosto.value= resultadoKilosBalanceado.value*310;
    default:
      resultadoTiempo.value = 0;
      break;
  }
  
}

function removerTiempo() {
  resultadoTiempo.style.display = "none";
  labelTiempo.style.display = "none";
}

function mostrarTiempo() {
  resultadoTiempo.style.display = "block";
  labelTiempo.style.display = "block";
}
