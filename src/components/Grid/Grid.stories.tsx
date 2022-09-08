import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Grid} from "./Grid";
import Card from "../Card";
import Label from "../Label";
import {TextField} from "../index";

export default {
    title: 'ESYSTYLE/COMPONENTS/Grid',
    component: Grid,
    parameters: {
        docs: {
            description: {
                component: 'Use this Grid!'
            }
        }
    }
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const GridWithCards = Template.bind({});
GridWithCards.args = {
    columns: "2",
    children: [
        <Card name={"Card #1"} notes={"This is a small info text inside the card"} />,
        <Card name={"Card #2"} notes={"This is a small info text inside the card"} />,
        <Card name={"Card #3"} notes={"This is a small info text inside the card"} />,
        <Card name={"Card #4"} notes={"This is a small info text inside the card"} />,
        <Card name={"Card #5"} notes={"This is a small info text inside the card"} />
    ]
}

export const GridWithLabelAndInput = Template.bind({});
GridWithLabelAndInput.args = {
    columns: "2",
    children: [
        <div>
            <Label size={"small"} nextElement={"bottom"} fontWeight={"normal"}>Label1</Label>
            <TextField size={"full-width"} type={"text"} readonly={false} />
        </div>,
        <div>
            <Label size={"small"} nextElement={"bottom"} fontWeight={"normal"}>Label1</Label>
            <TextField size={"full-width"} type={"text"} readonly={false} />
        </div>,
        <div>
            <Label size={"small"} nextElement={"bottom"} fontWeight={"normal"}>Label1</Label>
            <TextField size={"full-width"} type={"text"} readonly={false} />
        </div>,
        <div>
            <Label size={"small"} nextElement={"bottom"} fontWeight={"normal"}>Label1</Label>
            <TextField size={"full-width"} type={"text"} readonly={false} />
        </div>
    ]
}