import React, {FC} from "react";
import '../../tw-esystyle.css';

import {ModalHeaderProps as ComponentInterface} from "./ModalHeader.types";

export const ModalHeader: FC<ComponentInterface> = (
    {headline, shortDescription, children}
) => {

    return (
        <div className={`pl-3 pr-3 header border-b border-yellow-300`}>
            <div>
                <span className={"font-extrabold text-xl"}>{headline}</span>
            </div>
            <div>
                <span className={"font-extralight text-sm"}>{shortDescription}</span>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default ModalHeader;