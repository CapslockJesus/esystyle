export interface TextFieldProps {
    /**
    ** Set the textfield type
     */
    type: 'text' | 'password' | 'number' | 'email' | 'date';
    /**
     ** The size of this textfield
     */
    size?: 'default' | 'full-width',
    /**
     ** Set the textfield readonly
     */
    readonly: boolean,
    /**
     ** Set a placeholder for an textfield
     */
    placeholder?: string,
}