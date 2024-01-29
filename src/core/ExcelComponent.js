import {DOMListener} from './DOMListener';

export class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
  }
  toHTML() {}
  init() {
    this.initDOMListeners();
  }
}
