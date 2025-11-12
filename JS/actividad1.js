let clasificador;
let modeloCargado = false;

// Cargar el modelo cuando la página inicia
window.addEventListener('load', () => {
  clasificador = ml5.imageClassifier('MobileNet', () => {
    modeloCargado = true;
    console.log('Modelo MobileNet cargado correctamente');
  });
});

// Mostrar vista previa de la imagen seleccionada
document.getElementById('inputImagen').addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const imgElement = document.getElementById('imagenSeleccionada');
    imgElement.src = URL.createObjectURL(file);
    imgElement.style.display = 'block';
  }
});

// Cuando se hace clic en "Identificar"
document.getElementById('btnIdentificar').addEventListener('click', () => {
  if (!modeloCargado) {
    alert('El modelo aún se está cargando, espera un momento.');
    return;
  }

  const img = document.getElementById('imagenSeleccionada');
  if (!img.src) {
    alert('Por favor, selecciona una imagen primero.');
    return;
  }

  clasificador.classify(img, (error, resultados) => {
    if (error) {
      console.error(error);
      document.getElementById('resultado').textContent = 'Error al clasificar la imagen.';
    } else {
      console.log(resultados);
      const nombre = resultados[0].label;
      const probabilidad = (resultados[0].confidence * 100).toFixed(2);
      document.getElementById('resultado').innerHTML =
        `Resultado: <strong>${nombre}</strong> (${probabilidad}%)`;
    }
  });
});
