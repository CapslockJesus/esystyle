import React, {FC} from "react";
import '../../tw-esystyle.css';

import {TextAreaProps as ComponentInterface} from "./TextArea.types";

export const TextArea: FC<ComponentInterface> = ({
    height,
    isReadOnly,
    placeholder,
    onChange,
    value,
    id
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
            placeholder={placeholder}
            className={`${heightCSS} ${readOnlyCSS} p-4 w-full mr-2 border border-gray-300 rounded-md text-sm bg-gray-100 dark:bg-white`}
            readOnly={isReadOnly}
            onChange={onChange}
            value={value}
            id={id}
        />
    )
}

export default TextArea;