import { Autocomplete, TextField } from '@mui/material';
import { sampleDropdownOptions } from 'pages/FamilyBook/sampleData';
import React from 'react';
import { Controller } from 'react-hook-form';
import { GlobalStyles } from 'styles/Styles';

import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export const AutoCompleteMultiSelectField = (props) => {
  const { options = [], groupBy, control, name, label, disabled, disablePortal, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <Autocomplete
          disabled={disabled}
          disableCloseOnSelect
          disablePortal={disablePortal}
          multiple
          groupBy={groupBy}
          options={options || []}
          getOptionLabel={(option) => option.label}
          isOptionEqualToValue={(option, value) => option.value == value.value}
          value={options.filter((d) => value?.includes(d.value)) || null}
          onChange={(e, data) => onChange(data.map((d) => d.value) || null)}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox icon={<CheckBoxOutlineBlankIcon fontSize="small" />} checkedIcon={<CheckBoxIcon fontSize="small" />} style={{ marginRight: 8 }} checked={selected} />
              {option.label}
            </li>
          )}
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
