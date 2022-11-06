const api = "https://restcountries.com/v3.1/all";
const apiName = "https://restcountries.com/v3.1/name/";
const apiRegion = "https://restcountries.com/v3.1/region/";
const apiCodes = "https://restcountries.com/v3.1/alpha/";

export const getAll = () => fetch(api).then((res) => res.json());



export const getName = (update) =>
  fetch(`${apiName}${update}`).then((res) => res.json());


export const getRegion = (update) =>
  fetch(`${apiRegion}${update}`).then((res) => res.json());


export const getItem = (update) =>
  fetch(`${apiCodes}${update}`).then((res) => res.json());



console.log(getItem("BRA"), "testing here")