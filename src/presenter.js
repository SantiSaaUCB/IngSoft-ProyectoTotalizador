import totalizar from "./totalizador.js";

const form = document.querySelector("#totalizar-form"); 
const items = document.querySelector("#cantidad-items");
const price = document.querySelector("#precio-item");
const state = document.querySelector("#estado");
const textCantidad = document.querySelector("#info-cantidadItems");
const textPrecio = document.querySelector("#info-precioItem");
const textPrecioNeto = document.querySelector("#info-precioNeto");
const textEstado = document.querySelector("#info-estado");
const textPorcentajeImpuesto = document.querySelector("#info-porcentajeImpuestos");
const textTotalConImpuesto = document.querySelector("#info-totalConImpuesto");
const textPorcentajeDescuento = document.querySelector("#info-porcentajeDescuentos");
const textTotalConDescuento = document.querySelector("#info-totalConDescuento");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  let cantidadItems = parseInt(items.value, 10);
  let precioItem = parseFloat(price.value);
  let estadoSeleccionado = state.value;
  const estadoNombre = state.options[state.selectedIndex].getAttribute("data-name");

  const resultado = totalizar(cantidadItems, precioItem, estadoSeleccionado);

  textCantidad.textContent = `Cantidad de Items a Comprar: ${cantidadItems}`;
  textPrecio.textContent = `Precio por Item: ${precioItem}`;
  textPrecioNeto.textContent = `Precio Neto: ${resultado.precioNeto}`;
  textEstado.textContent = `Estado Seleccionado: ${estadoSeleccionado}`;
  textPorcentajeImpuesto.textContent = `Impuestos a pagar en ${estadoNombre}: ${(resultado.impuesto * 100).toFixed(2)}%`;
  textTotalConImpuesto.textContent = `Total con Impuesto: ${resultado.totalConImpuesto.toFixed(2)}`;
  textPorcentajeDescuento.textContent = `Descuento aplicado: ${(resultado.descuento * 100).toFixed(2)}%`;
  textTotalConDescuento.textContent = `Total con Descuento: ${resultado.totalConDescuento.toFixed(2)}`;
});