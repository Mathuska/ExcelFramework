import {ExcelComponent} from '../../core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header';
  // constructor($root) {
  //   super($root, {
  //     name: 'Formula',
  //     listeners: ['mouseenter'],
  //   });
  // }
  // onMouseenter(event) {
  //   console.log('log');
  // }

  toHTML() {
    return `<input type="text" class="input" value="New project" />
    <div>
      <div class="btn">
        <span class="material-symbols-outlined"> delete </span>
      </div>
      <div class="btn">
        <span class="material-symbols-outlined"> exit_to_app </span>
      </div>
    </div>`;
  }
}
