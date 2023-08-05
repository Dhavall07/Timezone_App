import React, { useState, useEffect } from "react";

import axios from "axios";
import "./App.css";
import Image from "./Image";

export default function Main() {
  const [city, setCity] = useState("");
  const [bool1, setBool] = useState(false);
  const [bool2, setBool2] = useState(false);
  const [Currency, setCurrency] = useState("");
  const [Country, setCountry] = useState("");
  const [Language, setLang] = useState("");
  const [Location, setLoc] = useState("");


  const [time2, setTime2] = useState("");
  const [timeSpec, setTimeSpec] = useState("");



  const getCityData = (city) => {
    axios({
      method: "GET",
      url: `https://timezoneapi.io/api/timezone/?Europe/${city}&token=alavYhpTLzfSjnBWKmtc`,
    }).then((response) => {
      console.log(response.data);
      setLoc(response.data.data.timezone.location);
      setLang(response.data.data.timezone.languages);
      setCurrency(response.data.data.timezone.currency_name);
      setCountry(response.data.data.timezone.country_name);

      setTime2(response.data.data.datetime.date_time_wti);
      setTimeSpec(response.data.data.datetime.timeday_spe);
    });
  };



  return (
    <div>
      <div id="heading">European Cities</div>
      <div id="input">
        <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="Search any European city here" />
        <br />
        <br />
        <button
          id="btn"
          type="button"
          class="btn btn-dark btn-sm"
          onClick={() => {
            getCityData(city);
            setBool(true);
            setBool2(true);
            //    setCss(true);
          }}
        >
          GET
        </button>
      </div>
      <div id="display"  >
        {bool2 ? (
          <div>
            <p>Country : {Country}</p>
            <p>Location (Lat,Long) : {Location}</p>
            <p>Currency : {Currency}</p>
            <p>Languages : {Language}</p>
            <p>Time (CET) : {time2}</p>
            <p>Day_specifiction : {timeSpec}</p>
            <div>{bool1 ? <Image cityName={city} /> : null}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
