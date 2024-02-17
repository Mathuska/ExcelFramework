import {ExcelComponent} from '../../core/ExcelComponent';
import {createTable} from './table.template';
import {$} from '@core/dom.js';

export class Table extends ExcelComponent {
  static className = 'excel__table';
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
    });
  }

  // onMousemove(event) {
  //   console.log('move', event.target);
  // }
  // onMouseup(event) {
  //   console.log('up', event.target);
  // }
  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resize = $(event.target);
      const $parent = $resize.closest('[data-type="resizeble"]');
      const cords = $parent.getCoords();
      const type = $resize.data.resize;
      const cells = this.$root.fiindAll(`[data-col="${$parent.data.col}"]`);

      document.onmousemove = (event) => {
        if (type === 'col') {
          const delta = event.pageX - cords.right;
          const value = cords.width + delta;
          $parent.css({width: value + 'px'});
          cells.forEach((cell) => cell.style.width = value + 'px');
        } else {
          const delta = event.pageY - cords.bottom;
          const value = cords.height + delta;
          $parent.css({height: value + 'px'});
        }

        document.onmouseup = () => {
          document.onmousemove = null;
        };
      };
    }
  }
  toHTML() {
    return createTable();
  }
}
