const api = "https://restcountries.com/v3.1/all";

export const getAll = () => fetch(api).then((res) => res.json());

getAll();
console.log(getAll());
