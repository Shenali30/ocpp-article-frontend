import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { GlobalStyles } from 'styles/Styles';

export const RadioGroupField = (props) => {
  const { name, control, label, options, ...rest } = props;

  function _renderHelperText(error) {
    if (error) {
      return <FormHelperText>{error.message}</FormHelperText>;
    }
  }

  const generateRadioOptions = () => {
    return options.map((option) => (
      <FormControlLabel key={option.value} value={option.value} label={option.label} control={<Radio sx={{...GlobalStyles.FieldLabelColor}}/>} />
    ));
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
        <FormControl component="fieldset" error={!!error} {...rest}>
          <FormLabel sx={GlobalStyles.FieldLabelColor}>{label}</FormLabel>
          <RadioGroup row value={value} onChange={onChange}>
            {generateRadioOptions()}
          </RadioGroup>
          {_renderHelperText(error)}
        </FormControl>
      )}
    />
  );
};
