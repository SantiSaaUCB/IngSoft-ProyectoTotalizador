function totalizar(cantidad_items, precio_item, codigo_estado, varios_categoria, peso_volumetrico_seleccionado, tipoClienteSeleccionado) {
     const precioNeto = cantidad_items * precio_item;
     let impuesto = 0, descuento = 0, impuestoAdicional = 0, descuentoAdicional = 0, costoAdicionalPorEnvio = 0;
   
     varios_categoria = varios_categoria || "Varios";
   
     switch (codigo_estado) {
       case "CA": impuesto = 0.0825; break;
       case "NV": impuesto = 0.08; break;
       case "UT": impuesto = 0.0665; break;
       case "TX": impuesto = 0.0625; break;
       case "AL": impuesto = 0.04; break;
       default: impuesto = 0;
     }
     const totalConImpuesto = precioNeto * (1 + impuesto);
   
     switch (true) {
       case totalConImpuesto >= 30000: descuento = 0.15; break;
       case totalConImpuesto >= 10000: descuento = 0.1; break;
       case totalConImpuesto >= 7000: descuento = 0.07; break;
       case totalConImpuesto >= 3000: descuento = 0.05; break;
       case totalConImpuesto >= 1000: descuento = 0.03; break;
       default: descuento = 0;
     }
     const totalConDescuento = totalConImpuesto * (1 - descuento);
   
     switch (varios_categoria) {
       case "Vestimenta": impuestoAdicional = 0.02; break;
       case "Electronicos": impuestoAdicional = 0.04; descuentoAdicional = 0.01; break;
       case "Muebles": impuestoAdicional = 0.03; break;
       case "Material de escritorio": descuentoAdicional = 0.015; break;
       case "Bebidas alcoholicas": impuestoAdicional = 0.07; break;
       case "Alimentos": descuentoAdicional = 0.02; break;
       case "Varios": impuestoAdicional = 0; descuentoAdicional = 0; break;
       default: impuestoAdicional = 0; descuentoAdicional = 0;
     }
   
     impuestoAdicional = Number(impuestoAdicional) || 0;
     descuentoAdicional = Number(descuentoAdicional) || 0;
   
     const totalConImpuestoAdicional = totalConDescuento * (1 + impuestoAdicional);
     const totalConDescuentoAdicional = totalConImpuestoAdicional * (1 - descuentoAdicional);

     switch (peso_volumetrico_seleccionado) {
          case "0-10": costoAdicionalPorEnvio = 0.0; break;
          case "11-20": costoAdicionalPorEnvio = 3.5; break;
          case "21-40": costoAdicionalPorEnvio = 5.0; break;
          case "41-80": costoAdicionalPorEnvio = 6.0; break;
          case "81-100": costoAdicionalPorEnvio = 6.5; break;
          case "101-200": costoAdicionalPorEnvio = 8.0; break;
          case ">200": costoAdicionalPorEnvio = 9.0; break;
          default: costoAdicionalPorEnvio = 0.00; break;
     }
     const totalCostoAdicionalPorEnvio = totalConDescuentoAdicional + (costoAdicionalPorEnvio * cantidad_items);

     switch (tipoClienteSeleccionado) {
          case "Normal":break;
          case "Recurrente": break;
          case "Antiguo Recurrente": break;
          case "Especial": break;
          default: break;
     }

     return {
       precioNeto,
       impuesto,
       totalConImpuesto,
       descuento,
       totalConDescuento,
       impuestoAdicional,
       descuentoAdicional,
       totalConImpuestoAdicional,
       totalConDescuentoAdicional,
       costoAdicionalPorEnvio,
       totalCostoAdicionalPorEnvio
     };
   }
   
   export default totalizar;