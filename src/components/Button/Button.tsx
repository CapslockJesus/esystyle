import React, { FC } from 'react';
import '../../main.css';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({
        variant,
        onClick,
        buttonFunction,
        children,
        disabled
    }) => {
    return (
        <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
        </button>
    );
}

export default Button;