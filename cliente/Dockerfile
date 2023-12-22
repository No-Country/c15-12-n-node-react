# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código del cliente al directorio de trabajo
COPY ./src/cliente/dist/index.html /usr/src/app/src/cliente/dist/
COPY . .

# Compila el proyecto cliente
RUN npm run build

# Expone el puerto 3000 fuera del contenedor Docker
EXPOSE 3001

# Define el comando para iniciar el servidor de desarrollo
CMD [ "npm", "start" ]