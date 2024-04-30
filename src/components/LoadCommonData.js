import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { saveDropdownData } from 'redux/familyBookDataSlice';
import { getFamilyBookDropdownValues, getUserDropdownValues } from 'services/dropdownValues';

export const LoadCommonData = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   (async function () {
  //     Promise.all([getFamilyBookDropdownValues(), getUserDropdownValues()])
  //       .then((res) => {
  //         dispatch(saveDropdownData({ ...res[0], ...res[1] }));
  //       })
  //       .catch((err) => console.log('error - get dropdown values', err));
  //   })();
  // }, []);

  return null;
};
