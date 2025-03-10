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
    expect(resultado.totalConDescuento).toBe(1.0825);
  });
});