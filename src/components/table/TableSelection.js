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
  selectGroup($group) {
    this.clear();
    this.group = $group;
    this.group.forEach((item) => item.addClass(TableSelection.className));
  }
  clear() {
    this.group.forEach((item) => item.removeClass(TableSelection.className));
    this.group = [];
  }
}
