// src/App.js
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import countryArr from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
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
