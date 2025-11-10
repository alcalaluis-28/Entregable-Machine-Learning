// Función para redirigir a una actividad específica
function navegarActividad(url) {
  // Verificar si la URL está definida y es una cadena no vacía
  if (typeof url === 'string' && url.trim() !== '') {
    try {
      window.location.href = url;
    } catch (error) {
      console.error('Error al redirigir a la actividad: ', error);
    }
  } else {
    console.error('URL no válida:', url);
  }
}
