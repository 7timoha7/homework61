import React, {useCallback, useEffect, useState} from 'react';
import "./CountryInformation.css";
import {CountryInfType} from "../../types";
import axios from "axios";
import BordersCountries from "./BordersCountries";

interface Props {
  countryInf: CountryInfType | null;
}

const urlAlphaCod = 'https://restcountries.com/v2/alpha/';

const CountryInformation: React.FC<Props> = ({countryInf}) => {
  const [inf, setInf] = useState<CountryInfType[]>([]);


  const fetchData = useCallback(async (countryInf: CountryInfType) => {
    if (countryInf?.borders !== undefined) {
      const bordersPromises = countryInf?.borders.map(async item => {
        const bordersResponse = await axios.get<CountryInfType>(urlAlphaCod + item);
        return bordersResponse.data;
      });
      const newBorders = await Promise.all(bordersPromises);
      setInf(newBorders);
    } else {
      setInf([]);
    }
  }, []);

  useEffect(() => {
    if (countryInf) {
      fetchData(countryInf).catch(console.error);
    }
  }, [countryInf, fetchData]);

  return (
    <div className="CountryInformation">
      <p>{countryInf?.name}</p>
      <p>{countryInf?.capital}</p>
      <p>{countryInf?.population}</p>
      <h1>borders</h1>
      {inf.map(item => {
        return <BordersCountries name={item.name} key={Math.random()}/>
      })}
    </div>
  );
};

export default CountryInformation;