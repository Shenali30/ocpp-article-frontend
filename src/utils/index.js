import { useLayoutEffect, useState } from 'react';

export const dropdownDataMapping = (data) => {
  let array = [];
  try {
    var mapAsc = new Map([...Object.entries(data)].sort());
    mapAsc.forEach((value, key) => {
      let obj = {};
      obj.label = value;
      obj.value = key;
      array.push(obj);
    });
  } catch (error) {}
  return array;
};

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

export const validateFamilyBookNo = (inputValue) => {
  inputValue = inputValue.toUpperCase().replace(/[^a-zA-Z0-9]/g, '');
  let formattedValue = '';
  for (let i = 0; i < inputValue.length; i++) {
    if (i === 2 || i === 3) formattedValue += '-' + inputValue[i];
    else formattedValue += inputValue[i];
  }
  const mainRegex = /^(\d{1,2}(-[A-Z\s])?(-\d{0,3})?)?$/;
  const letterRegex = /^[A-Za-z]+$/;
  let fsl = formattedValue.split('-').length;
  let fs1Val = formattedValue.split('-')[1];
  const isValidFormat = ((fsl === 2 && letterRegex.test(fs1Val)) || fsl !== 2) && mainRegex.test(formattedValue);
  if (isValidFormat) return formattedValue;
  else return false;
};

export const setRefreshToken = (token, username) => {
  const obj = JSON.stringify({token, username})
  localStorage.setItem('infoSysRefreshToken', obj);
};

export const getRefreshToken = () => {
  const obj = JSON.parse(localStorage.getItem('infoSysRefreshToken'))
  return obj;
};

export const removeRefreshToken = () => {
  localStorage.removeItem('infoSysRefreshToken');
};
