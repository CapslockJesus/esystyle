import {DetailedHTMLProps, InputHTMLAttributes} from "react";

export interface TextAreaProps {
    height: 'default' | 'medium' | 'max-content';
    isReadOnly: boolean,
    onChange?: (event: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => void
    placeholder?: string
    value?: string
    id?: string
}