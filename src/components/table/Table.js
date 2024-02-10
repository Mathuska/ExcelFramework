import {ExcelComponent} from '../../core/ExcelComponent';
import {createTable} from './table.template';

export class Table extends ExcelComponent {
  static className = 'excel__table';
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mouseup', 'mousedown', 'mousemove'],
    });
  }

  onMousemove(event) {
    console.log('move', event.target);
  }
  onMouseup(event) {
    console.log('up', event.target);
  }
  onMousedown(event) {
    console.log( 'down', event.target);
  }

  toHTML() {
    return createTable();
  }
}
