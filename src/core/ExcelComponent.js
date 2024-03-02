import {DOMListener} from './DOMListener';

export class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name;
    this.prepare();
  }
  prepare() {}
  toHTML() {}
  init() {
    this.initDOMListeners();
  }
  remove() {
    this.removeDOMListeners();
  }
}
