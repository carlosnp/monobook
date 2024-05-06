import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonMaterialComponent } from '@storybookHost';

@Component({
  selector: 'app-init',
  standalone: true,
  imports: [CommonModule, ButtonMaterialComponent],
  templateUrl: './init.component.html',
  styleUrl: './init.component.scss',
})
export class InitComponent {}
