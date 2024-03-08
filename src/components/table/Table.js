import {ExcelComponent} from '../../core/ExcelComponent';
import {TableSelection} from './TableSelection';
import {createTable} from './table.template';
import resizeHandler from './table.resize';
import {$} from '../../core/dom';
import {matrix} from '../../core/functions';

export class Table extends ExcelComponent {
  static className = 'excel__table';
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown', 'mousemove'],
    });
  }

  onKeydown(event) {
    const keys = ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'];
    const {key} = event;
    if (keys.includes(key)) {
      event.preventDefault();
      const current = this.selection.current.id(true);
      console.log(current);
    }
    console.log(keys, key);
  }
  onMousemove() {}

  prepare() {
    this.selection = new TableSelection();
  }
  init() {
    super.init();
    const $cell = this.$root.find('[data-id ="0:0"]');
    this.selection.select($cell);
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      resizeHandler(event, this.$root);
    } else if (event.target.dataset.type === 'cell') {
      const $target = $(event.target);
      if (event.shiftKey) {
        const idS = matrix($target, this.selection.current);
        const $cells = idS.map((item) => {
          return this.$root.find(`[data-id ="${item}"]`);
        });
        this.selection.selectGroup($cells);
      } else {
        this.selection.select($target);
      }
    }
  }
  toHTML() {
    return createTable();
  }
}
