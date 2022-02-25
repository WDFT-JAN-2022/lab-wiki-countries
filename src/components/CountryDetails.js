import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const { alpha3Code } = useParams();

  let foundCountry = props.countryList.find((country) => {
    return country.alpha3Code === alpha3Code;
  });

  let findBorders = foundCountry.borders.map((countries) => {
    return (
      <Link to={`/${countries}`}>
        <div className="list-group-item list-group-item-action">
          {countries}
        </div>
      </Link>
    );
  });

  return (
    <div>
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <li>{findBorders}</li>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
