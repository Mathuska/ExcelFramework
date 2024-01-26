import {ExcelComponent} from '../../core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';


  toHTML() {
    return '<h1> Hello12 <h1/>';
  }
}
