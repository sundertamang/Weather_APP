import React, { useEffect, useState } from "react";
import "./css/style.css";
const Tempapp = () => {
  const [City, SetCity] = useState(null);
  const [search, setSearch] = useState("mumbai");

  useEffect(() => {
    const FetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3f15bde1e96bc8fda90c6702523f3542`
      );
      
      const JsonData = await response.json();
      SetCity(JsonData.main)
      
      
    };

    FetchData();
  },[search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="seatch"
            className="inputField"
            value={search}
            onChange={(event) => {
              SetCity(event.target.value);
              setSearch(event.target.value)
            }}
          />
        </div>
        
          {
            !City ? (
              <p>No Data Found</p>
            ):
            (
              <div>
              <div className="info">
          <h2 className="location">
            <i className="fa-solid fa-street-view"> </i>
            {City.name}
          </h2>
          <h1 className="temp">{City.temp}</h1>

          <h3 className="temp_min_max">Min:{City.temp_min} | Max:{City.temp_max} </h3>
        </div>
        </div>
            )
          }
        
        </div>
    </>
  );
};

export default Tempapp;
