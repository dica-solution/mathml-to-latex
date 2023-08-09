import MathMLToLaTeX from '../../src';
import * as mathmlStrings from './mocks/mathmlStrings';

describe('given math string with #', () => {
  it('# in mo', () => {
    const mathml = mathmlStrings.mathWithCsharpInMo;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toBe('x \\# - 3 ; x \\# 0');
  });

  it('# in mn', () => {
    const mathml = mathmlStrings.mathWithCsharpInMn;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toBe('x_{1} \\# x_{2}');
  });
});

describe('given math string with double script', () => {
  it('double script with msup', () => {
    const mathml = mathmlStrings.mathWithDoubleScript1;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toBe("\\textrm{ } f^{'''} \\left(x\\right .) =");
  });

  it('double script with no wrapper', () => {
    const mathml = mathmlStrings.mathWithDoubleScript2;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toBe("B '''");
  });
});

describe('given math string with vdots', () => {
  it('unique vdots in mtext', () => {
    const mathml = mathmlStrings.mathWithVdots1;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toBe('X = \\{ x \\in N | 20 \\vdots  x \\}');
  });

  it('vodots and other content in mtext', () => {
    const mathml = mathmlStrings.mathWithVdots2;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toBe('\\Rightarrow ( y - x ) ( y + x ) \\text{ ⋮ 4}');
  });
});

describe('given math string with double underline', () => {
  it('example', () => {
    const mathml = mathmlStrings.mathWithUnderline;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toBe('\\_ \\_ \\_');
  });
});

describe('given math string with mfenced', () => {
  it('mtable inside mfenced', () => {
    const mathml = mathmlStrings.mathMFencedWithTable;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch(
      '\\left\\{\\begin{matrix} \\begin{array}{l}m \\in_{+}^{\\text{*}} \\\\ m \\leq 12\\end{array} \\Rightarrow m \\in \\left\\{1 ; 2 ; 3 ; \\dots ; 11 ; 12\\right .\\} \\end{matrix}\\right .',
    );
  });

  it('mfenced have open', () => {
    const mathml = mathmlStrings.mathMFencedHaveOpen;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch(
      '\\left\\{\\begin{matrix} \\begin{array}{l}x = 3 + 3 t \\\\ y = - 2 + 4 t\\end{array} \\end{matrix}\\right .',
    );
  });

  it('mfenced have open and close', () => {
    const mathml = mathmlStrings.mathMFencedHaveOpenAndClose;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch('E \\backslash F = \\left\\{0 , 2 , 8\\right .\\}');
  });

  it('double mfenced have open and close', () => {
    const mathml = mathmlStrings.mathTwoMFencedHaveOpenAndClose;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch('\\text{(A \\\\ } B ) \\cap \\left(B \\cup C\\right .) = \\left\\{8\\right .\\}');
  });
});

describe('mathml have % in mi', () => {
  it('test one', () => {
    const mathml = mathmlStrings.mathHavePercentInMI1;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch('\\frac{100 \\% . ( x - 10 )}{60 \\%} = x');
  });

  it('test two', () => {
    const mathml = mathmlStrings.mathHavePercentInMI2;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch('K_{d} = \\left|\\frac{U_{r a}}{U_{v a o}} \\times 100 \\%\\right .|');
  });

  it('test three', () => {
    const mathml = mathmlStrings.mathHavePercentInMI3;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch(
      '\\Leftrightarrow {\\left(1 + 0,7 \\%\\right .)}^{a} . {\\left(1 + 0,9 \\%\\right .)}^{b} = 1,080790424',
    );
  });
});

describe('mathml with mclose', () => {
  it('test one', () => {
    const mathml = mathmlStrings.mathWithMClose1;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch('(');
  });

  it('test two', () => {
    const mathml = mathmlStrings.mathWithMClose2;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch(')_{n}');
  });

  it('test three', () => {
    const mathml = mathmlStrings.mathWithMClose3;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch(
      '\\text{(} \\text{ NH – } {[ {\\text{CH}}_{\\text{2}} ]}_{\\text{6}} \\text{– NH –CO – } {[ {\\text{CH}}_{\\text{2}} ]}_{\\text{4}} \\text{– CO } {\\text{)}}_{\\text{n}}',
    );
  });
});

describe('mathml with mmultiscripts', () => {
  it('test one', () => {
    const mathml = mathmlStrings.mathWithMmultiscripts1;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch('^{81}B r');
  });

  it('test two', () => {
    const mathml = mathmlStrings.mathWithMmultiscripts2;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch('x ^{14}. x');
  });

  it('mmultiscripts with three element - one', () => {
    const mathml = mathmlStrings.mathWithMmultiscripts3;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch('_{35}C l');
  });

  it('mmultiscripts with three element - two', () => {
    const mathml = mathmlStrings.mathWithMmultiscripts4;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch('_{A_{1}}X');
  });
});

describe('mathml with msub', () => {
  it('test one', () => {
    const mathml = mathmlStrings.mathWithMsub1;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch('C_{12} {H_{2}}_{2} O_{11}');
  });

  it('test two', () => {
    const mathml = mathmlStrings.mathWithMsub2;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch('\\overset{H_{2} S {O_{4}}_{\\text{} d a c} , {170}^{0} C}{\\rightarrow}');
  });

  it('msup with one element - 1', () => {
    const mathml = mathmlStrings.mathWithMsub4;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch('C u {( N O}');
  });

  it('msup with one element - 2', () => {
    const mathml = mathmlStrings.mathWithMsub5;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch('F e {( N O}');
  });

  it('msup with one element - 3', () => {
    const mathml = mathmlStrings.mathWithMsub6;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch('F e C l_{2} + 2 A g N O_{3} \\rightarrow 2 A g C l \\downarrow + F e {( N O}');
  });
});

describe('mathml with msup', () => {
  it('msup with base.length > 1', () => {
    const mathml = mathmlStrings.mathWithMsup1;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch("y - 2 {y^{'}}^{'} + y^{'} = 0");
  });

  it('msup with base.length = 0', () => {
    const mathml = mathmlStrings.mathWithMsup2;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch(
      '{( \\text{} 7 - 3 \\sqrt{5} )}^{x^{2}} + m {( \\text{} 7 + 3 \\sqrt{5} \\text{} )}^{x^{2}} = {2}^{x^{2} - 1}',
    );
  });

  it('msup with base.length = 0', () => {
    const mathml = mathmlStrings.mathWithMsup3;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch('10 \\text{^}');
  });

  it('msup with one element', () => {
    const mathml = mathmlStrings.mathWithMsup4;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch('\\frac{1}{9} \\sqrt{{( 4 + x}}');
  });
});

describe('mathml with mtable', () => {
  it('test one', () => {
    const mathml = mathmlStrings.mathWithMtable1;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch('B = \\left ( \\begin{array}{l}9 & - 5 \\\\ 3 & 0 \\\\ - 4 & 2\\end{array} \\right ) .');
  });

  it('test two', () => {
    const mathml = mathmlStrings.mathWithMtable2;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch(
      '\\Delta = \\left | \\begin{array}{l}- 1 & 6 & 7 \\\\ - 2 & 2 & 2 \\\\ 1 & 2 & 2\\end{array} \\right | .',
    );
  });
});

describe('mathml with mover', () => {
  it('mover have one element', () => {
    const mathml = mathmlStrings.mathWithMover1;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch('{\\rightarrow}');
  });

  it('mover have one element', () => {
    const mathml = mathmlStrings.mathWithMover2;

    const result = MathMLToLaTeX.convert(mathml);

    expect(result).toMatch('{\\leftrightarrows}');
  });
});
