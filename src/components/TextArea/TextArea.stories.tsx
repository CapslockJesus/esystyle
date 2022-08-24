import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {TextArea as Component} from "./TextArea";

export default {
    title: 'ESYSTYLE/COMPONENTS/TextArea',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: 'Use this TextField!'
            }
        }
    }
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Textarea = Template.bind({});
Textarea.args = {
    children: '',
    height: 'default',
    isReadOnly: false
}

export const TextareaReadOnly = Template.bind({});
TextareaReadOnly.args = {
    children: '',
    height: 'default',
    isReadOnly: true
}