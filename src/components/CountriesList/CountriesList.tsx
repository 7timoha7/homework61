import React from 'react';
import CountryItem from "./CountryItem";
import {CountryListType} from "../../types";
import "./CountriesList.css"

interface Props {
  country: CountryListType[];
  onClick: (alphaCod: string) => void;
}

const CountriesList: React.FC<Props> = ({country, onClick}) => {
  return (
    <div className="countriesList">
      {country.map((item) => {
        return <CountryItem onClick={() => onClick(item.alpha3Code)} name={item.name} key={Math.random().toString()}/>
      })}
    </div>
  );
};

export default CountriesList;