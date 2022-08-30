import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import { Label as Component} from "./Label";
import TextField from "../TextField";

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

export const LabelStandard = Template.bind({});
LabelStandard.args = {
    size: 'base',
    fontWeight: 'normal',
    children: 'Some Text for Label'
}

export const LabelExtraSmall = Template.bind({});
LabelExtraSmall.args = {
    size: 'xsmall',
    fontWeight: 'normal',
    children: 'Some Text for Label'
}

export const LabelExtraBold = Template.bind({});
LabelExtraBold.args = {
    size: 'base',
    fontWeight: 'xtrabold',
    children: 'Some Text for Label'
}