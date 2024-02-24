import {$} from '@core/dom.js';

const resizeHandler = (event, target) => {
  if (event.target.dataset.resize) {
    const $resize = $(event.target);
    const $parent = $resize.closest('[data-type="resizeble"]');
    const cords = $parent.getCoords();
    const type = $resize.data.resize;
    const sideProp = type === 'col' ? 'bottom' : 'right';
    let value = null;
    $resize.css({
      opacity: 1,
      zIndex: 1000,
      [sideProp]: '-5000px',
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
          target.findAll(`[data-col="${$parent.data.col}"]`)
              .forEach((cell) => (cell.style.width = value + 'px'));
          $parent.css({width: value + 'px'});
        } else {
          $parent.css({height: value + 'px'});
        }
        $resize.css({
          opacity: 0,
          bottom: 0,
          right: 0,
        });
        document.onmouseup = null;
        document.onmousemove = null;
      };
    };
  }
};

export default resizeHandler;
