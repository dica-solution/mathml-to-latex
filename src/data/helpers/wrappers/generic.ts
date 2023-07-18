import { Wrapper } from './wrapper';

export class GenericWrapper {
  protected _open: string;
  protected _close: string;

  constructor(open: string, close: string) {
    if (open === '{') this._open = '\\left\\' + open;
    else this._open = '\\left' + open;
    if (close === '}') this._close = '\\right .\\' + close;
    else this._close = '\\right .' + close;
  }

  wrap(str: string): string {
    return new Wrapper(this._open, this._close).wrap(str);
  }
}
