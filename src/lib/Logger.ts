export interface Logger {
  log(message: string): void;
}

export class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(message);
  }
}

export class NoLogger implements Logger {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  log(_: string): void {
    // Intentionally left empty
  }
}
