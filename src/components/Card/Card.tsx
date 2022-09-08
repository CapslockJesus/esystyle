import React, {FC} from "react";
import '../../tw-esystyle.css';

import {CardInterface as ComponentInterface} from "./Card.types";

export const Card: FC<ComponentInterface> = ({name, onClick, id, notes}) => {
    return (
        <div id={id} className="px-2 py-2 bg-white border border-gray-300 hover:bg-yellow-400 ease-in-out duration-200 hover:shadow-lg rounded-xl hover:cursor-pointer" onClick={onClick}>
            <h3 className="text-xl font-bold text-center text-gray-800">{name}</h3>
            <p className="text-center text-gray-500">{notes}</p>
        </div>
    )
}

export default Card;