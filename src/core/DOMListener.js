export class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`no ${$root} provider`);
    }
    this.$root = $root;
    this.listeners = listeners;
  }
  initDOMListeners() {
    console.log(this.listeners);
  }
  removeDOMListeners() {

  }
}
