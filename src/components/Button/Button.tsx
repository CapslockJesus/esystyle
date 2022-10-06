import React, { FC } from 'react';
import '../../tw-esystyle.css';
import { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = (
    {
        variant,
        disabled,
        onClick,
        isIconVisible,
        onlyIcon,
        value
    }) => {

    const style = `ml-1 mr-1 inline-flex items-center px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out`;
    const submitStyle = `bg-green-600 hover:bg-green-700 focus:bg-green-700 active:bg-green-800`;
    const cancelStyle = `bg-gray-600 hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-800`;
    const deleteStyle = `bg-red-600 hover:bg-red-700 focus:bg-red-700 active:bg-red-800`;
    const importStyle = `bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 active:bg-orange-800`;
    const exportStyle = `bg-yellow-600 hover:bg-yellow-700 focus:bg-yellow-700 active:bg-yellow-800`;
    const synchroStyle = `bg-cyan-600 hover:bg-cyan-700 focus:bg-cyan-700 active:bg-cyan-800`;
    const createStyle = `bg-violet-600 hover:bg-violet-700 focus:bg-violet-700 active:bg-violet-800`;
    const editStyle = `bg-lime-600 hover:bg-lime-700 focus:bg-lime-700 active:bg-lime-800`;
    const closeStyle = `bg-teal-600 hover:bg-teal-700 focus:bg-teal-700 active:bg-teal-800`;
    const backwardForwardStyle = `bg-zinc-600 hover:bg-zinc-700 focus:bg-zinc-700 active:bg-zinc-800`;
    const disabledStyle = `pointer-events-none opacity-60`;
    let iconVisible = "";
    let setMargin = "mr-2";

    if (!isIconVisible) {
        iconVisible = "hidden";
    }
    if (onlyIcon) {
        setMargin = ""
    }

    switch (variant) {
        case 'submit':
            return (
                <button type={"button"} className={`${style} ${submitStyle} ${disabled ? `${disabledStyle}` : ''}`} onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${setMargin} ${iconVisible}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span hidden={onlyIcon}>{value}</span>
                </button>
            )
        case 'delete':
            return (
                <button type={"button"} className={`${style} ${deleteStyle} ${disabled ? `${disabledStyle}` : ''}`} onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${setMargin} ${iconVisible}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                    <span hidden={onlyIcon}>{value}</span>
                </button>
            )
        case 'cancel':
            return (
                <button type={"button"} className={`${style} ${cancelStyle} ${disabled ? `${disabledStyle}` : ''}`} onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${setMargin} ${iconVisible}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span hidden={onlyIcon}>{value}</span>
                </button>
            )
        case 'import':
            return (
                <button type={"button"} className={`${style} ${importStyle} ${disabled ? `${disabledStyle}` : ''}`} onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${setMargin} ${iconVisible}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                    </svg>
                    <span hidden={onlyIcon}>{value}</span>
                </button>
            )
        case 'export':
            return (
                <button type={"button"} className={`${style} ${exportStyle} ${disabled ? `${disabledStyle}` : ''}`} onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${setMargin} ${iconVisible}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    <span hidden={onlyIcon}>{value}</span>
                </button>
            )
        case 'synchro':
            return (
                <button type={"button"} className={`${style} ${synchroStyle} ${disabled ? `${disabledStyle}` : ''}`} onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${setMargin} ${iconVisible}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/>
                    </svg>
                    <span hidden={onlyIcon}>{value}</span>
                </button>
            )
        case 'create':
            return (
                <button type={"button"} className={`${style} ${createStyle} ${disabled ? `${disabledStyle}` : ''}`} onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${setMargin} ${iconVisible}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                    </svg>
                    <span hidden={onlyIcon}>{value}</span>
                </button>
            )
        case 'edit':
            return (
                <button type={"button"} className={`${style} ${editStyle} ${disabled ? `${disabledStyle}` : ''}`} onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`h-5 w-5 ${setMargin} ${iconVisible}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    <span hidden={onlyIcon}>{value}</span>
                </button>
            )
        case 'close':
            return (
                <button type={"button"} className={`${style} ${closeStyle} ${disabled ? `${disabledStyle}` : ''}`} onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`h-5 w-5 ${setMargin} ${iconVisible}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span hidden={onlyIcon}>{value}</span>
                </button>
            )
        case 'backward':
            return (
                <button type={"button"} className={`${style} ${backwardForwardStyle} ${disabled ? `${disabledStyle}` : ''}`} onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`h-5 w-5 ${setMargin} ${iconVisible}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
                    </svg>
                    <span hidden={onlyIcon}>{value}</span>
                </button>
            )
        case 'forward':
            return (
                <button type={"button"} className={`${style} ${backwardForwardStyle} ${disabled ? `${disabledStyle}` : ''}`} onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`h-5 w-5 ${setMargin} ${iconVisible}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                    </svg>
                    <span hidden={onlyIcon}>{value}</span>
                </button>
            )
    }
}

export default Button;