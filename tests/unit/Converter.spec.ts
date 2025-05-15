import {
  CelsiusToFahrenheit,
  FahrenheitToCelsius,
  CelsiusToKelvin,
  KelvinToCelsius,
  conversionStrategies,
} from "../../src/lib/Converter";

describe("Temperature Converters", () => {
  test("Celsius to Fahrenheit", () => {
    const converter = new CelsiusToFahrenheit();
    expect(converter.convert(0)).toBe(32);
    expect(converter.convert(100)).toBe(212);
    expect(converter.convert(-40)).toBe(-40);
  });

  test("Fahrenheit to Celsius", () => {
    const converter = new FahrenheitToCelsius();
    expect(converter.convert(32)).toBe(0);
    expect(converter.convert(212)).toBe(100);
    expect(converter.convert(-40)).toBe(-40);
  });

  test("Celsius to Kelvin", () => {
    const converter = new CelsiusToKelvin();
    expect(converter.convert(0)).toBe(273.15);
    expect(converter.convert(100)).toBe(373.15);
    expect(converter.convert(-273.15)).toBe(0);
  });

  test("Kelvin to Celsius", () => {
    const converter = new KelvinToCelsius();
    expect(converter.convert(273.15)).toBe(0);
    expect(converter.convert(373.15)).toBe(100);
    expect(converter.convert(0)).toBe(-273.15);
  });

  test("Conversion strategies", () => {
    expect(conversionStrategies.CtoF.convert(0)).toBe(32);
    expect(conversionStrategies.FtoC.convert(32)).toBe(0);
    expect(conversionStrategies.CtoK.convert(0)).toBe(273.15);
    expect(conversionStrategies.KtoC.convert(273.15)).toBe(0);
  });
});
