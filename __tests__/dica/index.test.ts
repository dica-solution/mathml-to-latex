import MathMLToLaTeX from '../../src';
import * as mathmlStrings from './mocks/mathmlStrings';

describe('given math string with #', () => {
  it('wrap its content inside text command', () => {
    const mathml = mathmlStrings.mathWithCsharp;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toBe('x \\# - 3 ; x \\# 0');
  });
});

describe('given math string with double script', () => {
  describe('double script with msup', () => {
    it('wrap its content inside text command', () => {
      const mathml = mathmlStrings.mathWithDoubleScript1;

      const result = MathMLToLaTeX.convert(mathml);

      expect(result).toBe("\\textrm{ } f^{'''} \\left(x\\right .) =");
    });
  });

  describe('double script with no wrapper', () => {
    it('wrap its content inside text command', () => {
      const mathml = mathmlStrings.mathWithDoubleScript2;

      const result = MathMLToLaTeX.convert(mathml);

      expect(result).toBe("B '''");
    });
  });
});

describe('given math string with vdots', () => {
  describe('test one', () => {
    it('wrap its content inside text command', () => {
      const mathml = mathmlStrings.mathWithVdots1;

      const result = MathMLToLaTeX.convert(mathml);

      expect(result).toBe('X = \\{ x \\in N | 20 \\vdots  x \\}');
    });
  });

  describe('test two', () => {
    it('wrap its content inside text command', () => {
      const mathml = mathmlStrings.mathWithVdots2;

      const result = MathMLToLaTeX.convert(mathml);

      expect(result).toBe('\\Rightarrow ( y - x ) ( y + x ) \\text{ ⋮ 4}');
    });
  });
});

describe('given math string with double underline', () => {
  it('wrap its content inside text command', () => {
    const mathml = mathmlStrings.mathWithUnderline;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toBe('\\_ \\_ \\_');
  });
});
