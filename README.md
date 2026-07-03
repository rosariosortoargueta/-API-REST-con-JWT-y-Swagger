# 🔐 API REST Segura con JWT y Swagger

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express" />
  <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt="JWT" />
  <img src="https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white" alt="Swagger" />
</div>

---

## 📖 Descripción del Proyecto

Esta es una estructura completa para construir una **API RESTful** utilizando Node.js y Express. Se centra en dos de las prácticas más importantes del desarrollo backend moderno: **Seguridad** mediante autenticación con JSON Web Tokens (JWT) y **Documentación** interactiva utilizando Swagger UI. 

Ideal para comprender cómo proteger rutas privadas y exponer tus endpoints de manera profesional para que otros desarrolladores (o el equipo de Frontend) puedan consumirlos fácilmente.

---

## ✨ Características Principales

* 👤 **Sistema de Autenticación:** Endpoints de registro (`/register`) y acceso (`/login`).
* 🔐 **Protección de Rutas:** Middleware personalizado para validar la existencia y vigencia del token JWT en las cabeceras de la petición.
* 📚 **Documentación Interactiva:** Interfaz gráfica generada automáticamente (Swagger) que permite testear la API directamente desde el navegador sin necesidad de usar Postman.
* 🏗️ **Arquitectura Modular:** Separación clara de responsabilidades (Rutas, Controladores, Middlewares y Configuración).

---

## 🚀 Guía de Instalación y Uso

Sigue estos pasos para levantar la API en tu entorno local:

### 1️⃣ Clonar e Instalar
Clona este repositorio e instala las dependencias de Node.js necesarias.

```bash
git clone [https://github.com/TU-USUARIO/tu-repo-api.git](https://github.com/TU-USUARIO/tu-repo-api.git)
cd tu-repo-api
npm install
