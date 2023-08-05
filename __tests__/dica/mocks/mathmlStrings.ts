export const mathWithCsharpInMo = `
  <root>
    <math xmlns="http://www.w3.org/1998/Math/MathML">
      <mi>x</mi>
      <mo>&nbsp;</mo>
      <mo>#</mo>
      <mo>-</mo>
      <mn>3</mn>
      <mo>;</mo>
      <mo>&nbsp;</mo>
      <mi>x</mi>
      <mo>#</mo>
      <mn>0</mn>
    </math>
  </root>
`;

export const mathWithCsharpInMn = `
  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <msubsup>
      <mi>x</mi>
      <mn>1</mn>
      <mrow></mrow>
    </msubsup>
    <mn>#</mn>
    <msubsup>
      <mi>x</mi>
      <mn>2</mn>
      <mrow></mrow>
    </msubsup>
  </math>
`;

export const mathWithDoubleScript1 = `
  <math xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns="http://www.w3.org/1998/Math/MathML">
    <mi mathvariant="normal"> </mi>
    <msup>
      <mrow>
        <mi>f</mi>
      </mrow>
      <mrow>
        <mi>'</mi>
        <mi>'</mi>
        <mi>'</mi>
      </mrow>
    </msup>
    <mfenced separators="|">
      <mrow>
        <mi>x</mi>
      </mrow>
    </mfenced>
    <mo>=</mo>
  </math>
`;

export const mathWithDoubleScript2 = `
  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mi>B</mi>
    <mo>'</mo>
    <mo>'</mo>
    <mo>'</mo>
  </math>
`;

export const mathWithVdots1 = `
<math xmlns="http://www.w3.org/1998/Math/MathML">
<mi>X</mi>
<mo>=</mo>
<mrow>
  <mo>{</mo>
  <mrow>
    <mi>x</mi>
    <mo>∈</mo>
    <mi>N</mi>
    <mo>|</mo>
    <mn>20</mn>
    <mtext>⋮</mtext>
    <mi>x</mi>
  </mrow>
  <mo>}</mo>
</mrow>
</math>`;

export const mathWithVdots2 = `
  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mo>⇒</mo>
    <mrow>
      <mo>(</mo>
      <mrow>
        <mi>y</mi>
        <mo>−</mo>
        <mi>x</mi>
      </mrow>
      <mo>)</mo>
    </mrow>
    <mrow>
      <mo>(</mo>
      <mrow>
        <mi>y</mi>
        <mo>+</mo>
        <mi>x</mi>
      </mrow>
      <mo>)</mo>
    </mrow>
    <mtext> ⋮ 4</mtext>
  </math>`;

export const mathWithUnderline = `
  <math xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns="http://www.w3.org/1998/Math/MathML">
    <mo>_</mo>
    <mo>_</mo>
    <mo>_</mo>
  </math>
`;

export const mathMFencedWithTable = `
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfenced separators="" open="{" close="">
    <mtable rowlines="none none" columnlines="none">
      <mtr>
        <mtd>
          <mrow>
            <mi>m</mi>
            <msubsup>
              <mo>∈</mo>
              <mo>+</mo>
              <mtext>*</mtext>
            </msubsup>
          </mrow>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mrow>
            <mi>m</mi>
            <mo>≤</mo>
            <mn>12</mn>
          </mrow>
        </mtd>
      </mtr>
    </mtable>
    <mo>⇒</mo>
    <mi>m</mi>
    <mo>∈</mo>
    <mfenced separators="" open="{" close="}">
      <mn>1</mn>
      <mo>;</mo>
      <mn>2</mn>
      <mo>;</mo>
      <mn>3</mn>
      <mo>;</mo>
      <mo>…</mo>
      <mo>;</mo>
      <mn>11</mn>
      <mo>;</mo>
      <mn>12</mn>
    </mfenced>
  </mfenced>
</math>`;

export const mathMFencedHaveOpen = `
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfenced separators="" open="{" close="">
    <mtable columnalign="left">
      <mtr>
        <mtd>
          <mrow>
            <mi>x</mi>
            <mo>=</mo>
            <mn>3</mn>
            <mo>+</mo>
            <mn>3</mn>
            <mi>t</mi>
          </mrow>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mrow>
            <mi>y</mi>
            <mo>=</mo>
            <mo>−</mo>
            <mn>2</mn>
            <mo>+</mo>
            <mn>4</mn>
            <mi>t</mi>
          </mrow>
        </mtd>
      </mtr>
    </mtable>
  </mfenced>
</math>`;

export const mathMFencedHaveOpenAndClose = `
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>E</mi>
  <mo>\\</mo>
  <mi>F</mi>
  <mo>=</mo>
  <mfenced separators="" open="{" close="}">
    <mn>0</mn>
    <mo>,</mo>
    <mn>2</mn>
    <mo>,</mo>
    <mn>8</mn>
  </mfenced>
</math>`;

export const mathTwoMFencedHaveOpenAndClose = `
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mtext>(A \\ </mtext>
  <mi>B</mi>
  <mo>)</mo>
  <mo>∩</mo>
  <mfenced separators="" open="(" close=")">
    <mi>B</mi>
    <mo>∪</mo>
    <mi>C</mi>
  </mfenced>
  <mo>=</mo>
  <mfenced separators="" open="{" close="}">
    <mn>8</mn>
  </mfenced>
</math>`;

export const mathHavePercentInMI1 = `
<math xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns="http://www.w3.org/1998/Math/MathML">
<mfrac>
  <mrow>
    <mn>100</mn>
    <mi mathvariant="normal">%</mi>
    <mo>.</mo>
    <mo>(</mo>
    <mi mathvariant="normal">x</mi>
    <mo>-</mo>
    <mn>10</mn>
    <mo>)</mo>
  </mrow>
  <mrow>
    <mn>60</mn>
    <mi mathvariant="normal">%</mi>
  </mrow>
</mfrac>
<mo>=</mo>
<mi mathvariant="normal">x</mi>
</math>`;

export const mathHavePercentInMI2 = `
<math xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mrow>
      <mi>K</mi>
    </mrow>
    <mrow>
      <mi>d</mi>
    </mrow>
  </msub>
  <mo>=</mo>
  <mfenced open="|" close="|" separators="|">
    <mrow>
      <mfrac>
        <mrow>
          <msub>
            <mrow>
              <mi>U</mi>
            </mrow>
            <mrow>
              <mi>r</mi>
              <mi>a</mi>
            </mrow>
          </msub>
        </mrow>
        <mrow>
          <msub>
            <mrow>
              <mi>U</mi>
            </mrow>
            <mrow>
              <mi>v</mi>
              <mi>a</mi>
              <mi>o</mi>
            </mrow>
          </msub>
        </mrow>
      </mfrac>
      <mo>×</mo>
      <mn>100</mn>
      <mi>%</mi>
    </mrow>
  </mfenced>
</math>`;

export const mathHavePercentInMI3 = `
<math xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns="http://www.w3.org/1998/Math/MathML">
  <mo>⇔</mo>
  <msup>
    <mrow>
      <mfenced separators="|">
        <mrow>
          <mn>1</mn>
          <mo>+</mo>
          <mn>0,7</mn>
          <mi mathvariant="normal">%</mi>
        </mrow>
      </mfenced>
    </mrow>
    <mrow>
      <mi>a</mi>
    </mrow>
  </msup>
  <mo>.</mo>
  <msup>
    <mrow>
      <mfenced separators="|">
        <mrow>
          <mn>1</mn>
          <mo>+</mo>
          <mn>0,9</mn>
          <mi mathvariant="normal">%</mi>
        </mrow>
      </mfenced>
    </mrow>
    <mrow>
      <mi>b</mi>
    </mrow>
  </msup>
  <mo>=</mo>
  <mn>1,080790424</mn>
</math>`;

export const mathWithMClose1 = `
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <menclose notation="horizontalstrike">
    <mo>(</mo>
  </menclose>
</math>
`;

export const mathWithMClose2 = `
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <menclose notation="horizontalstrike">
    <msub>
      <mo>)</mo>
      <mi mathvariant="normal">n</mi>
    </msub>
  </menclose>
</math>
`;

export const mathWithMClose3 = `
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <menclose notation="horizontalstrike">
    <mtext>(</mtext>
  </menclose>
  <mtext> NH – </mtext>
  <msub>
    <mrow>
      <mo>[</mo>
      <msub>
        <mtext>CH</mtext>
        <mtext>2</mtext>
      </msub>
      <mo>]</mo>
    </mrow>
    <mtext>6</mtext>
  </msub>
  <mtext>– NH –&nbsp;CO – </mtext>
  <msub>
    <mrow>
      <mo>[</mo>
      <msub>
        <mtext>CH</mtext>
        <mtext>2</mtext>
      </msub>
      <mo>]</mo>
    </mrow>
    <mtext>4</mtext>
  </msub>
  <mtext>– CO </mtext>
  <msub>
    <menclose notation="horizontalstrike">
      <mtext>)</mtext>
    </menclose>
    <mtext>n</mtext>
  </msub>
</math>
`;

export const mathWithMmultiscripts1 = `
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mmultiscripts>
    <mi>B</mi>
    <mprescripts></mprescripts>
    <mrow></mrow>
    <mn>81</mn>
  </mmultiscripts>
  <mi>r</mi>
</math>
`;

export const mathWithMmultiscripts2 = `
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mmultiscripts>
    <mo>.</mo>
    <mprescripts></mprescripts>
    <mrow></mrow>
    <mn>14</mn>
  </mmultiscripts>
  <mi>x</mi>
</math>
`;

export const mathWithMsub1 = `
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi mathvariant="normal">C</mi>
    <mn>12</mn>
  </msub>
  <msub>
    <msub>
      <mi mathvariant="normal">H</mi>
      <mn>2</mn>
    </msub>
    <mn>2</mn>
  </msub>
  <msub>
    <mi mathvariant="normal">O</mi>
    <mn>11</mn>
  </msub>
</math>
`;

export const mathWithMsub2 = `
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mover>
    <mo>→</mo>
    <mrow>
      <msub>
        <mi mathvariant="normal">H</mi>
        <mn>2</mn>
      </msub>
      <mi mathvariant="normal">S</mi>
      <msub>
        <msub>
          <mi mathvariant="normal">O</mi>
          <mn>4</mn>
        </msub>
        <mrow>
          <mtext></mtext>
          <mi mathvariant="normal">d</mi>
          <mi mathvariant="normal">a</mi>
          <mi mathvariant="normal">c</mi>
        </mrow>
      </msub>
      <mo>,</mo>
      <msup>
        <mn>170</mn>
        <mn>0</mn>
      </msup>
      <mi mathvariant="normal">C</mi>
    </mrow>
  </mover>
</math>
`;

export const mathWithMsup1 = `
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
  <mo>−</mo>
  <mn>2</mn>
  <msup>
    <msup>
      <mi>y</mi>
      <mo>′</mo>
    </msup>
    <mo>′</mo>
  </msup>
  <mo>+</mo>
  <msup>
    <mi>y</mi>
    <mo>′</mo>
  </msup>
  <mo>=</mo>
  <mn>0</mn>
</math>
`;

export const mathWithMsup2 = `
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mrow>
      <mo>(</mo>
      <mrow>
        <mtext></mtext>
        <mn>7</mn>
        <mo>−</mo>
        <mn>3</mn>
        <msqrt>
          <mn>5</mn>
        </msqrt>
      </mrow>
      <mo>)</mo>
    </mrow>
    <msup>
      <mi>x</mi>
      <mn>2</mn>
    </msup>
  </msup>
  <mo>+</mo>
  <mi>m</mi>
  <msup>
    <mrow>
      <mo>(</mo>
      <mrow>
        <mtext></mtext>
        <mn>7</mn>
        <mo>+</mo>
        <mn>3</mn>
        <msqrt>
          <mn>5</mn>
        </msqrt>
        <mtext></mtext>
      </mrow>
      <mo>)</mo>
    </mrow>
    <msup>
      <mi>x</mi>
      <mn>2</mn>
    </msup>
  </msup>
  <mo>=</mo>
  <msubsup>
    <mstyle mathsize="140%" displaystyle="true">
      <msup>
        <mrow></mrow>
        <mn>2</mn>
      </msup>
    </mstyle>
    <mrow></mrow>
    <mrow>
      <msup>
        <mi>x</mi>
        <mn>2</mn>
      </msup>
      <mo>−</mo>
      <mn>1</mn>
    </mrow>
  </msubsup>
  <mrow></mrow>
</math>
`;

export const mathWithMsup3 = `<math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mn>10</mn><mo>^</mo></msup></math>`;

export const mathWithMtable1 = `
<math xmlns="http://www.w3.org/1998/Math/MathML">
<mi>B</mi>
<mo>=</mo>
<mrow>
  <mo>(</mo>
  <mtable rowlines="none none none" columnlines="none none" columnalign="left">
    <mtr>
      <mtd>
        <mn>9</mn>
      </mtd>
      <mtd>
        <mrow>
          <mo>−</mo>
          <mn>5</mn>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mn>3</mn>
      </mtd>
      <mtd>
        <mn>0</mn>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mrow>
          <mo>−</mo>
          <mn>4</mn>
        </mrow>
      </mtd>
      <mtd>
        <mn>2</mn>
      </mtd>
    </mtr>
  </mtable>
  <mo>)</mo>
</mrow>
<mo>.</mo>
</math>`;

export const mathWithMtable2 = `
<math xmlns="http://www.w3.org/1998/Math/MathML">
<mi mathvariant="normal">Δ</mi>
<mo>=</mo>
<mrow>
  <mo>|</mo>
  <mtable rowlines="none none none" columnlines="none none none" columnalign="left">
    <mtr>
      <mtd>
        <mrow>
          <mo>−</mo>
          <mn>1</mn>
        </mrow>
      </mtd>
      <mtd>
        <mn>6</mn>
      </mtd>
      <mtd>
        <mn>7</mn>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mrow>
          <mo>−</mo>
          <mn>2</mn>
        </mrow>
      </mtd>
      <mtd>
        <mn>2</mn>
      </mtd>
      <mtd>
        <mn>2</mn>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mn>1</mn>
      </mtd>
      <mtd>
        <mn>2</mn>
      </mtd>
      <mtd>
        <mn>2</mn>
      </mtd>
    </mtr>
  </mtable>
  <mo>|</mo>
</mrow>
<mo>.</mo>
</math>`;
