import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ToolbarComponent } from './components';


@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ], exports: [ToolbarComponent]
})
export class CoreModule { }
