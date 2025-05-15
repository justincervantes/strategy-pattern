import { Logger } from "./Logger";

export interface Converter {
  convert(value: number): number;
}

export class ConversionHandler {
  private readonly converter: Converter;
  private readonly logger: Logger;

  constructor(converter: Converter, logger: Logger) {
    this.converter = converter;
    this.logger = logger;
  }

  performConversion(value: number): number {
    const result = this.converter.convert(value);
    this.logger.log(result.toString());
    return result;
  }
}
