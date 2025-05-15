import { Converter } from "./ConversionHandler";

export class CelsiusToFahrenheit implements Converter {
  convert(value: number): number {
    return (value * 9) / 5 + 32;
  }
}

export class FahrenheitToCelsius implements Converter {
  convert(value: number): number {
    return ((value - 32) * 5) / 9;
  }
}

// More conversions can be added easily
export class CelsiusToKelvin implements Converter {
  convert(value: number): number {
    return value + 273.15;
  }
}

export class KelvinToCelsius implements Converter {
  convert(value: number): number {
    return value - 273.15;
  }
}

// Map of available conversion strategies
export const conversionStrategies: Record<string, Converter> = {
  CtoF: new CelsiusToFahrenheit(),
  FtoC: new FahrenheitToCelsius(),
  CtoK: new CelsiusToKelvin(),
  KtoC: new KelvinToCelsius(),
};
