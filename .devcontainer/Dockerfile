ARG VARIANT=1-20-bullseye
FROM mcr.microsoft.com/devcontainers/typescript-node:${VARIANT}
RUN apt-get update
# Crear directorio de la aplicación
WORKDIR /app-dir
RUN su node -c "npm install -g npm@10.7.0"
RUN su node -c "npm install -g @angular/cli@17.3.6"
RUN su node -c "npm install -g nx@18.3.4"
EXPOSE 4200
EXPOSE 6006
EXPOSE 4400
CMD ["ng", "ng serve", "--host", "0.0.0.0", "npx", "nx"]