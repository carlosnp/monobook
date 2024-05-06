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
    title: 'Button Main',
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
  name: 'Color primario',
  args: {
    title: 'Primary',
    color: 'primary',
    tooltip: "Primary"
  },
  render :(args) => ({
    props: args,
  }),
};

export const Accent: ButtonMain = {
  name: 'Poco importante',
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
  name: 'Peligro o alerta',
  args: {
    title: 'Warn',
    color: 'warn',
    tooltip: "Warn"
  },
  render :(args) => ({
    props: args,
  }),
};