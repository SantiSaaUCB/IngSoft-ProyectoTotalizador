function totalizar(cantidad_items, precio_item, codigo_estado) {
     const precioNeto = cantidad_items * precio_item;
     let impuesto = 0;
     let descuento = 0;

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

     return {
          precioNeto,
          impuesto,
          totalConImpuesto,
          descuento,
          totalConDescuento
     };
}

export default totalizar;