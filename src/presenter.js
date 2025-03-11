import totalizar from "./totalizador.js";

const form = document.querySelector("#totalizar-form"); 
const items = document.querySelector("#cantidad-items");
const price = document.querySelector("#precio-item");
const state = document.querySelector("#estado");
const category = document.querySelector("#categorias");
const volumetricWeight = document.querySelector("#peso_volumetrico");
const clientType = document.querySelector("#tipo_cliente");
const textCantidad = document.querySelector("#info-cantidadItems");
const textPrecio = document.querySelector("#info-precioItem");
const textPrecioNeto = document.querySelector("#info-precioNeto");
const textEstado = document.querySelector("#info-estado");
const textPorcentajeImpuesto = document.querySelector("#info-porcentajeImpuestos");
const textTotalConImpuesto = document.querySelector("#info-totalConImpuesto");
const textPorcentajeDescuento = document.querySelector("#info-porcentajeDescuentos");
const textTotalConDescuento = document.querySelector("#info-totalConDescuento");
const textPorcentajeImpuestoVarios = document.querySelector("#info-porcentajeImpuestosVarios");
const textPorcentajeDescuentoVarios = document.querySelector("#info-porcentajeDescuentoVarios");
const textTotalConImpuestoAdicional = document.querySelector("#info-totalConImpuestoAdicional");
const textTotalConDescuentoAdicional = document.querySelector("#info-totalConDescuentoAdicional");
const textCostoAdicionalPorEnvio = document.querySelector("#info-costoAdicionalPorEnvio");
const textTotalConCostoAdicionalPorEnvio = document.querySelector("#info-totalConCostoAdicionalPorEnvio");
const textDescuentoPorTipoCliente = document.querySelector("#info-descuentoPorTipoCliente");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  let cantidadItems = parseInt(items.value, 10);
  let precioItem = parseFloat(price.value);
  let estadoSeleccionado = state.value;
  let categoriaSeleccionada = category.value.trim() || "Varios";
  let peso_volumetrico_seleccionado = volumetricWeight.value;
  let tipoClienteSeleccionado = clientType.value;
  const estadoNombre = state.options[state.selectedIndex].getAttribute("data-name");

  const resultado = totalizar(cantidadItems, precioItem, estadoSeleccionado, categoriaSeleccionada, peso_volumetrico_seleccionado, tipoClienteSeleccionado);

  textCantidad.textContent = `Cantidad de Items a Comprar: ${cantidadItems}`;
  textPrecio.textContent = `Precio por Item: ${precioItem}`;
  textPrecioNeto.textContent = `Precio Neto: ${resultado.precioNeto}`;
  textEstado.textContent = `Estado Seleccionado: ${estadoSeleccionado}`;
  textPorcentajeImpuesto.textContent = `Impuestos a pagar en ${estadoNombre}: ${(resultado.impuesto * 100).toFixed(2)}%`;
  textTotalConImpuesto.textContent = `Total con Impuesto: ${resultado.totalConImpuesto.toFixed(2)}`;
  textPorcentajeDescuento.textContent = `Descuento aplicado: ${(resultado.descuento * 100).toFixed(2)}%`;
  textTotalConDescuento.textContent = `Total con Descuento: ${resultado.totalConDescuento.toFixed(2)}`;
  textPorcentajeImpuestoVarios.textContent = `Porcentaje de Impuesto Adicional para ${categoriaSeleccionada}: ${(resultado.impuestoAdicional * 100).toFixed(2)}%`;
  textPorcentajeDescuentoVarios.textContent = `Porcentaje de Descuento Adicional para ${categoriaSeleccionada}: ${(resultado.descuentoAdicional * 100).toFixed(2)}%`;
  textTotalConImpuestoAdicional.textContent = `Total con Impuesto Adicional: ${resultado.totalConImpuestoAdicional.toFixed(2)}`;
  textTotalConDescuentoAdicional.textContent = `Total con Descuento Adicional: ${resultado.totalConDescuentoAdicional.toFixed(2)}`;
  textCostoAdicionalPorEnvio.textContent = `Costo Adicional por envio, (peso entre ${peso_volumetrico_seleccionado}): ${resultado.costoAdicionalPorEnvio.toFixed(2)}$ por item`;
  textTotalConCostoAdicionalPorEnvio.textContent = `Total con Costo Adicional por Envio: ${(resultado.totalConDescuentoAdicional + resultado.costoAdicionalPorEnvio).toFixed(2)}`;
  textDescuentoPorTipoCliente.textContent = `Descuento por ser un cliente ${tipoClienteSeleccionado}: `;
});