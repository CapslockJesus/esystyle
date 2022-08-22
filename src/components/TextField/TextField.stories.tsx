import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import {TextField} from "./TextField";

export default {
    title: 'ESYSTYLE/COMPONENTS/TextField',
    component: TextField
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />

export const Textfield = Template.bind({});
Textfield.args = {
    type: 'text',
    size: 'default',
    readonly: false
}

export const TextfieldReadOnly = Template.bind({});
TextfieldReadOnly.args = {
    type: 'text',
    size: 'default',
    readonly: true
}