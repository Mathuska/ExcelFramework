export class TableSelection {
  static className = 'selected';
  static className1 = 'selected1';
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
  selectGroup($group = []) {
    this.clear();
    this.group = $group;
    this.group.forEach((item) => {
      item.addClass(TableSelection.className1);
      this.current.removeClass(TableSelection.className1);
      this.current.addClass(TableSelection.className);
    });
  }
  clear() {
    this.group.forEach((item) => item.removeClass(TableSelection.className1));
    this.group.forEach((item) => item.removeClass(TableSelection.className));
    this.group = [];
  }
}
