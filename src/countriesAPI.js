const api = "https://restcountries.com/v3.1/all";
const apiName = "https://restcountries.com/v3.1/name/"
const apiRegion = "https://restcountries.com/v3.1/region/"



export const getAll = () => fetch(api).then((res) => res.json());

getAll();
console.log(getAll());


export const getName = (update) => fetch(`${apiName}${update}`).then((res) => res.json());

getName();
console.log(getName());


export const getRegion = (update) => fetch(`${apiRegion}${update}`).then((res) => res.json());

getRegion();
console.log(getRegion());
