import React, {FC} from "react";
import '../../tw-esystyle.css';

import {ModalBodyProps as ComponentInterface} from "./ModalBody.types";

export const ModalBody: FC<ComponentInterface> = ({children}) => {


    return (
        <div className={"pl-3 pr-3 pt-4 pb-4 border-b border-yellow-300"}>
            {children}
        </div>
    )
}

export default ModalBody;