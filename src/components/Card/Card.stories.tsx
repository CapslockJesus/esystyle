import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Card as Component} from "./Card";

export default {
    title: 'ESYSTYLE/COMPONENTS/Card',
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

export const DefaultCard = Template.bind({});
DefaultCard.args = {
    onClick: () => {alert("hallo")},
    name: "Card #1",
    notes: "This is a small info text inside the card"
}