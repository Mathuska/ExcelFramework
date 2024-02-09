import {ExcelComponent} from '../../core/ExcelComponent';
import {createTable} from './table.template';

export class Table extends ExcelComponent {
  static className = 'excel__table';
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['click'],
    });
  }
  onClick(event) {
    console.log('toolbar-click', event.target.textContent);
  }

  toHTML() {
    return createTable();
  }
}
