import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { Controller } from 'react-hook-form';
import { GlobalStyles } from 'styles/Styles';

export const SelectField = (props) => {
  const { name, control, label, options = [], ...rest } = props;

  const generateOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  function _renderHelperText(error) {
    if (error) {
      return <FormHelperText>{error.message}</FormHelperText>;
    }
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ref }, fieldState: { error }, formState }) => (
        <FormControl {...rest} error={!!error}>
          <InputLabel sx={GlobalStyles.FieldLabelColor}>{label}</InputLabel>
          <Select
            label={label}
            onChange={onChange}
            value={value}
            // inputRef={ref}
            MenuProps={{
              PaperProps: { sx: { maxHeight: 220 } },
              disablePortal: true,
            }}
          >
            {generateOptions()}
          </Select>
          {_renderHelperText(error)}
        </FormControl>
      )}
    />
  );
};
