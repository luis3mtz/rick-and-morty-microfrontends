# Rick and Morty Microfrontends

Este proyecto implementa una aplicación web basada en **microfrontends** utilizando React y Module Federation, consumiendo la API pública de Rick and Morty. Está dockerizada para un despliegue local sencillo.

---

## Estructura del proyecto

- `mf-characters`: Microfrontend para listado de personajes.  
- `mf-character-detail`: Microfrontend para detalle de personaje.  
- `mf-shell`: Contenedor principal y orquestador.

---

## Cómo correr localmente (modo desarrollo)

Para cada microfrontend, realiza:

```bash
# Para mf-characters
cd mf-characters
npm install
npm start

# Para mf-character-detail
cd mf-character-detail
npm install
npm start

# Para mf-shell
cd mf-shell
npm install
npm start

# Construir y levantar todos los microfrontends con docker-compose desde la raiz
docker-compose up --build

# El proyecto es visible a travez del puerto:
http://localhost:5003/

