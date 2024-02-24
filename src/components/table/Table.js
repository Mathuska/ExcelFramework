import {ExcelComponent} from '../../core/ExcelComponent';
import {createTable} from './table.template';
import resizeHandler from './table.resize';
import {TableSelection} from './TableSelection';

export class Table extends ExcelComponent {
  static className = 'excel__table';
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'mouseup', 'mousemove'],
    });
  }
  onMouseup() {}
  onMousemove() {}

  init() {
    super.init();
    this.selection = new TableSelection();
  }

  onMousedown(event) {
    resizeHandler(event, this.$root);
  }
  toHTML() {
    return createTable();
  }
}
