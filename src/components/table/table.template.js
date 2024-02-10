
const CODES = {
  A: 65,
  Z: 90,
};

const createRow = (content, number = '') => {
  return `<div class="row">
<div class="row-info">${number}</div>
<div class="row-data">
${content}
</div>
</div>`;
};

const createCol = (col) => {
  return `<div class="column">${col}</div>`;
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
