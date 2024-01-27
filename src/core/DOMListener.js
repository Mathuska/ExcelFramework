export class DOMListener {
  constructor($root) {
    if (!$root) {
      throw new Error(`no ${$root} provider`);
    }
    this.$root = $root;
  }
}
