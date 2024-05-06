import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'lib-button-material',
  templateUrl: './button-material.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
  ],
})
export class ButtonMaterialComponent  implements OnDestroy {
  /**
   * Component destroyed stream
   */
  componentDestroyed$: Subject<void> = new Subject<void>();
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
  /**
   * Destructor del componente
   */
  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
