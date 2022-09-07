import React, {FC} from "react";
import '../../tw-esystyle.css';

import {CardInterface as ComponentInterface} from "./Card.types";

export const Card: FC<ComponentInterface> = ({name, onClick, id}) => {

    return (
        <div
            className={`flex w-full h-fit mb-2 pl-16 pr-16 pt-3 pb-3 bg-yellow-200 hover:bg-yellow-400 hover:cursor-pointer ease-in-out duration-100 ease-in hover:shadow hover:shadow-zinc-200 justify-center rounded-lg`}
            id={id}
            onClick={onClick}
        >
            <div className="text-lg font-bold tracking-tight align-center">
                {name}
            </div>
        </div>
    )
}

export default Card;