// OBJETOS

// Definimos el objeto constructor coche con sus respectivas propiedades
function coche (color, marca, velocidad) {
    this.color = color;
    this.marca = marca;
    this.velocidad = velocidad;
};
const cochecito = new coche ("rojo", "toyota", "1.6");

console.log (cochecito);

function propAutos (color, ano, marca, modelo) {
    this.color = color;
    this.ano = ano;
    this.marca = marca;
    this.modelo = modelo;
};

const noe = new propAutos ("Amarillo", 2016, "Chevrolet", "Bumblebee");

console.log (noe);

function ave (nombre, ano, altura) {
    this.nombre = nombre;
    this.ano = ano;
    this.altura = altura;
}

let sandra = {
    edad: 61,
    nacionalidad: "argentina",
    hijos: 1
}

console.log (sandra.hijos);

let modificacionHijosSandra = sandra.hijos = 3;

console.log (modificacionHijosSandra);

function auto (marca, anio, estado) {
    this.marca = marca;
    this.anio = anio;
    this.estado = estado;
};

let escarabajo = new auto ("volkswagen", 2003, "usado");

console.log (escarabajo);


function jugador (posicion, equipo, edad) {
    this.posicion = posicion;
    this.equipo = equipo;
    this.edad = edad;
}

let messi = new jugador ("delantero", "inter miami", 37);

console.log (messi);