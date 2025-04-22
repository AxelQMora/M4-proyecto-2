//Gestión de lista de compras

listaDeCompras = [];

function agregarProducto (producto){
    const boolean = validacion(producto);
    if (boolean !== true){
    listaDeCompras.push(producto);
    //console.log(producto)
    }
}

function eliminarProducto(producto) {
    const index = listaDeCompras.indexOf(producto);
    if (index >=0){
        listaDeCompras.splice(index,1);
        imprimirListaActualizada()
    }
}

function imprimirLista() {
    console.log('~~~~~Lista~~~~~~')
    listaDeCompras.forEach(element => {
        const index = listaDeCompras.indexOf(element);
        if (index >=0){
            console.log(`Producto: ${element}`)
        }
    });
    console.log("---------------------------");
}


function imprimirListaActualizada(){
    console.log("<<<<<<<Lista actualizada>>>>>>>");
    listaDeCompras.forEach(element => {
        const index = listaDeCompras.indexOf(element);
        if (index >=0){
            console.log(`Producto: ${element}`)
        }
    });
    console.log("---------------------------");
}

function validacion(productoPorValidar){
    const listaLowerCase = listaDeCompras.map(str => str.toLowerCase());
    const validate  = productoPorValidar.toLowerCase();
    if (listaLowerCase.includes(validate)){
        console.log(`¡El producto ${productoPorValidar} ya está en la lista!`);
        return true;
    }

}

agregarProducto('Manzana');
agregarProducto('Pan');
agregarProducto('Huevo');
agregarProducto('Café');
agregarProducto('Café');
agregarProducto('Pan');
agregarProducto('Manzana');
imprimirLista();

eliminarProducto('Huevo')
//imprimirLista()
//validacion('Prueba2')




