import React, {FC} from "react";
import '../../tw-esystyle.css';

import {ModalProps as ComponentInterface} from "./Modal.types";

export const Modal: FC<ComponentInterface> = ({children, hidden, size}) => {

    let sizeCSS = 'w-1/4'
    let paddingCSS = 'pl-6 pr-6'

    switch (size) {
        case "small":
            sizeCSS = 'w-1/4'
            paddingCSS = 'pl-6 pr-6'
            break;
        case "medium":
            sizeCSS = 'w-1/2'
            paddingCSS = 'pl-12 pr-12'
            break;
        case "large":
            sizeCSS = 'w-2/3'
            paddingCSS = 'pl-16 pr-16'
            break;
        case "full":
            sizeCSS = 'w-full'
            paddingCSS = 'pl-20 pr-20'
            break;
    }

    function closeFunction() {
        // @ts-ignore
        document.getElementById("efymodal").hidden = !document.getElementById("efymodal").hidden;
    }


    return (
        <div id={"efymodal"} className={"relative z-10"} hidden={hidden}>
            <div className={"fixed inset-0 bg-black bg-opacity-60 transition-opacity"}/>
            <div className={"fixed z-10 inset-0 overflow-y-auto"}>
                <div className={"flex items-end items-center justify-center min-h-full p-4 text-center sm:p-0"}>
                    <div className={`${paddingCSS}  relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 ${sizeCSS} mr-5 ml-5 `}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;