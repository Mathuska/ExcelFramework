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

  prepare() {
    console.log('prepare');
  }
  init() {
    super.init();
    this.selection = new TableSelection();
    const $cell = this.$root.find('[data-id = "0:0"]');
    this.selection.select($cell);
  }

  onMousedown(event) {
    resizeHandler(event, this.$root);
  }
  toHTML() {
    return createTable();
  }
}
