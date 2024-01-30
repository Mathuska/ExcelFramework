import {capitalize} from './utils';

export class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`no ${$root} provider`);
    }
    this.$root = $root;
    this.listeners = listeners;
  }
  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = `on${capitalize(listener)}`;
      if (!this[method]) {
        const name = this.name || '';
        throw new Error(
            `Metoda ${method} nu exista in ${name}`
        );
      }
      this.$root.on(listener, this[method].bind(this));
    });
  }
  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = `on${capitalize(listener)}`;
      this.$root.on(listener, this[method].bind(this));
    });
  }
}
