import React, { FC } from "react";
import '../../tw-esystyle.css';

import { LabelProps as ComponentInterface } from "./Label.types";

export const Label: FC<ComponentInterface> = ({
    children,
    nextElement,
    size,
    fontWeight,
}) => {
    let nextElementCSS = 'mr-2';
    let sizeCSS;
    let fontCSS;

    // if(nextElement === 'bottom') {
    //     nextElementCSS = 'block mb-2';
    // } else {
    //     nextElementCSS = 'mr-2'
    // }

    switch (nextElement) {
        case "bottom":
            nextElementCSS = 'block mb-2 mr-2'
            break;
        case "right":
            nextElementCSS = 'mr-2'
            break;
    }

    switch (size) {
        case "xsmall":
            sizeCSS = 'text-xs'
            break;
        case "small":
            sizeCSS = 'text-sm'
            break;
        case "base":
            sizeCSS = 'text-base'
            break;
        case "large":
            sizeCSS = 'text-lg'
            break;
        case "xlarge":
            sizeCSS = 'text-xl'
            break;
    }

    switch (fontWeight) {
        case "light":
            fontCSS = 'font-light';
            break;
        case "normal":
            fontCSS = 'font-normal';
            break;
        case "medium":
            fontCSS = 'font-medium';
            break;
        case "bold":
            fontCSS = 'font-bold';
            break;
        case "xtrabold":
            fontCSS = 'font-extrabold';
            break;
    }

    return (
        <label className={`${nextElementCSS} ${sizeCSS} ${fontCSS}`}>
            {children}
        </label>
    )
}

export default Label;