import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Select as Component} from "./Select";

export default {
    title: 'ESYSTYLE/COMPONENTS/Select',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: 'Use this Select!'
            }
        }
    }
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Select = Template.bind({});
Select.storyName = 'Default';
Select.args = {
    isMulti: false,
    selectOptions: [
        {id: 1, name: "Option 1"},
        {id: 2, name: "Option 2"},
        {id: 3, name: "Option 3"},
        {id: 4, name: "Option 4"},
    ]
}

export const MultiSelect = Template.bind({});
MultiSelect.storyName = 'Multi Select';
MultiSelect.args = {
    isMulti: true,
    size: 'medium',
    selectOptions: [
        {id: 1, name: "Option 1"},
        {id: 2, name: "Option 2"},
        {id: 3, name: "Option 3"},
        {id: 4, name: "Option 4"},
    ]
}