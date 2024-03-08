import {range} from './utils';

export const matrix = ($target, $current) => {
  const target = $target.id(true);
  const current = $current.id(true);
  const colls = range(current.col, target.col);
  const rows = range(current.row, target.row);
  return colls.reduce((preiousValue, currentValue) => {
    rows.forEach((item) =>{
      preiousValue.push(`${item}:${currentValue}`);
    });
    return preiousValue;
  }, []);
};
