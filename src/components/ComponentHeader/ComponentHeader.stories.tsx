import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {ComponentHeader as Component} from "./ComponentHeader";
import Button from "../Button";

export default {
    title: 'ESYSTYLE/COMPONENTS/ComponentHeader',
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

export const ComponentHeader = Template.bind({});
ComponentHeader.args = {
    componentName: "Header Component Description"
}

export const WithActionBar = Template.bind({});
WithActionBar.args = {
    componentName: "Header with ActionBar",
    children: [
        <Button variant={"export"} disabled={true} onClick={()=>{}} isIconVisible={false} />,
        <Button variant={"create"} disabled={false} onClick={()=>{}} isIconVisible={false} />
    ]
}