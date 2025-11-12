// Definir la clase Usuario para manejar la lógica de autenticación
class Usuario {
  constructor(nombre, clave, codigoDibujo) {
    this.nombre = nombre;
    this.clave = clave;
    this.codigoDibujo = codigoDibujo;
  }

  // Validar si las credenciales coinciden
  validarCredenciales(clave, codigoDibujo, confianza) {
    return (
      this.clave === clave &&
      this.codigoDibujo === codigoDibujo &&
      confianza >= 0.7
    );
  }
}

// Lista de usuarios registrados con nuevos datos
const usuariosRegistrados = [
  new Usuario("mariana", "987654", "apple"),     
  new Usuario("juanito", "secret123", "sun"),    
  new Usuario("carlos", "pass1234", "car"),     
];

let classifier; 
let canvas;
let resultado = "";
let probabilidad = 0;

// Pre-cargar el modelo
function preload() {
  // Cargar el modelo DoodleNet para reconocimiento de dibujos
  classifier = ml5.imageClassifier("DoodleNet");
}

// Configurar el canvas y comenzar la clasificación del dibujo
function setup() {
  // Crear el canvas dentro del contenedor
  canvas = createCanvas(280, 280);
  canvas.parent("canvasContainer");
  background(255);

  // Activar clasificación automática del dibujo
  classifier.classifyStart(canvas, gotResult);
}

function draw() {
  strokeWeight(20);
  stroke(0);

  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

// Mostrar en pantalla lo que el modelo detecta en tiempo real
function gotResult(results) {
  resultado = results[0].label;
  probabilidad = (results[0].confidence * 100).toFixed(1);

  document.getElementById("resultado").textContent =
    `🖌️ Estás dibujando: ${resultado} (${probabilidad}%)`;
}

// Botón limpiar lienzo
document.getElementById("btnLimpiar").addEventListener("click", () => {
  background(255);
  resultado = "";
  document.getElementById("resultado").textContent = "Esperando dibujo...";
});

// Botón login
document.getElementById("btnLogin").addEventListener("click", () => {
  const usuario = document.getElementById("usuario").value.trim();
  const clave = document.getElementById("clave").value.trim();

  if (usuario === "" || clave === "" || resultado === "") {
    document.getElementById("mensaje").textContent =
      "Completa todos los campos y dibuja tu código.";
    return;
  }

  // Buscar el usuario correspondiente
  const usuarioEncontrado = usuariosRegistrados.find(
    (usuarioRegistrado) => usuarioRegistrado.nombre === usuario
  );

  if (usuarioEncontrado) {
    // Verificar las credenciales
    if (
      usuarioEncontrado.validarCredenciales(clave, resultado, probabilidad)
    ) {
      document.getElementById("mensaje").textContent =
        "Acceso concedido. Bienvenido " + usuario + "!";
    } else {
      document.getElementById("mensaje").textContent =
        "Datos incorrectos o dibujo no reconocido.";
    }
  } else {
    document.getElementById("mensaje").textContent =
      "Login fallido. Usuario no encontrado.";
  }
});
