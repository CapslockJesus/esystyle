import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import {TextField} from "./TextField";

export default {
    title: 'ESYSTYLE/COMPONENTS/TextField',
    component: TextField,
    parameters: {
        docs: {
            description: {
                component: 'Use this TextField!'
            }
        }
    }
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />

export const Textfield = Template.bind({});
Textfield.storyName = 'Default';
Textfield.args = {
    type: 'text',
    size: 'default',
    readonly: false,
    placeholder: 'Some text for Placeholder',
    value: "Text inside the TextField"
}

export const ReadOnly = Template.bind({});
ReadOnly.storyName = 'Read Only';
ReadOnly.args = {
    type: 'text',
    size: 'default',
    readonly: true,
    placeholder: 'This is Read Only!'
}

export const FullWidth = Template.bind({});
FullWidth.storyName = 'Full Width';
FullWidth.args = {
    type: 'text',
    size: 'full-width',
    placeholder: 'Some text for Placeholder'
}