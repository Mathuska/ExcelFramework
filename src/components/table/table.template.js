
const codes = {
  A: 65,
  Z: 90,
};
const createRow = (content) => {
  return `<div class="row">
<div class="row-info">1</div>
<div class="row-data">
${content}
</div>
</div>`;
};

const createCol = (col) => {
  return `<div class="column">${col}</div>`;
};

console.log(createCell);
console.log(createCol);

const createCell = () => {
  return `<div class="cell" contenteditable="true"></div>`;
};

export const createTable = (rowsCount = 15 ) => {
  const columnsCount = codes.Z - codes.A;
  const rows = [];

  const cols = new Array(columnsCount).fill('').map((element, index) => {
    return String.fromCharCode(codes.A + index);
  }).map((item) => {
    return createCol(item);
  }).join('');

  rows.push(createRow(cols));

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(createCell()));
  }
  return (`${rows.join('')}`);
};
