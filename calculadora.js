const selector = document.getElementById("eleccionAnimal");
const inputCantidad = document.getElementById("cantidadAnimales");
const botonCalcular = document.getElementById("botonCalcular");
const resultadoTiempo = document.getElementById("resultadoTiempo");
const labelTiempo = document.getElementById("labelTiempo");
const resultadoKilosBalanceado = document.getElementById(
  "resultadoKilosBalanceado"
);
const navbar = document.querySelector("nav");
const footer = document.querySelector("footer");
const resultadoCosto = document.getElementById("resultadoCosto");
const aclaraciones = document.getElementById("aclaraciones");
const modoOscuroBoton = document.getElementById("modoOscuro");
const body = document.querySelector("body");

const darkMode = localStorage.getItem("darkMode") === "true";
// El resultado es un booleano que indica si ya teniamos darkMode enabled desde antes. De ser asi aplica los cambios de dark mode
if (localStorage.getItem("darkMode") === "true"){
  modoOscuroOn();
}


botonCalcular.addEventListener("click", (event) => {
  event.preventDefault();
  calculoDePagina();
});

selector.addEventListener("change", (event) => {
  calculoDePagina();
});

inputCantidad.addEventListener("change", (event) => {
  calculoDePagina();
});

function calculoDePagina() {
  mostrarTiempo();
  // prevenimos el reseteo de la pagina al hacer submit con el boton

  let seleccionAnimal = selector.value;
  let cantidadAnimales = inputCantidad.value;

  switch (seleccionAnimal) {
    case "0":
      resultadoTiempo.value = 115;
      resultadoKilosBalanceado.value = 7 * cantidadAnimales;
      resultadoCosto.value = resultadoKilosBalanceado.value * 350;
      aclaraciones.innerText = `Costo de crianza y consumo de alimento calculados desde nacimiento hasta semana 17 (previo a inicio de postura)`;
      break;

    case "1":
      resultadoTiempo.value = 115;
      resultadoKilosBalanceado.value = 6 * cantidadAnimales;
      resultadoCosto.value = resultadoKilosBalanceado.value * 350;
      aclaraciones.innerText = `Costo de crianza y consumo de alimento calculados desde nacimiento hasta semana 17 (previo a inicio de postura)`;
      break;

    case "2":
      resultadoTiempo.value = 45;
      resultadoKilosBalanceado.value = 5.5 * cantidadAnimales;
      resultadoCosto.value = resultadoKilosBalanceado.value * 380;
      aclaraciones.innerText = `Costo de crianza y consumo de alimento calculados desde nacimiento hasta faena en un peso promedio de 3kg de peso vivo`;

      break;

    case "3":
      removerTiempo();
      resultadoKilosBalanceado.value = 4 * cantidadAnimales;
      resultadoCosto.value = resultadoKilosBalanceado.value * 390;
      aclaraciones.innerText = `Costo de crianza y consumo de alimento calculados para una razon diaria y asumiendo un lote de cerdos de aprox 80-100kg de peso vivo \n \n En caso de ser necesario realizar ajustes a otros pesos de porcinos, calcular ración diaria equivalente al 4% del peso vivo de los animales.`;
      break;

    case "4":
      removerTiempo();
      resultadoKilosBalanceado.value = 5 * cantidadAnimales;
      resultadoCosto.value = resultadoKilosBalanceado.value * 310;
      aclaraciones.innerText = `Costo de crianza y consumo de alimento calculados para una razon diaria y asumiendo un lote de bovinos de aprox 200-300kg de peso vivo \n \n En caso de ser necesario realizar ajustes a otros pesos de bovinos, calcular ración diaria equivalente al 2% del peso vivo de los animales.`;
    default:
      resultadoTiempo.value = 0;
      break;
  }
}

modoOscuroBoton.addEventListener("click",(event)=> {
 modoOscuroCambios();
})


function removerTiempo() {
  resultadoTiempo.style.display = "none";
  labelTiempo.style.display = "none";
}

function mostrarTiempo() {
  resultadoTiempo.style.display = "block";
  labelTiempo.style.display = "block";
}

function modoOscuroCambios() {
  if (localStorage.getItem("darkMode")==="true") {modoOscuroOff();
    localStorage.setItem("darkMode", "");
  }
  
  else {
    modoOscuroOn();
    localStorage.setItem("darkMode", "true");}

}

function modoOscuroOn(){
  body.style.backgroundColor="rgb(40,40,40)";
    body.style.color='white';
    footer.style.backgroundColor="black";
    footer.style.color='white';
    navbar.style.backgroundImage = 'linear-gradient(to top, rgb(161, 216, 148), rgb(66, 66, 66))!important';
    // ^^^^^^^^^^ No esta funcionando ^^^^^^^^^^;
}

function modoOscuroOff(){
  body.style.backgroundColor="";
  body.style.color='';
  footer.style.backgroundColor="";
  footer.style.color='';
  navbar.style.backgroundImage="";
  localStorage.setItem("darkMode", "f");
}
