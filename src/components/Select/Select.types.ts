export interface SelectProps{
    isMulti: boolean;
    size: 'default' | 'medium' | 'large' | 'max-content';
    selectOptions: SelectOptions[];
}

export interface SelectOptions {
    id: number;
    name: string;
}