export interface TextFieldProps {
    type: 'text' | 'password' | 'number' | 'email' | 'date',
    size: 'default' | 'full-width',
    readonly: boolean,
}