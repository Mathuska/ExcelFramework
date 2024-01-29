import {ExcelComponent} from '../../core/ExcelComponent';

export class Formula extends ExcelComponent {
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['click', 'input'],
    });
  }

  static className = 'excel__formula';


  toHTML() {
    return `<div class="info">Fx</div>
    <div class="input" contenteditable="true" spellcheck="false"></div>`;
  }
}
