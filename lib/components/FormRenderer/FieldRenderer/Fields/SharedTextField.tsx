import type { ChangeEvent } from 'react';
import MuiTextField from '@mui/material/TextField';
import type { TextFieldProps } from '@mui/material/TextField';

export interface SharedTextFieldProps extends Omit<TextFieldProps, 'onChange'> {
  rows?: number;
  loading?: boolean;
  onChange?: (value: string) => void;
}

/**
 * SharedTextField is a text field used in multiple components,
 * The sared props will help to keep consistent styles on formFields
 *
 * It is used on:
 *  - DateField
 *  - DateTimeField
 *  - LongTextField
 *  - NumericField
 *  - SelectField
 *  - TextField
 */
export const SharedTextField = ({
  name,
  rows = 1,
  onChange,
  type = 'text',
  loading = false, // `loadign` added here to avoid to have it on `rest` and pass it down to `<MuiTextField />`
  ...rest
}: SharedTextFieldProps): JSX.Element => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;

    if (onChange) {
      onChange(val);
    }
  };

  return (
    <MuiTextField
      {...rest}
      size='small'
      id={name}
      name={name}
      variant='outlined'
      type={type}
      fullWidth
      rows={rows}
      multiline={Boolean(rows > 1)}
      onChange={handleOnChange}
    />
  );
};
