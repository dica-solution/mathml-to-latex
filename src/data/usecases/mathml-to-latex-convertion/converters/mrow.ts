import { ToLaTeXConverter } from '../../../../domain/usecases/to-latex-converter';
import { MathMLElement } from '../../../protocols/mathml-element';
import { mathMLElementToLaTeXConverter } from '../../../helpers';

const left = ['(', '|', '['];
const right = [')', '|', ']'];

export class Mrow implements ToLaTeXConverter {
  private readonly _mathmlElement: MathMLElement;

  constructor(mathElement: MathMLElement) {
    this._mathmlElement = mathElement;
  }

  convert(): string {
    const isExistMTable = this._mathmlElement.children.some((item) => item.name === 'mtable');
    if (isExistMTable) {
      const childrenSize = this._mathmlElement.children.length;
      const row: Array<string> = [];
      let isLeft = false;
      let isRight = false;

      for (let i = 0; i < childrenSize; ++i) {
        const child = this._mathmlElement.children[i];
        const itemConverted = mathMLElementToLaTeXConverter(child).convert();
        if (isLeft) {
          if (
            child.name === 'mo' &&
            right.includes(child.value) &&
            (i === childrenSize - 1 || i === childrenSize - 2)
          ) {
            row.push(itemConverted ? `\\right ${itemConverted}` : '\\right .');
            isRight = true;
          } else if (i === childrenSize - 1 && isLeft && !isRight) {
            row.push(`\\right . ${itemConverted}`);
          } else {
            row.push(itemConverted);
          }
        } else if (child.name === 'mo' && left.includes(child.value) && i === 0) {
          row.push(`\\left ${itemConverted}`);
          isLeft = true;
        } else {
          row.push(mathMLElementToLaTeXConverter(child).convert());
        }
      }

      return row.join(' ');
    }

    const result = this._mathmlElement.children
      .map((child) => mathMLElementToLaTeXConverter(child))
      .map((converter) => converter.convert())
      .join(' ');

    return result;
  }
}
