import React, { FC } from "react";
import '../../tw-esystyle.css';

import { LabelProps as ComponentInterface } from "./Label.types";

export const Label: FC<ComponentInterface> = ({
    children,
    nextElement
}) => {
    let nextElementCSS;

    if(nextElement === 'bottom') {
        nextElementCSS = 'block mb-2';
    } else {
        nextElementCSS = 'mr-2'
    }

    return (
        <label className={`${nextElementCSS}`}>
            {children}
        </label>
    )
}

export default Label;