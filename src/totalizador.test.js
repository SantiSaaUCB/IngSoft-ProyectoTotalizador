import totalizar from "./totalizador.js";

describe("Totalizar", () => {
  it("Debe retornar el Precio Neto", () => {
    const resultado = totalizar(1, 1, "CA");
    expect(resultado.precioNeto).toBe(1);
  });
  it("Debe calcular correctamente los impuestos para el estado de California (CA)", () => {
    const resultado = totalizar(1, 1, "CA");
    expect(resultado.precioNeto).toBe(1);
    expect(resultado.impuesto).toBe(0.0825);
  });
  it("Debe calcular correctamente los impuestos para el estado de Nevada (NV)", () => {
    const resultado = totalizar(1, 1, "NV");
    expect(resultado.precioNeto).toBe(1);
    expect(resultado.impuesto).toBe(0.08);
  });
  it("Debe calcular correctamente los impuestos para el estado de Utah (UT)", () => {
    const resultado = totalizar(1, 1, "UT");
    expect(resultado.precioNeto).toBe(1);
    expect(resultado.impuesto).toBe(0.0665);
  });
  it("Debe calcular correctamente los impuestos para el estado de Texas (TX)", () => {
    const resultado = totalizar(1, 1, "TX");
    expect(resultado.precioNeto).toBe(1);
    expect(resultado.impuesto).toBe(0.0625);
  });
  it("Debe calcular correctamente los impuestos para el estado de Alabama (AL)", () => {
    const resultado = totalizar(1, 1, "AL");
    expect(resultado.precioNeto).toBe(1);
    expect(resultado.impuesto).toBe(0.04);
  });
  it("Debe calcular correctamente el total con impuesto para el estado de California (CA)", () => {
    const resultado = totalizar(2, 50, "CA");
    expect(resultado.precioNeto).toBe(100);
    expect(resultado.impuesto).toBe(0.0825);
    expect(resultado.totalConImpuesto).toBeCloseTo(108.25, 2);
  });
  it("Debe calcular correctamente el total con impuesto para el estado de Nevada (NV)", () => {
    const resultado = totalizar(2, 50, "NV");
    expect(resultado.precioNeto).toBe(100);
    expect(resultado.impuesto).toBe(0.08);
    expect(resultado.totalConImpuesto).toBeCloseTo(108, 2);
  });
  it("Debe calcular correctamente el total con impuesto para el estado de Utah (UT)", () => {
    const resultado = totalizar(2, 50, "UT");
    expect(resultado.precioNeto).toBe(100);
    expect(resultado.impuesto).toBe(0.0665);
    expect(resultado.totalConImpuesto).toBeCloseTo(106.65, 2);
  });
  it("Debe calcular correctamente el total con impuesto para el estado de Texas (TX)", () => {
    const resultado = totalizar(2, 50, "TX");
    expect(resultado.precioNeto).toBe(100);
    expect(resultado.impuesto).toBe(0.0625);
    expect(resultado.totalConImpuesto).toBeCloseTo(106.25, 2);
  });
  it("Debe calcular correctamente el total con impuesto para el estado de Alabama (AL)", () => {
    const resultado = totalizar(2, 50, "AL");
    expect(resultado.precioNeto).toBe(100);
    expect(resultado.impuesto).toBe(0.04);
    expect(resultado.totalConImpuesto).toBeCloseTo(104, 2);
  });
  it("Debe calcular correctamente el descuento para la cantidad >= 1000", () => {
    const resultado = totalizar(1000, 1, "CA");
    expect(resultado.descuento).toBe(0.03);
    expect(resultado.totalConDescuento).toBeCloseTo(1000 * 1.0825 * 0.97, 2);
  });
  it("Debe calcular correctamente el descuento para la cantidad >= 3000", () => {
    const resultado = totalizar(3000, 1, "CA");
    expect(resultado.descuento).toBe(0.05);
    expect(resultado.totalConDescuento).toBeCloseTo(3000 * 1.0825 * 0.95, 2);
  });
  it("Debe calcular correctamente el descuento para la cantidad >= 7000", () => {
    const resultado = totalizar(7000, 1, "CA");
    expect(resultado.descuento).toBe(0.07);
    expect(resultado.totalConDescuento).toBeCloseTo(7000 * 1.0825 * 0.93, 2);
  });
  it("Debe calcular correctamente el descuento para la cantidad >= 10000", () => {
    const resultado = totalizar(10000, 1, "CA");
    expect(resultado.descuento).toBe(0.1);
    expect(resultado.totalConDescuento).toBeCloseTo(10000 * 1.0825 * 0.90, 2);
  });
  it("Debe calcular correctamente el descuento para la cantidad >= 30000", () => {
    const resultado = totalizar(30000, 1, "CA");
    expect(resultado.descuento).toBe(0.15);
    expect(resultado.totalConDescuento).toBeCloseTo(30000 * 1.0825 * 0.85, 2);
  });
  it("Debe calcular correctamente el total con descuento adicional para 'Varios'", () => {
    const resultado = totalizar(1, 1, "CA", "Varios");
    expect(resultado.impuestoAdicional).toBe(0);
    expect(resultado.descuentoAdicional).toBe(0);
    expect(resultado.totalConImpuestoAdicional).toBe(1.0825);
    expect(resultado.totalConDescuentoAdicional).toBe(1.0825);
  });
  it("Debe calcular correctamente el total con descuento adicional para 'Alimentos'", () => {
    const resultado = totalizar(1, 1, "CA", "Alimentos");
    expect(resultado.impuestoAdicional).toBe(0);
    expect(resultado.descuentoAdicional).toBe(0.02);
    expect(resultado.totalConImpuestoAdicional).toBe(1.0825);
    expect(resultado.totalConDescuentoAdicional).toBe(1.06085);
  });
  it("Debe calcular correctamente el total con descuento adicional para 'Bebidas alcoholicas'", () => {
    const resultado = totalizar(1, 1, "CA", "Bebidas alcoholicas");
    expect(resultado.impuestoAdicional).toBe(0.07);
    expect(resultado.descuentoAdicional).toBe(0);
    expect(resultado.totalConImpuestoAdicional).toBeCloseTo(1.16);
    expect(resultado.totalConDescuentoAdicional).toBeCloseTo(1.16);
  });
  it("Debe calcular correctamente el total con descuento adicional para 'Material de escritorio'", () => {
    const resultado = totalizar(1, 1, "CA", "Material de escritorio");
    expect(resultado.impuestoAdicional).toBe(0);
    expect(resultado.descuentoAdicional).toBe(0.015);
    expect(resultado.totalConImpuestoAdicional).toBeCloseTo(1.08);
    expect(resultado.totalConDescuentoAdicional).toBeCloseTo(1.07);
  });
  it("Debe calcular correctamente el total con descuento adicional para 'Muebles'", () => {
    const resultado = totalizar(1, 1, "CA", "Muebles");
    expect(resultado.impuestoAdicional).toBe(0.03);
    expect(resultado.descuentoAdicional).toBe(0);
    expect(resultado.totalConImpuestoAdicional).toBeCloseTo(1.11);
    expect(resultado.totalConDescuentoAdicional).toBeCloseTo(1.11);
  });
  it("Debe calcular correctamente el total con descuento adicional para 'Electronicos'", () => {
    const resultado = totalizar(1, 1, "CA", "Electronicos");
    expect(resultado.impuestoAdicional).toBe(0.04);
    expect(resultado.descuentoAdicional).toBe(0.01);
    expect(resultado.totalConImpuestoAdicional).toBeCloseTo(1.13);
    expect(resultado.totalConDescuentoAdicional).toBeCloseTo(1.11);
  });
  it("Debe calcular correctamente el total con descuento adicional para 'Vestimenta'", () => {
    const resultado = totalizar(1, 1, "CA", "Vestimenta");
    expect(resultado.impuestoAdicional).toBe(0.02);
    expect(resultado.descuentoAdicional).toBe(0);
    expect(resultado.totalConImpuestoAdicional).toBeCloseTo(1.10);
    expect(resultado.totalConDescuentoAdicional).toBeCloseTo(1.10);
  });
  it("Debe calcular correctamente el costo adicional por envio para el rango de peso volumetrico 0-10", () => {
    const resultado = totalizar(1, 1, "CA", "Varios", "0-10");
    expect(resultado.costoAdicionalPorEnvio).toBe(0);
  });
  it("Debe mostrar correctamente el costo adicional por envio para el rango de peso volumetrico 0-10", () => {
    const resultado = totalizar(1, 1, "CA", "Varios", "11-20");
    expect(resultado.costoAdicionalPorEnvio).toBe(3.5);
  });
  it("Debe mostrar correctamente el costo adicional por envio para el rango de peso volumetrico 0-10", () => {
    const resultado = totalizar(1, 1, "CA", "Varios", "21-40");
    expect(resultado.costoAdicionalPorEnvio).toBe(5);
  });
  it("Debe mostrar correctamente el costo adicional por envio para el rango de peso volumetrico 0-10", () => {
    const resultado = totalizar(1, 1, "CA", "Varios", "41-80");
    expect(resultado.costoAdicionalPorEnvio).toBe(6);
  });
  it("Debe mostrar correctamente el costo adicional por envio para el rango de peso volumetrico 0-10", () => {
    const resultado = totalizar(1, 1, "CA", "Varios", "81-100");
    expect(resultado.costoAdicionalPorEnvio).toBe(6.5);
  });
  it("Debe mostrar correctamente el costo adicional por envio para el rango de peso volumetrico 0-10", () => {
    const resultado = totalizar(1, 1, "CA", "Varios", "101-200");
    expect(resultado.costoAdicionalPorEnvio).toBe(8);
  });
  it("Debe mostrar correctamente el costo adicional por envio para el rango de peso volumetrico 0-10", () => {
    const resultado = totalizar(1, 1, "CA", "Varios", ">200");
    expect(resultado.costoAdicionalPorEnvio).toBe(9);
  });
  it("Debe calcular correctamente el total con impuesto adicional y descuento adicional para la categoría seleccionada", () => {
    const resultado = totalizar(10, 10, "CA", "Electronicos", "21-40");
    expect(resultado.impuestoAdicional).toBe(0.04);
    expect(resultado.descuentoAdicional).toBe(0.01);
    expect(resultado.totalConImpuestoAdicional).toBeCloseTo(108.25 * 1.04, 2);
    expect(resultado.totalConDescuentoAdicional).toBeCloseTo((108.25 * 1.04) * 0.99, 2);
    expect(resultado.costoAdicionalPorEnvio).toBe(5.0);
    expect(resultado.totalCostoAdicionalPorEnvio).toBeCloseTo(((108.25 * 1.04) * 0.99) + (5.0 * 10), 2);
  });
  it("Debe calcular correctamente el total con impuesto adicional y descuento adicional para la categoría seleccionada", () => {
    const resultado = totalizar(10, 10, "CA", "Vestimenta", "0-10");
    expect(resultado.impuestoAdicional).toBe(0.02);
    expect(resultado.descuentoAdicional).toBe(0);
    expect(resultado.totalConImpuestoAdicional).toBeCloseTo(108.25 * 1.02, 2);
    expect(resultado.totalConDescuentoAdicional).toBeCloseTo((108.25 * 1.02), 2);
    expect(resultado.costoAdicionalPorEnvio).toBe(0);
    expect(resultado.totalCostoAdicionalPorEnvio).toBeCloseTo((108.25 * 1.02), 2);
  });

  it("Debe calcular correctamente el total con costo adicional por envio para el rango de peso volumetrico 11-20", () => {
    const resultado = totalizar(10, 10, "CA", "Varios", "11-20");
    expect(resultado.impuestoAdicional).toBe(0);
    expect(resultado.descuentoAdicional).toBe(0);
    expect(resultado.totalConImpuestoAdicional).toBeCloseTo(108.25, 2);
    expect(resultado.totalConDescuentoAdicional).toBeCloseTo(108.25, 2);
    expect(resultado.costoAdicionalPorEnvio).toBe(3.5);
    expect(resultado.totalCostoAdicionalPorEnvio).toBeCloseTo(108.25 + (3.5 * 10), 2);
  });

  it("Debe calcular correctamente el total con costo adicional por envio para el rango de peso volumetrico 41-80", () => {
    const resultado = totalizar(10, 10, "CA", "Varios", "41-80");
    expect(resultado.impuestoAdicional).toBe(0);
    expect(resultado.descuentoAdicional).toBe(0);
    expect(resultado.totalConImpuestoAdicional).toBeCloseTo(108.25, 2);
    expect(resultado.totalConDescuentoAdicional).toBeCloseTo(108.25, 2);
    expect(resultado.costoAdicionalPorEnvio).toBe(6.0);
    expect(resultado.totalCostoAdicionalPorEnvio).toBeCloseTo(108.25 + (6.0 * 10), 2);
  });
});