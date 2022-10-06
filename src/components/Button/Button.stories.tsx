import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import Button  from "./Button";

export default {
    title: 'ESYSTYLE/COMPONENTS/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'submit',
    disabled: false,
    value: "Speichern"
}

export const OnClick = Template.bind({});
OnClick.args = {
    variant: 'submit',
    disabled: false,
    onClick: () => {alert("Clicked!")},
    value: "Speichern"
}

export const Disabled = Template.bind({});
Disabled.args = {
    variant: 'delete',
    disabled: true,
    value: "Löschen"
}

export const WithIcon = Template.bind({});
WithIcon.args = {
    variant: 'cancel',
    disabled: false,
    isIconVisible: true,
    value: "Abbrechen"
}

