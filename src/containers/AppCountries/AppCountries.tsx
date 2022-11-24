import React, {useCallback, useEffect, useState} from 'react';
import {CountryInfType, CountryListType} from "../../types";
import axios from "axios";
import CountriesList from "../../components/CountriesList/CountriesList";
import "./AppCountries.css"
import CountryInformation from "../../components/CountryInformation/CountryInformation";

const urlCountries = 'https://restcountries.com/v2/all?fields=alpha3Code,name';
const urlAlphaCod = 'https://restcountries.com/v2/alpha/';

const AppCountries = () => {
  const [alphaCod, setAlphaCod] = useState<string | null>(null);
  const [countryList, setCountryList] = useState<CountryListType[]>([]);
  const [countryInf, setCountryInf] = useState<CountryInfType | null>(null);


  const fetchData = useCallback(async () => {
    const countryResponse = await axios.get(urlCountries);
    const CountryList: CountryListType[] = countryResponse.data
    setCountryList(CountryList);
  }, []);

  const fetchDataCountry = useCallback(async (code: string) => {
    const response = await axios.get<CountryInfType>(urlAlphaCod + code);
    const countryInf = response.data;
    setCountryInf(countryInf);
  }, []);

  const onClickCountry = (item: string) => {
    setAlphaCod(item);
  }

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);

  useEffect(() => {
    if (alphaCod !== null) {
      fetchDataCountry(alphaCod).catch(console.error);
    }
  }, [alphaCod, fetchDataCountry]);

  return (
    <div className="AppCountries">
      <CountriesList onClick={onClickCountry} country={countryList}/>
      <CountryInformation countryInf={countryInf}/>
    </div>
  );
};

export default AppCountries;