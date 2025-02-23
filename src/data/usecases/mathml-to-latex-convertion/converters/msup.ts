import { ToLaTeXConverter } from '../../../../domain/usecases/to-latex-converter';
import { MathMLElement } from '../../../protocols/mathml-element';
import { mathMLElementToLaTeXConverter, ParenthesisWrapper, BracketWrapper } from '../../../helpers';
import { InvalidNumberOfChildrenError } from '../../../errors';

export class MSup implements ToLaTeXConverter {
  private readonly _mathmlElement: MathMLElement;

  constructor(mathElement: MathMLElement) {
    this._mathmlElement = mathElement;
  }

  convert(): string {
    const { name, children } = this._mathmlElement;
    const childrenLength = children.length;

    if (childrenLength > 2) throw new InvalidNumberOfChildrenError(name, 2, childrenLength);

    const base = mathMLElementToLaTeXConverter(children[0]).convert();
    if (childrenLength === 1) return `{${base}}`;
    const exponent = mathMLElementToLaTeXConverter(children[1]).convert();

    if (exponent.trim() === '\\hat') {
      return `${base} \\text{^}`;
    }

    if (base.trim().length > 1) {
      return `${new BracketWrapper().wrap(base)}^${new BracketWrapper().wrap(exponent)}`;
    }

    if (base.trim().length === 0) {
      return new BracketWrapper().wrap(exponent);
    }

    return `${base}^${new BracketWrapper().wrap(exponent)}`;
  }
}
