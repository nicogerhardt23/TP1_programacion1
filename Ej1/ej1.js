'use strict';
/* Una empresa llamada Roliplus se presenta en la consultoría y plantea
confeccionar una página web para su empresa y solicita que el
usuario pueda realizar clic en un botón que diga ver productos, y
muestre al menos 9 productos, */
let productos = [
    {nombre:'manzana', imagen:'img/manzana.jpg', precio:'5'},
    {nombre:'banana', imagen:'img/banana.jpg', precio:'45'},
    {nombre:'frutillas', imagen:'img/frutillas.jpg', precio:'90'},
    {nombre:'mandarinas', imagen:'img/mandarinas.jpg', precio:'30'},
    {nombre:'durazno', imagen:'img/durazno.jpg', precio:'55'},
    {nombre:'sandias', imagen:'img/sandias.jpg', precio:'130'},
    {nombre:'melon', imagen:'img/melones.jpg', precio:'110'},
    {nombre:'pera', imagen:'img/peras.jpg', precio:'65'},
    {nombre:'naranja', imagen:'img/naranja.jpg', precio:'70'}
];
function mostrar() {
    console.log('hola pa', productos)
    let ingreso= ''
    for(let x=0; x < productos.length; x++){
        ingreso +=`<div class="contenedor">
        <h2>${productos[x].nombre}</h2>
        <img src"${productos[x].imagen}" alt=" ">
        <h2>${productos[x].precio}</h2>
        </div>`;
    }
    document.getElementById("datos").innerHTML = ingreso;
}