import {ExcelComponent} from '../../core/ExcelComponent';
import {createTable} from './table.template';
import resizeHandler from './table.resize';
import {TableSelection} from './TableSelection';
import {$} from '../../core/dom';

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
    this.selection = new TableSelection();
  }
  init() {
    super.init();
    const $cell = this.$root.find('[data-id = "0:0"]');
    this.selection.select($cell);
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      resizeHandler(event, this.$root);
    } else if (event.target.dataset.type === 'cell') {
      const target = $(event.target);
      if (event.shiftKey) {
        console.log(target.id());
      }
      this.selection.select(target);
    }
  }
  toHTML() {
    return createTable();
  }
}
