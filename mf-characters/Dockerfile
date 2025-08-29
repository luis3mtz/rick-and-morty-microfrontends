# Etapa de build
FROM node:18-alpine AS build
WORKDIR /app

# Copiar package.json y package-lock.json para caché de npm
COPY package*.json ./
RUN npm install

# Copiar todo el proyecto
COPY . .

# Build de producción
RUN npm run build

# Etapa de producción con Nginx
FROM nginx:alpine
# Copiar build y configuración de Nginx
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto 80 para el contenedor
EXPOSE 80

# Ejecutar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
