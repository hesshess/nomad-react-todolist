import { atom, selector } from "recoil";

export enum Status {
  "TO_GO",
  "VISITED",
  "LIKE",
  "DELETE",
}

export interface ICountry {
  id: number;
  name: string;
  status: Status;
}

const lsCountries = (): ICountry[] => {
  const ls = window.localStorage.getItem("countries");
  return ls ? JSON.parse(ls) : [];
};

export const countriesState = atom<ICountry[]>({
  key: "countries",
  default: [...lsCountries()],
});

export const sortedCountriesState = selector({
  key: "sortedCountries",
  get: ({ get }) => {
    let countries = get(countriesState);
    localStorage.setItem("countries", JSON.stringify([...countries]));
    return [
      countries.filter((country) => country.status === Status.TO_GO),
      countries.filter((country) => country.status === Status.VISITED),
      countries.filter((country) => country.status === Status.LIKE),
    ];
  },
});
