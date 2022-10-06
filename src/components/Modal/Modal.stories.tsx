import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Modal as Component} from "./Modal";
import ModalHeader from "../ModalHeader";
import ModalBody from "../ModalBody";
import ModalFooter from "../ModalFooter/ModalFooter";
import {Button} from "../index";

export default {
    title: 'ESYSTYLE/COMPONENTS/Modal',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: 'Use Modal!'
            }
        }
    }
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;
function closeFunction() {
    // @ts-ignore
    document.getElementById("efymodal").hidden = !document.getElementById("efymodal").hidden;
}

export const Modal = Template.bind({});
Modal.args = {
    hidden: true,
    size: 'small',
    children: [
        <ModalHeader
            headline={"Small Modal"}
            shortDescription={"Optional, you can use this short description to descripe the content or the functionality of this modal"}
        />,
        <ModalBody>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
            <p>
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
        </ModalBody>,
        <ModalFooter float={'right'}>
            <Button onClick={closeFunction} disabled={false} isIconVisible={true} variant={"cancel"} onlyIcon={false}/>
            <Button onClick={closeFunction} disabled={true} isIconVisible={true} variant={"submit"} onlyIcon={false} />
        </ModalFooter>
    ]
}