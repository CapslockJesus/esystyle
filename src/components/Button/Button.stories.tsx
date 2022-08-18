import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import Button  from "./Button";

export default {
    title: 'ESYSTYLE/COMPONENTS',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

function showMessageBox() {
    alert("Clicked!")
}

export const Primary = Template.bind({});
Primary.args = {
    children: "Hello World",
    variant: 'primary',
    onClick: () => {showMessageBox()}
}

