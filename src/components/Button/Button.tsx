import React, { FC } from 'react';
import '../../tw-esystyle.css';
import { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = (
    {
        variant,
        disabled,
        onClick,
        isIconVisible

    }) => {

    const style = `inline-flex items-center px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out`;
    const submitStyle = `bg-green-600 hover:bg-green-700 focus:bg-green-700 active:bg-green-800`;
    const cancelStyle = `bg-emerald-600 hover:bg-emerald-700 focus:bg-emerald-700 active:bg-emerald-800`;
    const deleteStyle = `bg-red-600 hover:bg-red-700 focus:bg-red-700 active:bg-red-800`;
    const importStyle = `bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 active:bg-orange-800`;
    const exportStyle = `bg-yellow-600 hover:bg-yellow-700 focus:bg-yellow-700 active:bg-yellow-800`;
    const synchroStyle = `bg-cyan-600 hover:bg-cyan-700 focus:bg-cyan-700 active:bg-cyan-800`;
    const disabledStyle = `pointer-events-none opacity-60`;
    let iconVisible = "";

    if (!isIconVisible) {
        iconVisible = "hidden";
    }

    switch (variant) {
        case 'submit':
            return (
                <button type={"button"} className={`${style} ${submitStyle} ${disabled ? `${disabledStyle}` : ''}`} onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-2 ${iconVisible}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Speichern</span>
                </button>
            )
            break;
        case 'delete':
            return (
                <button type={"button"} className={`${style} ${deleteStyle} ${disabled ? `${disabledStyle}` : ''}`} onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-2 ${iconVisible}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                    <span>Löschen</span>
                </button>
            )
            break;
        case 'cancel':
            return (
                <button type={"button"} className={`${style} ${cancelStyle} ${disabled ? `${disabledStyle}` : ''}`} onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-2 ${iconVisible}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Abbrechen</span>
                </button>
            )
            break;
        case 'import':
            return (
                <button type={"button"} className={`${style} ${importStyle} ${disabled ? `${disabledStyle}` : ''}`} onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-2 ${iconVisible}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                    </svg>
                    <span>Importieren</span>
                </button>
            )
            break;
        case 'export':
            return (
                <button type={"button"} className={`${style} ${exportStyle} ${disabled ? `${disabledStyle}` : ''}`} onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-2 ${iconVisible}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    <span>Exportieren</span>
                </button>
            )
            break;
        case 'synchro':
            return (
                <button type={"button"} className={`${style} ${synchroStyle} ${disabled ? `${disabledStyle}` : ''}`} onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-2 ${iconVisible}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/>
                    </svg>
                    <span>Synchronisieren</span>
                </button>
            )
            break;
    }
}

export default Button;