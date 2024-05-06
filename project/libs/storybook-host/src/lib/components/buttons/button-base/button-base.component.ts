import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import {
  TooltipPosition
} from '@angular/material/tooltip';

/**
 * Componente Base para el modulo de botones, se usa en cada boton para externder sus propiedades.
 *
 * Tiene de Entradas:
 * - showMenu: Mostrar el boton del menu
 * - icon: Nombre del icono de material
 * - title: Titulo del boton
 * - tooltip: Texto del tooltip
 * - positionTooltip: Posicion del tooltip
 */
@Component({
  selector: 'lib-button-base',
  styleUrls: ['./button-base.component.scss'],
  template: '',
})

export class ButtonBaseComponent {
  /**
   * Deshabilitar boton
   */
  @Input()
  disabled: boolean | null = false;
  /**
   * Mostrar el boton del menu
   */
  @Input()
  showMenu = false;
  /**
   * Nombre del icono de material.
   *
   * Lista de iconos de material
   * https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/
   */
  @Input()
  icon!: string;
  /**
   * Titulo del boton
   */
  @Input()
  title!: string;
  /**
   * Texto del tooltip
   */
  @Input()
  tooltip!: string;
  /**
   * Posicion del tooltip
   * Opciones: 'after', 'before', 'above', 'below', 'left', 'right'
   */
  @Input()
  positionTooltip: TooltipPosition = 'below';
  /**
   * Color del boton
   */
  @Input()
  color: 'primary' | 'accent' | 'warn' = 'primary';
  /**
   * Emite el click en el boton
   */
  @Output()
  buttonClick: EventEmitter<void> = new EventEmitter<void>();
  /**
   * Constructor del componente
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
