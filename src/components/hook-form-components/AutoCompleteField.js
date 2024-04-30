import { Autocomplete, TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import { GlobalStyles } from 'styles/Styles';

export const AutoCompleteField = (props) => {
  const { options = [], control, name, label, disabled, disablePortal, fullWidth, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <Autocomplete
          fullWidth={fullWidth}
          disabled={disabled}
          disablePortal={disablePortal}
          options={options || []}
          getOptionLabel={(option) => option.label}
          isOptionEqualToValue={(option, value) => option.value == value.value}
          value={options?.find((d) => d.value === value) || null}
          onChange={(e, data) => onChange(data?.value || null)}
          renderInput={(params) => (
            <TextField
              {...params}
              {...rest}
              // inputRef={ref}
              label={label}
              error={!!error}
              helperText={error ? error.message : null}
              InputLabelProps={{ sx: GlobalStyles.FieldLabelColor }}
            />
          )}
        />
      )}
    />
  );
};
