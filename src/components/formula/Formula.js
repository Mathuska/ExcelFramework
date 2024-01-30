import {ExcelComponent} from '../../core/ExcelComponent';

export class Formula extends ExcelComponent {
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['click', 'input'],
    });
  }
  onClick(event) {
    console.log('forlmula-click', event.target.textContent);
  }
  onInput(event) {
    console.log('formula-input', event.target.textContent);
  }

  static className = 'excel__formula';


  toHTML() {
    return `<div class="info">Fx</div>
    <div class="input" contenteditable="true" spellcheck="false"></div>`;
  }
}
