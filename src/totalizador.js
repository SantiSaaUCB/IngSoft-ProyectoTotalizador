function totalizar(cantidad_items, precio_item, codigo_estado, varios_categoria) {
     const precioNeto = cantidad_items * precio_item;
     let impuesto = 0;
     let descuento = 0;
     let impuestoAdicional = 0;

     switch (codigo_estado) {
          case "CA": impuesto = 0.0825; break;
          case "NV": impuesto = 0.08; break;
          case "UT": impuesto = 0.0665; break;
          case "TX": impuesto = 0.0625; break;
          case "AL": impuesto = 0.04; break;
          default: impuesto = 0;
     }
     const totalConImpuesto = precioNeto + (precioNeto * impuesto);

     switch (true) {
          case totalConImpuesto >= 30000: descuento = 0.15; break;
          case totalConImpuesto >= 10000: descuento = 0.1; break;
          case totalConImpuesto >= 7000: descuento = 0.07; break;
          case totalConImpuesto >= 3000: descuento = 0.05; break;
          case totalConImpuesto >= 1000: descuento = 0.03; break;
          default: descuento = 0;
     }
     const totalConDescuento = totalConImpuesto - (totalConImpuesto * descuento);

     switch (varios_categoria) {
          case "Vestimenta": impuestoAdicional = 0.02; break;
          case "Electronicos": impuestoAdicional = 0.04; break;
          case "Muebles": impuestoAdicional = 0.03; break;
          case "Material de escritorio": impuestoAdicional = 0; break;
          case "Bebidas alcoholicas": impuestoAdicional = 0.07; break;
          case "Alimentos": impuestoAdicional = 0; break;
          case "Varios": impuestoAdicional = 0; break;
          default: impuestoAdicional = 0;
     }

     return {
          precioNeto,
          impuesto,
          totalConImpuesto,
          descuento,
          totalConDescuento,
          impuestoAdicional
     };
}

export default totalizar;