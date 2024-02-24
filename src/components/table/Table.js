import {ExcelComponent} from '../../core/ExcelComponent';
import {createTable} from './table.template';
import resizeHandler from './table.resize';

export class Table extends ExcelComponent {
  static className = 'excel__table';
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
    });
  }

  onMousedown(event) {
    resizeHandler(event, this.$root);
  }
  toHTML() {
    return createTable();
  }
}
