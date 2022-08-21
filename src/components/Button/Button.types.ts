export interface ButtonProps {
    variant: 'submit' | 'cancel' |'delete' | 'import' | 'export' | 'synchro';
    disabled: boolean;
    onClick: () => void;
    isIconVisible: boolean;
}