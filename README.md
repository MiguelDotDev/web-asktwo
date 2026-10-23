<div align="center">
  <img src="IMG/Recursos/logo.png" alt="Logo de Ask Two" width="180">
  <h1>Ask Two</h1>
  <p>Prototipo frontend de una comunidad académica para conectar estudiantes universitarios con asesores pares.</p>
  <a href="https://migueldotdev.github.io/web-asktwo/">
    <img src="https://img.shields.io/badge/Ver%20demo-Online-2F81F7?style=for-the-badge" alt="Ver demo de Ask Two">
  </a>
</div>

## Descripción

Ask Two es una propuesta visual de una plataforma académica donde los estudiantes pueden descubrir asesores pares, consultar sus perfiles y conocer las asesorías que ofrecen. La idea parte de una necesidad universitaria concreta: facilitar el acceso a apoyo académico entre compañeros y dar visibilidad a quienes están dispuestos a compartir sus conocimientos.

El repositorio reúne un conjunto de páginas estáticas que representan los recorridos principales de la propuesta: un feed de publicaciones, una búsqueda con resultados filtrables, perfiles de asesores, un perfil propio y un historial de asesorías recibidas. Se trata de un prototipo de interfaz desarrollado en un contexto universitario, no de una aplicación terminada.

## Características del prototipo

### Áreas representadas

- **Feed de comunidad:** publicaciones de asesores con nombre, área de asesoría, texto, imagen opcional, reacciones y fecha.
- **Perfiles de asesor:** portada, fotografía, grupo y cuatrimestre, presentación personal, tarjetas de asesorías y datos de contacto.
- **Búsqueda de contenido:** pantalla de resultados con publicaciones, grupos y asesores, junto con filtros por tipo de resultado.
- **Paneles laterales:** menú de grupos y sección de novedades que pueden abrirse y cerrarse.
- **Perfil propio:** plantilla con secciones para presentación, asesorías y contacto.
- **Historial de asesorías:** listado de asesorías recibidas con acceso a un detalle por medio de un modal.
- **Menú de usuario:** acceso desplegable a "Mi Perfil" y "Mis Asesorias".

### Interacciones implementadas

- Apertura y cierre de los paneles laterales mediante JavaScript (`JS/MenusLaterales.js`).
- Filtrado de resultados de búsqueda por publicaciones, grupos o asesores (`JS/seek.js`).
- Apertura de modales de detalle de asesorías con componentes de Bootstrap.
- Navegación entre el inicio, la búsqueda, tres perfiles de asesor, el perfil propio y el historial.
- La barra de búsqueda del inicio redirige a la pantalla de resultados al hacer clic.

### Elementos solo visuales

Las reacciones, los botones de categorías, el campo de búsqueda y el botón "Edita tu Información" no ejecutan una funcionalidad real. Los datos de perfiles, publicaciones e historial están escritos directamente en el HTML.

## Tecnologías utilizadas

- **HTML5** para la estructura de las páginas.
- **CSS3** para la maquetación y los estilos personalizados.
- **SCSS/Sass** como fuente de las hojas de estilo, con archivos CSS compilados y mapas de origen incluidos.
- **JavaScript puro** para las interacciones de los paneles laterales y los filtros de búsqueda.
- **Bootstrap 5.3.3** por CDN para la rejilla, utilidades, botones y modales.
- **Bootstrap Icons 1.11.3**, **Google Material Symbols Rounded** e **Ionicons 7.1.0** para la iconografía.
- **Google Fonts** para las tipografías Roboto y Playwrite CU utilizadas en los perfiles.

La estructura HTML, la maquetación de las pantallas y los estilos personalizados se desarrollaron para este proyecto. Bootstrap se utiliza como apoyo para componentes y utilidades, no como base de una aplicación con lógica de negocio. El repositorio no incluye `package.json`, dependencias instalables ni un proceso de compilación configurado; los CSS ya están compilados.

## Estructura del proyecto

```text
.
├── index.html                  # Feed principal de la comunidad
├── index2.html                 # Resultados de búsqueda y filtros
├── cuenta1.html                # Perfil público de un asesor
├── cuenta2.html                # Perfil público de un asesor
├── cuenta3.html                # Perfil público de un asesor
├── perfil.html                 # Plantilla del perfil propio
├── historyAsesorias.html       # Historial de asesorías recibidas
├── CSS/
│   ├── nav.scss / nav.css      # Barra de navegación y menú desplegable
│   ├── inicio.scss / inicio.css
│   ├── busqueda.scss / busqueda.css
│   ├── perfil.scss / perfil.css
│   ├── history.scss / history.css
│   └── *.css.map               # Mapas de origen generados por Sass
├── JS/
│   ├── MenusLaterales.js       # Apertura y cierre de paneles laterales
│   └── seek.js                 # Filtros de la pantalla de resultados
└── IMG/
    ├── Recursos/               # Logotipo e imagen del feed
    └── perfil/                 # Fotografías de perfil
```

## Pantallas y navegación

### Inicio / Comunidad — `index.html`

Es la pantalla de entrada del prototipo. Presenta un feed de publicaciones de asesores pares, cada una con su área de asesoría, mensaje, reacciones y fecha. A la izquierda se muestra un panel de grupos con materias como Álgebra, Cálculo Integral, Aplicaciones Web o Inglés; a la derecha, un panel de novedades.

La barra de búsqueda redirige a `index2.html`. Las tarjetas de Miguel Ángel Núñez, Dorian Trejo y Leonardo Barrera enlazan a sus perfiles (`cuenta1.html`, `cuenta2.html` y `cuenta3.html`). El resto de las publicaciones no tiene enlace. El menú de usuario permite acceder a `perfil.html` y `historyAsesorias.html`.

### Resultados de búsqueda — `index2.html`

Representa la búsqueda dentro de Ask Two. La pantalla aparece precargada con la consulta "Calculo Diferencial" y muestra resultados mezclados de publicaciones, grupos y asesores.

Incluye cuatro filtros —Publicaciones, Grupo, Asesores y Todo— que ocultan o muestran los resultados mediante JavaScript. No se realiza una búsqueda real sobre el texto ingresado: los resultados son contenido estático de ejemplo. Desde el menú superior se puede volver al inicio mediante "Comunidad".

### Perfiles públicos de asesor — `cuenta1.html`, `cuenta2.html`, `cuenta3.html`

Presentan la información pública de tres asesores pares: fotografía, nombre, grupo y cuatrimestre, descripción personal, asesorías ofrecidas y datos de contacto. Las tarjetas de asesoría abren un modal con una descripción y un reproductor de video.

Los tres perfiles comparten la misma estructura y cambian el contenido. El logotipo y la opción "Comunidad" regresan al inicio. Los enlaces de correo y teléfono son marcadores sin destino.

### Perfil propio — `perfil.html`

Es una plantilla del perfil del usuario. Contiene textos de ejemplo para el nombre, grupo, descripción, asesorías y datos de contacto, además de un botón para editar la información y un modal de asesoría que no está conectado a ningún control visible.

Funciona como referencia del diseño del perfil, pero no permite editar ni guardar datos. El logotipo también regresa al inicio.

### Historial de asesorías — `historyAsesorias.html`

Muestra el "Historial de Asesorias Recibidas" en una lista de registros estáticos con fecha, asesor y materia. Cada registro incluye un botón de información que abre un modal con el detalle de la asesoría.

No existe filtrado, paginación ni persistencia; los registros están escritos en el HTML.

### Mapa de navegación

```text
index.html
├── barra de búsqueda ──────────> index2.html
├── publicaciones destacadas ──> cuenta1.html / cuenta2.html / cuenta3.html
└── menú de usuario ───────────> perfil.html / historyAsesorias.html

index2.html ──> index.html
cuenta1.html, cuenta2.html, cuenta3.html ──> index.html
perfil.html ──> index.html
historyAsesorias.html ──> index.html
```

La opción "Asesores" de la barra superior apunta a `#` y no forma parte de la navegación implementada.

## Ejecución local

El proyecto no requiere instalar dependencias ni compilar archivos. Puedes clonar el repositorio y abrir la página de entrada:

```bash
git clone git@github.com:MiguelDotDev/web-asktwo.git
cd web-asktwo
```

### Opción 1: abrir el archivo directamente

Abre `index.html` en un navegador. Las rutas a los recursos locales son relativas, por lo que el prototipo funciona sin servidor.

### Opción 2: servidor HTTP local

Si prefieres servir el proyecto por HTTP, ejecuta desde la raíz del repositorio:

```bash
python3 -m http.server 8000
```

Después visita:

```text
http://localhost:8000/index.html
```

En ambos casos se necesita conexión a internet para cargar Bootstrap, las fuentes, los iconos y algunas imágenes externas enlazadas desde el HTML.

## Alcance y limitaciones

Ask Two es un prototipo visual de frontend. Su objetivo es comunicar la idea y los flujos de la propuesta, no operar como una plataforma de producción.

- No existe backend, base de datos, autenticación ni persistencia de información.
- No hay registro de usuarios, reserva de asesorías ni envío real de mensajes.
- La búsqueda no procesa el texto ingresado: la pantalla de resultados contiene datos fijos.
- Los contadores de reacciones, los botones de grupos y la edición del perfil son elementos de interfaz sin comportamiento asociado.
- El historial y los perfiles utilizan datos de ejemplo escritos directamente en el HTML.
- El modal de asesoría intenta cargar un video local que no está incluido en el repositorio; por ello el reproductor no muestra contenido.
- Parte de las imágenes, fuentes e iconos se cargan desde servicios externos y requieren conexión a internet.

Estas limitaciones son propias del alcance del ejercicio: la propuesta se centra en la maquetación, la estructura de las pantallas y las interacciones de interfaz.

## Propósito académico

Ask Two forma parte de un proyecto universitario orientado a representar visualmente una propuesta de interacción académica entre estudiantes. El trabajo permitió ejercitar la estructuración de páginas con HTML, la organización de estilos con CSS y SCSS, la construcción de componentes de interfaz, la navegación entre pantallas y la implementación de interacciones básicas con JavaScript.

## Autor

**Miguel Núñez**
