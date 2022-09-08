import React, {FC} from "react";
import '../../tw-esystyle.css';

import {GridInterface} from "./GridInterface.types";

export const Grid: FC<GridInterface> = ({columns, children}) => {
    let columnCSS ;

    switch (columns) {
        case "1":
            columnCSS = "grid-cols-1"
            break;
        case "2":
            columnCSS = "grid-cols-2"
            break;
        case "3":
            columnCSS = "grid-cols-3"
            break;
        case "4":
            columnCSS = "grid-cols-4"
            break;
        case "6":
            columnCSS = "grid-cols-6"
            break;
        case "8":
            columnCSS = "grid-cols-8"
            break;
        case "10":
            columnCSS = "grid-cols-10"
            break;
        case "12":
            columnCSS = "grid-cols-12"
            break;
    }

    return (
        <div className={`grid gap-2 space-x-1 ${columnCSS}`}>
            {children}
        </div>
    )
}

export default Grid;