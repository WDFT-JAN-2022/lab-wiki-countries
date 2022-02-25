// src/App.js
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import countryArr from './countries.json';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countryArr} />
      {/* <Routes>
        <Route></Route>
      </Routes> */}
    </div>
  );
}
export default App;
