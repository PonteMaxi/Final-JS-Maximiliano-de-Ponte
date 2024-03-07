const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en llaveros.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevoLlavero = document.createElement("div");
    nuevoLlavero.classList = "tarjeta-producto"
    nuevoLlavero.innerHTML = `
    <img src="./img/productos/${producto.id}.jpeg" alt="Llavero 1">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevoLlavero);
    nuevoLlavero.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(llaveros);