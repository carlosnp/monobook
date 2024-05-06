import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ButtonMainComponent } from './button-main';
import { ButtonBaseComponent } from './button-base';

@NgModule({
  declarations: [
    ButtonBaseComponent,
    ButtonMainComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule
  ],
  exports: [
    ButtonMainComponent
  ],
})
export class StoryButonsModule {}
