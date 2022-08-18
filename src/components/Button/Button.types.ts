export interface ButtonProps {
    variant: 'primary' | 'secondary';
    buttonFunction: 'default' | 'submit' | 'delete' | 'close' | 'edit' | 'login';
    children: string;
    disabled: boolean;
    onClick: () => void;
}