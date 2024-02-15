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
    if (event.target.dataset?.resize) {
      const $resize = $(event.target);
      const $parent = $resize.closest('[data-type="resizeble"]');
      const cords = $parent.getCoords();
      document.onmousemove = (event) => {
        const delta = event.pageX - cords.right;
        const value = cords.width + delta;

        $parent.$el.style.width = value + 'px';

        document.onmouseup = () => {
          document.onmousemove = null;
        };
      };
      console.log(cords.right);
      console.log($parent.getCoords());
    }
  }

  toHTML() {
    return createTable();
  }
}
