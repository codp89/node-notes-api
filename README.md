API REST de Notas – Node.js + Express + MongoDB

API RESTful desarrollada con Node.js, Express y MongoDB (Mongoose) para gestionar notas con título, contenido, etiquetas y estado de archivado.
Incluye búsqueda por texto, filtrado y estructura modular siguiendo buenas prácticas.

Características principales

CRUD completo de notas

Búsqueda por texto (search=...)

Manejo de tags

Ordenamiento por fecha

Arquitectura escalable (Rutas – Controladores – Modelos)

MongoDB con Mongoose

Variables de entorno con .env

Compatible con frontends React, Angular, Vue o apps móviles


Tecnologías utilizadas

Node.js

Express

MongoDB

Mongoose

dotenv

CORS

Nodemon (desarrollo)

Instalación y configuración
1 -Clonar el repositorio
git clone git clone https://github.com/codp89/node-notes-api.git
cd node-notes-api

2 -Instalar dependencias
npm install

3 -Configurar variables de entorno

Crear un archivo .env:

MONGODB_URI=mongodb://localhost:27017/notes_db
PORT=4000

▶Ejecutar la API
Modo desarrollo (nodemon)
npm run dev

Modo producción
npm start


El servidor por defecto levanta en:

http://localhost:4000/

Endpoints
GET /api/notes

Obtiene todas las notas.

GET /api/notes?search=texto

Busca notas por título o contenido.

GET /api/notes/:id

Retorna una nota por su ID.

POST /api/notes

Crea una nota.
Body ejemplo:

{
  "title": "Mi primera nota",
  "content": "Contenido de prueba",
  "tags": ["personal", "importante"]
}

PUT /api/notes/:id

Actualiza una nota.
Body ejemplo:

{
  "title": "Nota actualizada",
  "content": "Contenido actualizado",
  "tags": ["trabajo"],
  "archived": true
}

DELETE /api/notes/:id

Elimina una nota por su ID.

Modelo de datos (Mongoose)
{
  title: String,
  content: String,
  tags: [String],
  archived: Boolean,
  createdAt: Date,
  updatedAt: Date
}

Comandos útiles
Comando	Descripción
npm install	Instala dependencias
npm run dev	Ejecuta la API en modo desarrollo
npm start	Ejecuta la API en producción
npm run	Lista los scripts disponibles
