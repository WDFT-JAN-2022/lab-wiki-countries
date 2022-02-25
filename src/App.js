// src/App.js
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
// import countryArr from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import React from 'react';
import axios from 'axios';

function App() {
  const [countryArr, setCountryArr] = React.useState([]);

  React.useEffect(() => {
    axios
      .request({
        method: 'GET',
        url: 'https://ih-countries-api.herokuapp.com/countries',
      })
      .then((results) => {
        console.log('axios request results', results.data);
        setCountryArr(results.data);
      })
      .catch((err) => {
        console.log('Something went wrong', err);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/:alpha3Code"
          element={<CountryDetails countryList={countryArr} />}
        />
      </Routes>
      <CountriesList countries={countryArr} />
    </div>
  );
}
export default App;
