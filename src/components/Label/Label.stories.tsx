import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import { Label as Component} from "./Label";

export default {
    title: 'ESYSTYLE/COMPONENTS/Label',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: 'Use this label!'
            }
        }
    }
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Some Text for Label'
}