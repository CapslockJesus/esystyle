export interface ButtonProps {
    variant: 'submit' | 'cancel' |'delete' | 'import' | 'export' | 'synchro' | 'create';
    disabled: boolean;
    onClick: () => void;
    isIconVisible: boolean;
}