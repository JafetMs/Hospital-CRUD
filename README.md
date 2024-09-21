# Proyecto Hospital - Nativo Digital

## Descripción del Proyecto
Se desea desarrollar una aplicación de registro de pacientes para un hospital infantil. Los pacientes son enviados de diferentes hospitales, y el sistema debe permitir registrar la información relevante de cada paciente. 

- **Backend**: El backend fue realizado con Node.js, siguiendo una arquitectura limpia.
- **Frontend**: Se utilizó React para el desarrollo de la interfaz de usuario.
- **Funcionalidades**: La aplicación incluye un CRUD para gestionar pacientes, permitiendo la creación, lectura, actualización y eliminación de registros.

## Backend 

Para el desarrollo del backend, se utilizó Node.js junto con TypeScript y Prisma. A continuación se detallan las dependencias utilizadas:

### Dependencias
- **prisma/client - Cliente de Prisma para la interacción con la base de datos.
- **axios** - Biblioteca para realizar solicitudes HTTP.
- **cors** - Middleware para habilitar CORS en la aplicación.
- **dotenv** - Carga variables de entorno desde un archivo `.env`.
- **env-var** - Manejo de variables de entorno.
- **express** - Framework web para Node.js.

### Estructura
El backend sigue una arquitectura limpia, asegurando una separación adecuada de preocupaciones y facilitando el mantenimiento y escalabilidad de la aplicación.

### Base de Datos
Utilize **PostgreSQL** como sistema de gestión de bases de datos. La base de datos se levanta localmente utilizando **Docker** y posteriormente provisione la DB en **Neon PostgreSQL**, una base de datos en la nube para que no haya que descarga la imagen de Postgres.

### Algunas Capturas hechas en POSTMAN
![image](https://github.com/user-attachments/assets/4cfe28aa-6e39-44ee-954f-ee3c0bb151a0)


![image](https://github.com/user-attachments/assets/03b07936-d90e-49c8-84c4-0825199cd577)


## Front End

## Frontend

Para el desarrollo del frontend, se utilizó React junto con Vite y TypeScript. A continuación se detallan las dependencias utilizadas:

### Dependencias
- **react** - Biblioteca principal para construir interfaces de usuario.
- **vite** - Herramienta de construcción y desarrollo rápido.
- **typescript** - Lenguaje que añade tipado estático a JavaScript.
- **axios** - Biblioteca para realizar solicitudes HTTP.
- **react-icons** - Biblioteca de iconos para React.
- **react-router-dom** - Biblioteca para la gestión de rutas en aplicaciones React.

### Estructura
El frontend está diseñado para ofrecer una experiencia de usuario fluida y accesible, permitiendo la interacción con la API REST del backend de manera eficiente.

### Algunas capturas

![image](https://github.com/user-attachments/assets/2c010e0a-835e-4d0c-a15a-6c0102ca5ca4)

![image](https://github.com/user-attachments/assets/236c6fa4-bea4-4b70-b5eb-e75d5fc067e7)

![image](https://github.com/user-attachments/assets/2c050eef-e2c1-4051-92a1-381fe770110f)

![image](https://github.com/user-attachments/assets/f9f8af18-4aa7-4b83-a95d-46322f4e8ca5)

![image](https://github.com/user-attachments/assets/29bdfafb-9766-4a99-b1d6-077f4d55805c)

