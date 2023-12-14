# Usa una imagen oficial de Node.js como imagen base
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor Docker
WORKDIR /usr/src/app

# Copia package.json y package-lock.json al directorio de trabajo
COPY servidor/package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia los archivos de cliente y construye la aplicación de cliente
COPY cliente/package*.json ./cliente/
RUN npm install --prefix cliente
COPY cliente/ ./cliente/
RUN npm run build --prefix cliente

# Copia el resto del código de la aplicación al directorio de trabajo
COPY . .

# Expone el puerto 3000 fuera del contenedor Docker
EXPOSE 8080

# Ejecuta la aplicación cuando el contenedor Docker se inicia
CMD [ "node", "servidor/src/server.js" ]