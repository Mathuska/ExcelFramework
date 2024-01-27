import {$} from '@core/dom.js';

export class Excel {
  constructor(selector, option) {
    (this.$el = document.querySelector(selector)),
    (this.components = option.components || []);
  }

  getRoot() {
    const $root = $.create('div', 'excel');
    this.components.forEach((Component) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      $el.html(component.toHTML());
      $root.append($el);
    });
    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
  }
}
