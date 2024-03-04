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
    for (let i = 0; i < this.group.length; i++) {
      const element = this.group[i];
      this.group[0].addClass(TableSelection.className);
      if (i > 0) {
        element.addClass(TableSelection.className1);
      }
    }
    // this.group.forEach((item) => item.addClass(TableSelection.className1));
  }
  clear() {
    this.group.forEach((item) => item.removeClass(TableSelection.className1));
    this.group.forEach((item) => item.removeClass(TableSelection.className));
    this.group = [];
  }
}
