import React, {FC} from "react";
import '../../tw-esystyle.css';

import {ContainerProps as ComponentInterface} from "./Container.types";

export const Container: FC<ComponentInterface> = ({children, width}) => {

    let widthCSS;

    switch (width) {
        case "navbar-width":
            widthCSS = "mt-4 mb-4 justify-between items-center mx-auto max-w-screen-xl";
            break;
        case "full-width":
            widthCSS = "mt-4 mb-4 justify-between items-center mx-auto max-w-screen-2xl";
            break;
    }

    return (
        <div className={`${widthCSS}`}>
            {children}
        </div>
    )
}

export default Container;