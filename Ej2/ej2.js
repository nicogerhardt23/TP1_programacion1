/* Una empresa llamada Texit se presenta en la consultoría y plantea
confeccionar una página para su sitio web de la empresa, y solicita
que la misma tenga un botón que diga cargar producto, y cada vez
que se le haga clic, podrá cargarse un producto, también se pide un
botón que diga ver productos para poder ver los productos cargados.
El usuario podrá cargar la siguiente información:
a. Código del producto.
b. Nombre del producto.
c. Categoría del producto.
d. Precio del producto.
e. Descripción del producto. */

let cargador=[];
function cargar(){
    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('categoria').value;
    const precio = document.getElementById('precio').value;
    const descripcion = document.getElementById('descripcion').value;

    const cargado = {codigo,nombre,categoria,precio,descripcion};
    cargador.push(cargado);
}

function mostrar(){
    let info='';
    for(let x in cargador){
        info+=`<div class="contenedor">
        <h2>${cargador[x].codigo}</h2>
        <h2>${cargador[x].nombre}</h2>
        <h2>${cargador[x].categoria}</h2>
        <h2>${cargador[x].precio}</h2>
        <h2>${cargador[x].descripcion}</h2>
        </div>`;
    }
    document.getElementById("datos_productos").innerHTML=info;
}