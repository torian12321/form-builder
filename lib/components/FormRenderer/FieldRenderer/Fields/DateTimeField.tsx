import type { KeyboardEvent, ChangeEvent } from 'react';
import type { TextFieldProps } from '@mui/material/TextField';
import { AdapterMoment as MuiAdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDateTimePicker as MuiDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { LocalizationProvider as MuiLocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Moment } from 'moment';
import { FIELD_TYPE } from '../../FormRenderer.constants';
import type { FieldProps } from './Fields.types';
import { formatMomentToDateTime } from './Fields.utils';
import { SharedTextField, SharedTextFieldProps } from './SharedTextField';

export const DateTimeField = ({
  type,
  label,
  name,
  value,
  error,
  disabled,
  onChange,
  onBlur,
}: FieldProps): JSX.Element | null => {
  if (type !== FIELD_TYPE.DATE_TIME) return null;

  const handleOnChange = (newValue: Moment | null) => {
    if (!newValue) {
      onChange(null);
    } else {
      const stringDate = formatMomentToDateTime(newValue);
      onChange(stringDate);
    }
  };

  // This is needed to avoid breaking if the user types
  // am or pm. Pressing a or p will autocomplete m for
  // the users
  const onlyAcceptAorP = (ev: KeyboardEvent) => {
    const { value: targetValue } = ev.target as HTMLInputElement;
    const selectedText = document.getSelection()?.toString();

    if (ev.key.match(/\d+/) && targetValue.length < 16) return;

    const key = ev.key.toLowerCase();
    if (key !== 'a' && key !== 'p' && !selectedText) {
      ev.preventDefault();
      ev.stopPropagation();
    }
  };

  const removeExtraCharacterOnInput = (ev: ChangeEvent<HTMLInputElement>) => {
    if (ev.target.value.length > 17) {
      ev.target.value = ev.target.value.slice(0, 17);
    }
    ev.target.value = ev.target.value.toLowerCase();
  };

  return (
    <MuiLocalizationProvider
      dateAdapter={MuiAdapterMoment}
      adapterLocale='en-US'
    >
      <MuiDateTimePicker
        ampmInClock={true}
        acceptRegex={/[\d(a|p)]/gi}
        inputFormat='MM/DD/YYYY hh:mm a'
        mask='__/__/____ __:__ _m'
        label={label}
        value={value}
        disabled={disabled}
        onChange={handleOnChange}
        onAccept={onBlur}
        renderInput={(params: TextFieldProps) => (
          <SharedTextField
            {...(params as SharedTextFieldProps)}
            name={name}
            error={error}
            onBlur={onBlur}
            onKeyDown={onlyAcceptAorP}
            onInput={removeExtraCharacterOnInput}
          />
        )}
      />
    </MuiLocalizationProvider>
  );
};
