export interface FileInputProps {
    accept?: string[];
    isUploading?: boolean;
    sizeLimit?: number;
    isUsingIcon?: boolean;
    placeholder?: string;
    multiple?: boolean;
    value?: unknown;
    onChange: (file: File | FileList | undefined) => void;
    onBlur?: VoidFunction;
}
