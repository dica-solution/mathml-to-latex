import { ToLaTeXConverter } from '../../../../domain/usecases/to-latex-converter';
import { MathMLElement } from '../../../protocols/mathml-element';
import { mathMLElementToLaTeXConverter, ParenthesisWrapper } from '../../../helpers';
import { InvalidNumberOfChildrenError } from '../../../errors';

export class MMultiscripts implements ToLaTeXConverter {
  private readonly _mathmlElement: MathMLElement;

  constructor(mathElement: MathMLElement) {
    this._mathmlElement = mathElement;
  }

  convert(): string {
    const { name, children } = this._mathmlElement;
    const childrenLength = children.length;

    if (childrenLength < 3) throw new InvalidNumberOfChildrenError(name, 3, childrenLength, 'at least');

    const baseContent = mathMLElementToLaTeXConverter(children[0]).convert();

    if (childrenLength === 3) return this._convert();

    return this._prescriptLatex() + this._wrapInParenthesisIfThereIsSpace(baseContent) + this._postscriptLatex();
  }

  private _convert(): string {
    const { children } = this._mathmlElement;
    let sub;
    let base;
    let sup;

    let havePrescript = false;

    if (this._isPrescripts(children[1])) {
      sub = children[2];
      base = children[0];
    } else if (!this._isPrescripts(children[1])) {
      havePrescript = true;
      base = children[0];
      sub = children[1];
      sup = children[2];
    } else return '';

    const subLatex = mathMLElementToLaTeXConverter(sub).convert();
    const baseLatex = mathMLElementToLaTeXConverter(base).convert();

    if (havePrescript && sup) {
      const supLatex = mathMLElementToLaTeXConverter(sup).convert();
      return `${this._wrapInParenthesisIfThereIsSpace(baseLatex)}_{${subLatex}}^{${supLatex}}`;
    }
    return `_{${subLatex}}${this._wrapInParenthesisIfThereIsSpace(baseLatex)}`;
  }

  private _prescriptLatex(): string {
    const { children } = this._mathmlElement;
    let sub;
    let sup;

    if (this._isPrescripts(children[1])) {
      sub = children[2];
      sup = children[3];
    } else if (this._isPrescripts(children[3])) {
      sub = children[4];
      sup = children[5];
    } else return '';

    const subLatex = mathMLElementToLaTeXConverter(sub).convert();
    const supLatex = mathMLElementToLaTeXConverter(sup).convert();

    return `_{${subLatex}}^{${supLatex}}`;
  }

  private _postscriptLatex(): string {
    const { children } = this._mathmlElement;
    if (this._isPrescripts(children[1])) return '';

    const sub = children[1];
    const sup = children[2];

    const subLatex = mathMLElementToLaTeXConverter(sub).convert();
    const supLatex = mathMLElementToLaTeXConverter(sup).convert();

    return `_{${subLatex}}^{${supLatex}}`;
  }

  private _wrapInParenthesisIfThereIsSpace(str: string): string {
    if (!str.match(/\s+/g)) return str;
    return new ParenthesisWrapper().wrap(str);
  }

  private _isPrescripts(child: MathMLElement): boolean {
    return child?.name === 'mprescripts';
  }
}
