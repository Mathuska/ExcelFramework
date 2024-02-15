
const CODES = {
  A: 65,
  Z: 90,
};

const createRow = ( content, i) => {
  const resize = i ? '<div class ="row-resize" data-resize="row"></div>' : '';

  return `<div class="row" data-type="resizeble">
<div class="row-info">${i ? i : ''} ${resize}</div>
<div class="row-data">
${content}
</div>
</div>`;
};

const createCol = (col) => {
  return `<div class="column" data-type="resizeble">${col}
    <div class="col-resize" data-resize="col">

  </div>
  </div>`;
};

const createCell = () => {
  return `<div class="cell" contenteditable="true"></div>`;
};

const toChar = (_, index) => {
  return String.fromCharCode(CODES.A + index);
};

export const createTable = (rowsCount = 10) => {
  const columnsCount = CODES.Z - CODES.A;
  const rows = [];

  const cols = new Array(columnsCount + 1).fill('').map(toChar).map(createCol).join('');

  rows.push(createRow(cols));

  for (let i = 0; i < rowsCount; i++) {
    const cels = new Array(columnsCount + 1).fill('').map(createCell).join('');
    rows.push(createRow(cels, i + 1));
  }
  return (`${rows.join('')}`);
};
