const selector = document.getElementById("eleccionAnimal");
const inputCantidad = document.getElementById("cantidadAnimales");
const botonGuardar = document.getElementById("botonGuardar");
const botonBorrar = document.getElementById("botonResetForm");
const resultadoTiempo = document.getElementById("resultadoTiempo");
const labelTiempo = document.getElementById("labelTiempo");
const resultadoKilosBalanceado = document.getElementById(
  "resultadoKilosBalanceado"
);
const tabla = document.getElementById("tabla");

const tablaEncabezado = document.querySelectorAll(".tablaEncabezado");

const tituloNavBar = document.getElementById("navbar-titulo");
const navbar = document.querySelector("nav");
const footer = document.querySelector("footer");
const resultadoCosto = document.getElementById("resultadoCosto");
const aclaraciones = document.getElementById("aclaraciones");
const modoOscuroBoton = document.getElementById("modoOscuro");
const body = document.querySelector("body");

const darkMode = localStorage.getItem("darkMode") === "true";

if (localStorage.getItem("darkMode") === "true") {
  modoOscuroOn();
}

class ItemHistorial {
  constructor(
    animal,
    cantidadAnimales,
    cantidadKilosBalanceado,
    costoBalanceado,
    tiempoCrianza
  ) {
    this.animal = animal;
    this.cantidadAnimales = cantidadAnimales;
    this.cantidadKilosBalanceado = cantidadKilosBalanceado;
    this.costoBalanceado = costoBalanceado;
    this.tiempoCrianza = tiempoCrianza;
  }
}

let itemsHistorial;
if (localStorage.getItem("arrayPedidos")) {
  itemsHistorial = JSON.parse(localStorage.getItem("arrayPedidos"));
  escrituraTabla(JSON.parse(localStorage.getItem("arrayPedidos")));
  tablaEncabezado.forEach((elemento) => {
    elemento.style.display = "";
  });
} else {
  itemsHistorial = [];
  tablaEncabezado.forEach((elemento) => {
    elemento.style.display = "none";
  });
}

botonGuardar.addEventListener("click", (event) => {
  event.preventDefault();
  const filasABorrar = document.querySelectorAll(".filaHistorial");
  filasABorrar.forEach((elemento) => elemento.parentNode.removeChild(elemento));

  calculoDePagina();
  if (inputCantidad.value > 0) {
    itemsHistorial.push(
      new ItemHistorial(
        selector.value,
        inputCantidad.value,
        resultadoKilosBalanceado.value,
        resultadoCosto.value,
        resultadoTiempo.value
      )
    );
    localStorage.setItem("arrayPedidos", JSON.stringify(itemsHistorial));
    escrituraTabla(JSON.parse(localStorage.getItem("arrayPedidos")));
    tablaEncabezado.style.display = "";
  }
});

botonBorrar.addEventListener("click", (event) => {
  event.preventDefault;
  localStorage.removeItem("arrayPedidos");
  location.reload();
});

selector.addEventListener("change", (event) => {
  calculoDePagina();
});

inputCantidad.addEventListener("change", (event) => {
  calculoDePagina();
});

const animalesStorage = JSON.parse(localStorage.getItem("animales"));
if (animalesStorage) {
  animales = animales.concat();
}

function calculoDePagina() {
  mostrarTiempo();

  let seleccionAnimal = selector.value;
  let cantidadAnimales = inputCantidad.value;

  switch (seleccionAnimal) {
    case "Ponedora Lohmahn":
      resultadoTiempo.value = 115;
      resultadoKilosBalanceado.value = 7 * cantidadAnimales;
      resultadoCosto.value = resultadoKilosBalanceado.value * 350;
      aclaraciones.innerText = `Costo de crianza y consumo de alimento calculados desde nacimiento hasta semana 17 (previo a inicio de postura)`;
      break;

    case "Ponedora Leghorn":
      resultadoTiempo.value = 115;
      resultadoKilosBalanceado.value = 6 * cantidadAnimales;
      resultadoCosto.value = resultadoKilosBalanceado.value * 350;
      aclaraciones.innerText = `Costo de crianza y consumo de alimento calculados desde nacimiento hasta semana 17 (previo a inicio de postura)`;
      break;

    case "Pollos Parrilleros Broiler":
      resultadoTiempo.value = 45;
      resultadoKilosBalanceado.value = 5.5 * cantidadAnimales;
      resultadoCosto.value = resultadoKilosBalanceado.value * 380;
      aclaraciones.innerText = `Costo de crianza y consumo de alimento calculados desde nacimiento hasta faena en un peso promedio de 3kg de peso vivo`;

      break;

    case "Cerdos":
      removerTiempo();
      resultadoKilosBalanceado.value = 4 * cantidadAnimales;
      resultadoCosto.value = resultadoKilosBalanceado.value * 390;
      aclaraciones.innerText = `Costo de crianza y consumo de alimento calculados para una razon diaria y asumiendo un lote de cerdos de aprox 80-100kg de peso vivo \n \n En caso de ser necesario realizar ajustes a otros pesos de porcinos, calcular ración diaria equivalente al 4% del peso vivo de los animales.`;
      break;

    case "Ganado Bovino":
      removerTiempo();
      resultadoKilosBalanceado.value = 5 * cantidadAnimales;
      resultadoCosto.value = resultadoKilosBalanceado.value * 310;
      aclaraciones.innerText = `Costo de crianza y consumo de alimento calculados para una razon diaria y asumiendo un lote de bovinos de aprox 200-300kg de peso vivo \n \n En caso de ser necesario realizar ajustes a otros pesos de bovinos, calcular ración diaria equivalente al 2% del peso vivo de los animales.`;
    default:
      
      break;
  }
}

modoOscuroBoton.addEventListener("click", (event) => {
  modoOscuroCambios();
  formatoTablas();
});

function removerTiempo() {
  resultadoTiempo.value = 0;
  resultadoTiempo.style.display = "none";
  labelTiempo.style.display = "none";
}

function mostrarTiempo() {
  resultadoTiempo.style.display = "block";
  labelTiempo.style.display = "block";
}

function modoOscuroCambios() {
  if (localStorage.getItem("darkMode") === "true") {
    modoOscuroOff();
    localStorage.setItem("darkMode", "");
  } else {
    modoOscuroOn();
    localStorage.setItem("darkMode", "true");
  }
}

function modoOscuroOn() {
  filaHistorial = document.querySelector(".filaHistorial");
  body.style.backgroundColor = "rgb(40,40,40)";
  body.style.color = "white";
  footer.style.backgroundColor = "black";
  footer.style.color = "white";
  resultadoCosto.style.color = "white";
  resultadoKilosBalanceado.style.color = "white";
  resultadoTiempo.style.color = "white";
  navbar.style.setProperty(
    "background-image",
    "linear-gradient(to bottom, rgb(52, 173, 52), rgb(40, 40, 40)",
    "important"
  );
  tituloNavBar.style.setProperty("color", "white", "important");

  formatoTablas();
}

function modoOscuroOff() {
  filaHistorial = document.querySelector(".filaHistorial");
  body.style.backgroundColor = "";
  body.style.color = "";
  footer.style.backgroundColor = "";
  footer.style.color = "";
  navbar.style.backgroundImage = "";
  tituloNavBar.style.color = "";
  resultadoCosto.style.color = "";
  resultadoKilosBalanceado.style.color = "";
  resultadoTiempo.style.color = "";
  localStorage.setItem("darkMode", "f");

  formatoTablas();
}

async function valorDolar() {
  const response = await fetch("https://dolarapi.com/v1/dolares/blue");
  const json = await response.json();
  return json.compra;
}

async function escrituraTabla(arr) {
  let valor = await valorDolar();

  arr.forEach((elemento) => {
    let fila = document.createElement("tr");
    fila.classList.add("filaHistorial");
    if (elemento.tiempoCrianza == 0) {
      elemento.tiempoCrianza = "Esta ración es diaria";
    } else {
      elemento.tiempoCrianza = `${elemento.tiempoCrianza} días`;
    }
    fila.innerHTML = `<td>${elemento.animal}</td><td>${
      elemento.cantidadAnimales
    } </td><td>${elemento.cantidadKilosBalanceado}Kg</td><td>$${
      elemento.costoBalanceado
    }</td><td>$${(elemento.costoBalanceado / valor).toFixed(2)}<td>${
      elemento.tiempoCrianza
    }`;
    tabla.appendChild(fila);
  });

  formatoTablas();
 
}

function formatoTablas() {
  tablaEncabezado.forEach((elemento) => {
    elemento.style.border = "1px solid black";

    if (localStorage.getItem("darkMode") === "true") {
      elemento.style.color="black";
      elemento.style.backgroundColor = "rgb(  89, 89, 89  )";
    } else {
      elemento.style.backgroundColor = "rgb( 146, 238, 238 )";
    }


  });

  const tablaFila = document.querySelectorAll("td");

  tablaFila.forEach((elemento) => {
    elemento.style.border = "1px solid black";

    if (localStorage.getItem("darkMode") === "true") {
      elemento.style.backgroundColor = "rgb(  138, 138, 138  )";
    } else {
      elemento.style.backgroundColor = "rgb( 208, 245, 245 )";
    }
  });
}
