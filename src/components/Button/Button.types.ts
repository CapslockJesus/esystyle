export interface ButtonProps {
    variant: 'submit' | 'cancel' |'delete' | 'import' | 'export' | 'synchro' | 'create' | 'edit' | 'close' | 'backward' | 'forward';
    disabled: boolean;
    onClick: () => void;
    isIconVisible: boolean;
    onlyIcon: boolean;
    value: string
}