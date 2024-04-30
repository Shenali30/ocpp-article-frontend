import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Controller } from 'react-hook-form';
import { GlobalStyles } from 'styles/Styles';

export const DatePickerField = (props) => {
  const { name, control, label, format, required, fullWidth, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error }, formState }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            {...rest}
            format={format}
            label={label}
            value={value ? dayjs(value) : null}
            onChange={(date) => onChange(dayjs(date).format(format))}
            // inputRef={ref}
            sx={{ '& label': { ...GlobalStyles.FieldLabelColor } }}
            slotProps={{
              textField: {
                readOnly: true,
                helperText: error && error.message,
                error: !!error,
                required,
                fullWidth,
              },
            }}
          />
        </LocalizationProvider>
      )}
    />
  );
};
