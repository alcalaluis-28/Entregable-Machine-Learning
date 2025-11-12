// Inicialización de variables globales
let objectClassifier;
let modelURL = "./models/"; 
let webcam;
let flippedWebcam;
let objectLabel = "";
let speakLabel = "";

// Controles de voz
const voiceSelector = document.querySelector("#voices");
const pitchControl = document.querySelector("#pitch");
const rateControl = document.querySelector("#rate");
const volumeControl = document.querySelector("#volume");
const speakButton = document.querySelector("#speak");
const videoContainer = document.querySelector("#video-container");

// Cargar el modelo
function preload() {
  objectClassifier = ml5.imageClassifier(modelURL + "model.json");
}

// Configuración inicial del video
function setup() {
  canvas = createCanvas(videoContainer.offsetWidth, videoContainer.offsetHeight);
  canvas.parent("video-container");

  webcam = createCapture(VIDEO);
  webcam.size(videoContainer.offsetWidth, videoContainer.offsetHeight);
  webcam.hide(); 

  flippedWebcam = ml5.flipImage(webcam);
  classifyWebcam(); 
}

// Mostrar el video y la etiqueta
function draw() {
  background(0);
  image(flippedWebcam, 0, 0);
  fill(255);
  textSize(25);
  textAlign(CENTER);
  text(objectLabel, width / 2, height - 15);
}

// Clasificación continua
function classifyWebcam() {
  flippedWebcam = ml5.flipImage(webcam);
  objectClassifier.classify(flippedWebcam, handleClassificationResult);
  flippedWebcam.remove(); 
}

// Manejar resultados de la clasificación
function handleClassificationResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  objectLabel = results[0].label;
  speakLabel = results[0].label;
  classifyWebcam(); 
}

// Cargar voces disponibles
speechSynthesis.addEventListener("voiceschanged", () => {
  const voices = speechSynthesis.getVoices();
  const options = voices.map((voice, index) => {
    return `<option value='${index}'>${voice.name}</option>`;
  });
  voiceSelector.innerHTML = options.join(""); 
});

// Sintetizar la voz al hacer clic
speakButton.addEventListener("click", () => {
  const message = new SpeechSynthesisUtterance(speakLabel);
  const selectedVoiceIndex = voiceSelector.selectedIndex;
  message.voice = speechSynthesis.getVoices()[selectedVoiceIndex];
  message.pitch = parseFloat(pitchControl.value);
  message.rate = parseFloat(rateControl.value);
  message.volume = parseFloat(volumeControl.value);
  speechSynthesis.speak(message);
});
