# NexoVector Tech — Sitio Web

Sitio web corporativo de **NexoVector Tech**, empresa de consultoría estratégica en Telecomunicaciones, Electrónica, Ciberseguridad, Tecnología de la Información, IoT e Industria y Automatización.

## 📁 Estructura del proyecto

```
nexovector-tech/
├── index.html              Página principal (misión, visión, CEO, video, áreas, contacto, foro)
├── consultoria.html        Detalle de las 6 áreas de consultoría
├── contacto.html           Contacto completo + foro de comentarios
├── oferta-laboral.html     Vacantes por área + formulario de postulación
├── cursos.html             Cursos profesionales por área + formulario de inscripción
├── blog.html               Artículos técnicos con filtros por categoría
├── macro-proyectos.html    Ciudades inteligentes y sistemas tecnológicos
├── eventos.html            Próximos eventos + formulario de registro
├── css/
│   └── styles.css          Hoja de estilos compartida (vinculada en las 8 páginas)
├── js/
│   └── main.js              Interactividad compartida (navbar, foro, validación, animaciones)
├── img/
│   └── logo.svg              Logo de la marca (nodos conectados)
└── video/
    └── README.txt            Instrucciones para agregar el video corporativo
```

## 🚀 Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub, por ejemplo `nexovector-tech`.
2. Sube **todo el contenido de esta carpeta** (no la carpeta contenedora) a la raíz del repositorio.
3. Ve a **Settings → Pages**.
4. En "Source", selecciona la rama `main` y la carpeta `/ (root)`.
5. Guarda. En un par de minutos tu sitio estará disponible en:
   `https://<tu-usuario>.github.io/nexovector-tech/`

## 🎬 Agregar el video corporativo

Revisa las instrucciones detalladas en `video/README.txt`. Puedes usar un video de YouTube (recomendado) o subir un archivo .mp4 al repositorio.

## 💬 Foro de comentarios

El foro (en `index.html` y `contacto.html`) guarda los mensajes en el `localStorage` del navegador de cada visitante — es una solución 100% estática, sin backend. Si más adelante quieres que los comentarios sean compartidos entre todos los visitantes, se puede conectar a un servicio externo (Firebase, Formspree, Supabase, etc.).

## 📝 Formularios

Todos los formularios (foro, contacto, postulación laboral, inscripción a cursos, registro a eventos) tienen validación en tiempo real en el navegador. Actualmente no envían datos a un servidor: para recibir esta información por correo puedes conectar un servicio como Formspree, Web3Forms o Google Forms, o desarrollar un backend propio.

## 🎨 Personalización

Todos los colores, tipografías y espaciados están centralizados como variables CSS al inicio de `css/styles.css` (sección `:root`), por lo que puedes cambiar la paleta de toda la web editando unas pocas líneas.

## 📬 Contacto

- Correo: nexovector.consultoria.tech@gmail.com
- Facebook: https://www.facebook.com/profile.php?id=100077255801380
- LinkedIn: https://www.linkedin.com/in/jean-carlo-cruz-fajardo-537061153/
- Portafolio: https://portafoliojeancruz.framer.website/

---
© 2026 NexoVector Tech — Ing. Jean Carlo Cruz Fajardo, MSc. (CEO)
