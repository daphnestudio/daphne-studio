import { ErrorHandler, Injectable } from '@angular/core';


@Injectable()
export class ErrorHandlerService implements ErrorHandler {
  constructor() { }

  handleError(error) {
    throw error;
  }
}
