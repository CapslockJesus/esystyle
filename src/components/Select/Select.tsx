import React, {FC} from "react";
import '../../tw-esystyle.css';

import { SelectProps as ComponentInterface} from "./Select.types";

export const Select: FC<ComponentInterface> = ({
    isMulti,
    size,
    selectOptions
}) => {

    let sizeCSS = "h-9";

    if(isMulti) {
        switch (size) {
            case "medium":
                sizeCSS = "h-32 border-2 border:bg-red-200";
                break;
            case "large":
                sizeCSS = "h-44";
                break;
            case "max-content":
                sizeCSS = "max-content"
                break;
        }
    }

    return (
        <select className={`${sizeCSS} w-full p-4 bg-white dark:bg-gray-100`} multiple={isMulti}>
            {selectOptions.map(option => (
                <option id={`${option.id}`}>
                    {option.name}
                </option>
            ))}
        </select>
    )
}

export default Select;