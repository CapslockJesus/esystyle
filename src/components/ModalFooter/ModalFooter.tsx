import React, {FC} from "react";
import '../../tw-esystyle.css';

import {ModalFooterProps as ComponentInterface} from "./ModalFooter.types";
import {Button} from "../index";

export const ModalFooter: FC<ComponentInterface> = ({float, children}) => {
    let floatCSS;

    switch (float) {
        case "left":
            floatCSS = 'text-left'
            break;
        case "right":
            floatCSS = 'text-right'
            break;
    }

    return (
        <div className={`relative footer pt-4 pb-4 ${floatCSS}`}>
            {children}
        </div>
    )
}

export default ModalFooter;