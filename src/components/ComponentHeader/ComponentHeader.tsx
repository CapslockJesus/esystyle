import React, {FC} from "react";
import '../../tw-esystyle.css';

import {ComponentHeaderInterface as ComponentInterface} from "./ComponentHeader.types";

export const ComponentHeader: FC<ComponentInterface> = ({componentName, children}) => {


    return (
        <div>
            <div className={"mb-4"}>
                <div className={"text-2xl font-bold"}>{componentName}</div>
            </div>
            <div className={"flex justify-end"}>
                {children}
            </div>
        </div>
    )
}

export default ComponentHeader;