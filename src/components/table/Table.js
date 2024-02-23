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

  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resize = $(event.target);
      const $parent = $resize.closest('[data-type="resizeble"]');
      const cords = $parent.getCoords();
      const type = $resize.data.resize;
      let value = null;
      $resize.css({
        opacity: 1,
        zIndex: 1000,
        bottom: '-5000px',
      });

      document.onmousemove = (event) => {
        $resize.css({opacity: 0.5});
        if (type === 'col') {
          const delta = event.pageX - cords.right;
          value = cords.width + delta;
          $resize.css({right: -delta + 'px'});
        } else {
          const delta = event.pageY - cords.bottom;
          value = cords.height + delta;
          $resize.css({bottom: -delta + 'px'});
        }

        document.onmouseup = () => {
          if (type === 'col') {
            this.$root.fiindAll(`[data-col="${$parent.data.col}"]`)
                .forEach((cell) => (cell.style.width = value + 'px'));
            $parent.css({width: value + 'px'});
          }
          $resize.css({
            opacity: 0,
            bottom: 0,
            right: 0,
          });
          this.onMousedown = null;
          document.onmousemove = null;
        };
      };
    }
  }
  toHTML() {
    return createTable();
  }
}
