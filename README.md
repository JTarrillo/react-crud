*Resumen*

Desarrolando una  aplicación web con React y una API externa para realizar operaciones CRUD 

 Realizaremos las operaciones CRUD mediante el uso de una API externa de MeCallAPI.com .

 
 
 *Librerias*

 Interfaz de usuario de material : utilizaremos los componentes de la interfaz de usuario de Material UI.

react-router-dom para administrar la ruta y la ruta dentro de nuestra aplicación.

//Crear II Usuarios luego actualizar y eliminar uno de ellos 

En nuestro componentes utilizaremos diferentes url de la api mecallapi para realizar nuestro crud

Users.js
Método: OBTENER
URL de API:https://www.mecallapi.com/api/users
Sample Body (JSON):

Método: DELETE
URL de API:https://www.mecallapi.com/api/users/delete
Sample Body (JSON):

UserUpdate.jsx
Método: PUT
API URL:https://www.mecallapi.com/api/users/update
Sample Body (JSON):
