/* Una empresa llamada Noblex se presenta en la consultoría y plantea
confeccionar una página para su sitio web de la empresa, solicita que
haya un botón que diga ver televisores y permita mostrar al menos 9
televisores de 50 pulgadas y que muestre:
a. Código del producto.
b. Cantidad de televisores en stock.
c. Foto del producto.
d. Precio del producto.
e. Descripción del producto.
f. Botón de añadir al carrito.
Se pide también un botón que diga ordenar y que muestre los
televisores del menor precio al mayor precio. */

let productos = [
    {nombre:'NBLXSM32', stock:'2', imagen:'img/manzana.jpg', precio:'5', descripcion:'televisor de 50 pulgadas'},
    {nombre:'NSM32', stock:'1', imagen:'img/banana.jpg', precio:'45', descripcion:'televisor de 50 pulgadas'},
    {nombre:'NBLCJK', stock:'7', imagen:'img/frutillas.jpg', precio:'90', descripcion:'televisor de 50 pulgadas'},
    {nombre:'NBOKS2', stock:'8', imagen:'img/mandarinas.jpg', precio:'30', descripcion:'televisor de 50 pulgadas'},
    {nombre:'NSLL277', stock:'4', imagen:'img/durazno.jpg', precio:'55', descripcion:'televisor de 50 pulgadas'},
    {nombre:'NBUS23', stock:'1', imagen:'img/sandias.jpg', precio:'130', descripcion:'televisor de 50 pulgadas'},
    {nombre:'NBLSSM32', stock:'8', imagen:'img/melones.jpg', precio:'110', descripcion:'televisor de 50 pulgadas'},
    {nombre:'N26XSM32', stock:'9', imagen:'img/peras.jpg', precio:'65', descripcion:'televisor de 50 pulgadas'},
    {nombre:'NB292', stock:'23', imagen:'img/naranja.jpg', precio:'70', descripcion:'televisor de 50 pulgadas'}
];

function mostrar(){
    let info=''
    for(let x = 0; productos.length > x; x++){
        info+=`<div class="contenedor">
        <h2>${productos[x].nombre}</h2>
        <h2>${productos[x].stock}</h2>
        <img src"${productos[x].imagen}" alt=" ">
        <h2>${productos[x].precio}</h2>
        <h2>${productos[x].descripcion}</h2>
        </div>`;
    }
    document.getElementById("datos").innerHTML=info;
}