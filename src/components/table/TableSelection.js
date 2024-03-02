export class TableSelection {
  static className = 'selected';
  constructor() {
    this.group = [];
    this.current = null;
  }

  select($el) {
    this.clear();
    this.group.push($el);
    $el.addClass(TableSelection.className);
    this.current = $el;
  }
  selectGroup() {}
  clear() {
    this.group.forEach((item) => item.removeClass(TableSelection.className));
    this.group = [];
  }
}
