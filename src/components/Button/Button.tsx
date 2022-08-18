import React, { FC } from 'react';
import './Button.css'
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({
        variant,
        onClick,
        buttonFunction,
        children,
        disabled
    }) => {
    return (
        <button
            className={`efy-button efy-button-${variant} efy-button-${buttonFunction}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;