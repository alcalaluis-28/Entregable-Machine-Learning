# 🚀 **Proyecto de Clasificación e Interacción con ML5 / P5**

## 📝 **Introducción**
Este repositorio contiene una serie de ejercicios que exploran las capacidades de la **Inteligencia Artificial** en el navegador utilizando las bibliotecas **ML5.js** y **P5.js** para visualización y aprendizaje automático. El proyecto está organizado en tres actividades principales:

## 📂 **Estructura del Proyecto**:
```bash
/ENTREGABLE_TALLER_ML/ // Nombre del Proyecto
├── CSS/ // Carpeta que almacena las hojas de estilos
│ ├── actividad1.css
│ ├── actividad2.css
│ ├── actividad3.css
│ └── index.css
├── Imágenes/ // Carpeta con imágenes usadas en el proyecto
│ ├── lente.jpeg
│ ├── mouse.jpeg
│ ├── peine.jpeg
│ ├── protectorsolar.jpeg
│ └── tijera.jpeg
├── JS/ // Lógica de los scripts ML
│ ├── actividad1.js
│ ├── actividad2.js
│ ├── actividad3.js
│ └── index.js
├── models/ // Modelos entrenados con Teachable Machine
│ ├── metadata.json
│ ├── model.json
│ └── weights.bin
├── actividad1.html
├── actividad2.html
├── actividad3.html
├── index.html
└── README.md
```

## ⚙️ **Tecnologías Usadas:**
- **ML5.js**: Librería de aprendizaje automático fácil de usar para el desarrollo web.
- **P5.js**: Librería de JavaScript para codificación creativa y visualización.
- **HTML/CSS**: Estructura y estilos de la interfaz.
- **Modelos Teachable Machine**: Modelos preentrenados para clasificación de objetos (carpeta `models`).

## 🖥️ **Ejecutar el Proyecto:**
Dado que este proyecto carga modelos de **Machine Learning** de archivos locales, debe ser ejecutado a través de un servidor web local.

### 📦 **Instrucciones para ejecutar:**
1. **Instala un servidor local** (por ejemplo, usando **VS Code**).
2. **Abre el proyecto** en **VS Code**.
3. **Navega a "index.html"**, haz clic derecho y selecciona **"Abrir con Live Server"**.

💡 **Nota**: Si la cámara no se activa en la **Actividad C**, asegúrate de otorgar permisos al navegador para acceder a tu cámara.

---

## 🖼️ **Descripción de las Actividades**

### 1️⃣ **Actividad 1: Reconocimiento de Imagen**  
- **🎯 Objetivo**: Clasificar una imagen subida por el usuario.  
- **🧠 Modelo Usado**: MobileNet  
- **🖱️ Funcionalidad**: Muestra la etiqueta y el porcentaje de confianza de la clasificación de la imagen.

### 2️⃣ **Actividad 2: Login con Dibujo (Doodle)**  
- **🎯 Objetivo**: Autenticación de un usuario mediante credenciales y el reconocimiento de un dibujo realizado en el canvas.  
- **🧠 Modelo Usado**: DoodleNet  
- **🖱️ Funcionalidad**: El usuario ingresa sus credenciales, dibuja en la "Zona CANVAS" y el modelo intenta clasificar el dibujo realizado.

### 3️⃣ **Actividad 3: Clasificación Webcam y Voz**  
- **🎯 Objetivo**: Clasificación de objetos en tiempo real con la webcam y síntesis de voz del resultado.  
- **🧠 Modelo Usado**: Modelo entrenado en Teachable Machine con las clases: **lente**, **mause**, **peine**, **protector solar**, **tijera**.  
- **🖱️ Funcionalidad**:
  - Muestra el video de la webcam.
  - Clasifica los objetos en tiempo real usando el **canvas**.
  - Permite configurar el **Tono**, **Velocidad** y **Volumen**.
  - Al presionar "Hablar Clasificación Actual", el sintetizador de voz del navegador anuncia el objeto detectado.

---

