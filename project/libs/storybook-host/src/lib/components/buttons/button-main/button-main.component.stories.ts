import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { fn } from '@storybook/test';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ButtonMainComponent } from './button-main.component';
import { ButtonBaseComponent } from '../button-base';
import { CommonModule } from '@angular/common';

type ComponentWithCustomControls = ButtonMainComponent;

const MetaButtonMain: Meta<ComponentWithCustomControls> = {
  title: 'Components/Button Main',
  component: ButtonMainComponent,
  parameters: {
    docs: { description: { component: `Button Main` } },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    title: '',
    buttonClick: fn()
  },
  decorators: [
    moduleMetadata({
      //👇 Importa ambos componentes para permitir la composición de componentes con Storybook
      declarations: [ButtonBaseComponent],
      imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule, MatTooltipModule ],
    }),
  ],
};
export default MetaButtonMain;

type ButtonMain = StoryObj<ComponentWithCustomControls>;

export const Primary: ButtonMain = {
  name: 'Boton primario',
  args: {
    title: 'Primary',
    color: 'primary',
    tooltip: "Primary"
  },
  render :(args) => ({
    props: args,
  }),
};

export const PrimaryWithIcon: ButtonMain = {
  name: 'Boton primario',
  args: {
    title: 'Primary',
    icon: 'home',
    color: 'primary',
    tooltip: "Primary"
  },
  render :(args) => ({
    props: args,
  }),
};

export const PrimaryIcon: ButtonMain = {
  name: 'Boton de un icono',
  args: {
    icon: 'home',
    color: 'primary',
    tooltip: "Primary"
  },
  render :(args) => ({
    props: args,
  }),
};

export const Disabled: ButtonMain = {
  name: 'Boton deshabilitado',
  args: {
    title: 'Primary disabled',
    color: 'primary',
    tooltip: "Primary disabled",
    disabled: true,
  },
  render :(args) => ({
    props: args,
  }),
};

export const TooltipRigth: ButtonMain = {
  name: 'Boton con tooltip a la derecha',
  args: {
    title: 'Primary right',
    color: 'primary',
    tooltip: "Right",
    positionTooltip: 'right'
  },
  render :(args) => ({
    props: args,
  }),
};

export const TooltipLeft: ButtonMain = {
  name: 'Boton con tooltip a la izquierda',
  args: {
    title: 'Primary left',
    color: 'primary',
    tooltip: "Left",
    positionTooltip: 'left'
  },
  render :(args) => ({
    props: args,
  }),
};

export const TooltipTop: ButtonMain = {
  name: 'Boton con tooltip arriba',
  args: {
    title: 'Primary top',
    color: 'primary',
    tooltip: "Top",
    positionTooltip: 'above'
  },
  render :(args) => ({
    props: args,
  }),
};

export const Accent: ButtonMain = {
  name: 'Boton secundario',
  args: {
    title: 'Accent',
    color: 'accent',
    tooltip: "Accent"
  },
  render :(args) => ({
    props: args,
  }),
};

export const Warn: ButtonMain = {
  name: 'Boton de peligro o alerta',
  args: {
    title: 'Warn',
    color: 'warn',
    tooltip: "Warn"
  },
  render :(args) => ({
    props: args,
  }),
};