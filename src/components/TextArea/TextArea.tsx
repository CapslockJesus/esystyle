import React, {FC} from "react";
import '../../tw-esystyle.css';

import {TextAreaProps as ComponentInterface} from "./TextArea.types";

export const TextArea: FC<ComponentInterface> = ({
    children,
    height,
    isReadOnly
}) => {
    let heightCSS = "h-36";
    let readOnlyCSS = "";

    switch (height) {
        case "medium":
            heightCSS = "h-56"
            break;
        case "max-content":
            heightCSS = "max-content"
            break;
    }

    if(isReadOnly) {
        readOnlyCSS = 'pointer-events-none opacity-60';
    }
    return (
        <textarea
            placeholder={"hallo"}
            className={`${heightCSS} ${readOnlyCSS} p-4 w-full bg-gray-100 dark:bg-white`}
            readOnly={isReadOnly}
        >
            {children}
        </textarea>
    )
}

export default TextArea;