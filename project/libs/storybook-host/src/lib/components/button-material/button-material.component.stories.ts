import { Meta, StoryObj, moduleMetadata} from '@storybook/angular';

import { ButtonMaterialComponent } from './button-material.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';

type ComponentWithCustomControls = ButtonMaterialComponent;

const MetaButtonMaterial: Meta<ComponentWithCustomControls> = {
  title: 'Components/Button Material',
  component: ButtonMaterialComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
      ]
    })
  ],
  parameters: {
    docs: { description: { component: `Button Material` } },
  },
  argTypes: {},
  args: {},
};
export default MetaButtonMaterial;

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