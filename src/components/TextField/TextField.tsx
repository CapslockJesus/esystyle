import React, { FC } from "react";
import '../../tw-esystyle.css';
import {TextFieldProps} from "./TextField.types";

export const TextField: FC<TextFieldProps> = ({
        type,
        size ,
        readonly
    }) => {

    let textFieldSize, readOnlyCss;

    switch(size) {
        case "full-width":
            textFieldSize = 'w-full'
            break;
    }

    if(readonly) {
        readOnlyCss = 'pointer-events-none opacity-60'
    }

    return (
        <input type={type} readOnly={readonly} className={`${textFieldSize} ${readOnlyCss} border border-gray-300 rounded-md text-sm px-1.5 py-1.5 bg-gray-100 dark:bg-white `}/>
    )
}

export default TextField;