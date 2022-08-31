import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Container as Component} from "./Container";

export default {
    title: 'ESYSTYLE/COMPONENTS/Container',
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

export const ContainerNavbarWidth = Template.bind({});
ContainerNavbarWidth.args = {
    children: 'Hier ein Text',
    width: "navbar-width"
}

export const ContainerFullWidth = Template.bind({});
ContainerFullWidth.args = {
    children: 'Hier ein Text',
    width: "full-width"
}