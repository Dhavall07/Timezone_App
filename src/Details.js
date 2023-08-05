import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import "./App.css";
import axios from "axios";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


export default function Details(props) {

  const [cityDetails, setCityDetails] = useState("");
  const [snippet, setSnippet] = useState("");
  const [cityScore, setCityScore] = useState("");
  const [moreInfo, setmoreInfo] = useState("");
  const [p1, setp1] = useState("");
  const [p2, setp2] = useState("");
  const [p3, setp3] = useState("");
  const [p4, setp4] = useState("");
  const [r1, setr1] = useState("");
  const [r2, setr2] = useState("");
  const [r3, setr3] = useState("");
  const [r4, setr4] = useState("");

  useEffect(() => {
    getCityDetails();
    getCityDetails1();
  }, []);

  const getCityDetails = () => {
    axios({
      method: "GET",
      url: `https://www.triposo.com/api/20210615/location.json?id=${props.cityName}&account=`,
      //     url: `https://www.triposo.com/api/20210615/tour.json?annotate=trigram:London&trigram=>0.2&account=`,
    }).then((response) => {
      console.log(response.data);
      setCityDetails(response.data.results[0].id);
      setSnippet(response.data.results[0].snippet);
      setCityScore(response.data.results[0].score);
      setmoreInfo(response.data.results[0].attribution[1].url);
    });
  };

  const getCityDetails1 = () => {
    axios({
      method: "GET",
      url: `https://www.triposo.com/api/20210615/tour.json?annotate=trigram:${props.cityName}&trigram=>0.2&account=`,
    }).then((response) => {
      console.log(response.data);
      setp1(response.data.results[1].name);
      setp2(response.data.results[3].name);
      setp3(response.data.results[2].name);
      setp4(response.data.results[6].name);
      setr1(response.data.results[1].price.amount);
      setr2(response.data.results[3].price.amount);
      setr3(response.data.results[2].price.amount);
      setr4(response.data.results[6].price.amount);
    });
  };

  return (
    <div id="modal-div">
      <h2 >{cityDetails}</h2>
      <p>{snippet}</p><br /><br />
      <h4>City_Score : {cityScore}</h4><br />
      <h4>Prices of few things to enjoy in {props.cityName}</h4><br />
      <h5>{p1} : {r1}</h5>
      <h5>{p2} : {r2}</h5>
      <h5>{p3} : {r3}</h5>
      <h5>{p4} : {r4}</h5><br />
      <h4>Wikipedia : <a href={moreInfo} target="_blank">Explore more about {props.cityName} here</a></h4>
    </div>
  );
}
