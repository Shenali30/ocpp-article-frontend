import { Box, Card, CardContent, CardHeader, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Switch, Typography } from '@mui/material';
import { AUTH_MODULES, SCOPE } from 'constants';
import _ from 'lodash';
import { useEffect, useState } from 'react';

export const UserPermissionBox = (props) => {
  const { options, scope, onChange, initialValues, error, errorMessage } = props;
  const [optionData, setOptionData] = useState([]);
  const [groupedOptions, setGroupedOptions] = useState({});

  useEffect(() => {
    const groupedOptions = _.groupBy(optionData, 'groupLabel');
    setGroupedOptions(groupedOptions);
  }, [optionData]);

  useEffect(() => {
    if (options?.length) {
      let isChecked = false,
        isDisabled = true,
        optionList = [];
      if (scope === SCOPE.ADMIN) {
        isChecked = true;
        isDisabled = true;
      } else if (scope === SCOPE.USER) {
        isChecked = false;
        isDisabled = false;
      }

      if (!scope) {
        optionList = options.map((el) => ({ ...el, value: Number(el?.value), isChecked, disabled: isDisabled }));
      } else {
        var selectedOptions = options.map((el) => ({
          ...el,
          value: Number(el?.value),
          isChecked: scope === SCOPE.ADMIN ? isChecked : initialValues?.includes(Number(el?.value)) || false,
          disabled: isDisabled,
        }));
        optionList = checkSwitchValidity(selectedOptions);
      }
      setOptionData(optionList);
    }
  }, [options, scope, initialValues]);

  const handleChange = (state, value) => {
    const optionList = [...optionData];
    const updatedList = optionList.map((ol, i) => (ol.value === value ? { ...ol, isChecked: state } : { ...ol }));
    const validatedList = checkSwitchValidity(updatedList);
    setOptionData(validatedList);
  };

  useEffect(() => {
    onChange(optionData.filter((d) => d.isChecked).map((d) => d.value));
  }, [optionData]);

  const checkSwitchValidity = (optionData) => {
    let currentOptionStatusArr = optionData;
    const familyBookSwitchGroupStatus = currentOptionStatusArr.some((d) => [AUTH_MODULES.FAMILY_BOOK_CREATE, AUTH_MODULES.FAMILY_BOOK_EDIT].includes(d.value) && d.isChecked);
    const zoneSwitchGroupStatus = currentOptionStatusArr.some((d) => [AUTH_MODULES.ZONES_EDIT].includes(d.value) && d.isChecked);
    const novenaSwitchGroupStatus = currentOptionStatusArr.some((d) => [AUTH_MODULES.NOVENAS_EDIT].includes(d.value) && d.isChecked);
    const userManageSwitchGroupStatus = currentOptionStatusArr.some((d) => [AUTH_MODULES.USER_CREATE, AUTH_MODULES.USER_EDIT].includes(d.value) && d.isChecked);

    currentOptionStatusArr = currentOptionStatusArr.map((ol, i) =>
      ol.value === AUTH_MODULES.FAMILY_BOOK_VIEW ? (familyBookSwitchGroupStatus ? { ...ol, isChecked: true, disabled: true } : { ...ol, disabled: false }) : { ...ol }
    );
    currentOptionStatusArr = currentOptionStatusArr.map((ol, i) =>
      ol.value === AUTH_MODULES.ZONES_VIEW ? (zoneSwitchGroupStatus ? { ...ol, isChecked: true, disabled: true } : { ...ol, disabled: false }) : { ...ol }
    );
    currentOptionStatusArr = currentOptionStatusArr.map((ol, i) =>
      ol.value === AUTH_MODULES.NOVENAS_VIEW ? (novenaSwitchGroupStatus ? { ...ol, isChecked: true, disabled: true } : { ...ol, disabled: false }) : { ...ol }
    );
    currentOptionStatusArr = currentOptionStatusArr.map((ol, i) =>
      ol.value === AUTH_MODULES.USER_VIEW ? (userManageSwitchGroupStatus ? { ...ol, isChecked: true, disabled: true } : { ...ol, disabled: false }) : { ...ol }
    );

    return currentOptionStatusArr;
  };

  return (
    <>
      <Card variant="outlined" color="primary" sx={{ borderRadius: 2, ...(error && { borderColor: 'red' }) }}>
        <CardHeader title={'Authorized Modules*'} titleTypographyProps={{ fontSize: '16px' }} />
        <CardContent>
          <Grid container spacing={3}>
            {Object.keys(groupedOptions).length > 0 &&
              Object.keys(groupedOptions).map((key, keyIndex) => (
                <Grid key={keyIndex} item xs={12} md={6} lg={4} xl={3}>
                  <FormControl component="div" variant="standard">
                    <FormLabel component="legend">{key}</FormLabel>
                    <Box
                      sx={{
                        '.MuiFormControlLabel-root': {
                          justifyContent: 'space-between',
                          marginLeft: 0
                        },
                        '.MuiFormGroup-root': {
                          width: '250px'
                        },
                      }}
                    >
                      <FormGroup>
                        {groupedOptions[key].map((data, index) => (
                          <FormControlLabel
                            key={index}
                            labelPlacement="start"
                            control={<Switch checked={data?.isChecked} onChange={(e) => handleChange(e.target.checked, data?.value)} />}
                            label={data?.label}
                            disabled={data?.disabled}
                          />
                        ))}
                      </FormGroup>
                    </Box>
                  </FormControl>
                </Grid>
              ))}
          </Grid>
        </CardContent>
      </Card>
      {error && (
        <Typography ml={2} variant="body2" color={'red'}>
          {errorMessage}
        </Typography>
      )}
    </>
  );
};
