# Presentacion Callback

Proyecto sencillo con ejemplos basicos de callbacks en JavaScript.

## Descripcion

Este repositorio muestra como usar funciones callback para ejecutar codigo despues de que una tarea termina.

Incluye dos ejemplos:

- `index.js`: simula la busqueda de un usuario y maneja errores con un callback.
- `caffe.js`: simula la preparacion de un cafe usando `setTimeout` y luego ejecuta un callback.

## Requisitos

- Node.js instalado.

## Como ejecutar

En la terminal, dentro de la carpeta del proyecto, ejecuta:

```bash
node index.js
```

O para ejecutar el ejemplo del cafe:

```bash
node caffe.js
```

## Concepto principal

Un callback es una funcion que se pasa como argumento a otra funcion para ser ejecutada despues.

Ejemplo:

```js
function saludar(callback) {
  callback();
}

saludar(function () {
  console.log("Hola desde el callback");
});
```
