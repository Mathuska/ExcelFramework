import {ExcelComponent} from '../../core/ExcelComponent';
import {TableSelection} from './TableSelection';
import {createTable} from './table.template';
import resizeHandler from './table.resize';
import {$} from '../../core/dom';
import {range} from '../../core/utils';

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
    const $cell = this.$root.find('[data-id ="0:0"]');
    this.selection.select($cell);
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      resizeHandler(event, this.$root);
    } else if (event.target.dataset.type === 'cell') {
      const $target = $(event.target);
      if (event.shiftKey) {
        const target = $target.id(true);
        const current = this.selection.current.id(true);
        const colls = range(current.col, target.col);
        const rows = range(current.row, target.row);
        const idS = colls.reduce((preiousValue, currentValue) => {
          rows.forEach((item) =>{
            preiousValue.push(`${item}:${currentValue}`);
          });
          return preiousValue;
        }, []);
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
