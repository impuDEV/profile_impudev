import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Button, ButtonSize, ButtonTheme } from './Button'
import { Theme } from '@/shared/const/theme'

export default {
	title: 'shared/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	children: 'Text',
}

export const Ghost = Template.bind({})
Ghost.args = {
	children: 'Text',
	variant: ButtonTheme.GHOST,
}

export const GhostInverted = Template.bind({})
GhostInverted.args = {
	children: 'Text',
	variant: ButtonTheme.GHOST_INVERTED,
}

export const Outline = Template.bind({})
Outline.args = {
	children: 'Text',
	variant: ButtonTheme.OUTLINE,
}

export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
	children: 'Text',
	variant: ButtonTheme.OUTLINE,
	size: ButtonSize.L,
}

export const OutlineSizeXL = Template.bind({})
OutlineSizeXL.args = {
	children: 'Text',
	variant: ButtonTheme.OUTLINE,
	size: ButtonSize.XL,
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
	children: 'Text',
	variant: ButtonTheme.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
	children: 'Text',
	variant: ButtonTheme.BACKGROUND,
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
	children: 'Text',
	variant: ButtonTheme.BACKGROUND_INVERTED,
}

export const Square = Template.bind({})
Square.args = {
	children: '>',
	variant: ButtonTheme.BACKGROUND,
	square: true,
}

export const SquareSizeM = Template.bind({})
SquareSizeM.args = {
	children: '>',
	variant: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
}

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
	children: '>',
	variant: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.L,
}

export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
	children: '>',
	variant: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.XL,
}

export const Disabled = Template.bind({})
Disabled.args = {
	children: '>',
	variant: ButtonTheme.OUTLINE,
	disabled: true,
}
