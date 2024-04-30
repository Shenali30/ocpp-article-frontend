import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { GlobalStyles } from 'styles/Styles';

export const InputField = (props) => {
  const { name, control, label, ...rest } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error, isTouched }, formState }) => (
        <TextField
          // name={name}
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
          label={label}
          variant="outlined"
          // inputRef={ref}
          InputLabelProps={{ sx: GlobalStyles.FieldLabelColor }}
          InputProps={{
            autoComplete: 'off'
          }}
          {...rest}
        />
      )}
    />
  );
};
