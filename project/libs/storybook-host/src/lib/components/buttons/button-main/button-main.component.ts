import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonBaseComponent } from '../button-base';

@Component({
  selector: 'lib-button-main',
  templateUrl: './button-main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonMainComponent extends ButtonBaseComponent {
  /**
   * Constructor del componente
   */
  constructor() {
    super();
  }
}
