import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import axios from "axios";
import "./App.css";
import Details from "./Details";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { UncontrolledCarousel } from 'reactstrap';


export default function Image(props) {




  const [Image, setImage] = useState("");
  const [Image1, setImage1] = useState("");
  const [Image2, setImage2] = useState("");
  const [bool1, setBool] = useState(false);

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const items = [
    {
      src: Image,

      key: '1'
    },
    {
      src: Image1,

      key: '2'
    },
    {
      src: Image2,

      key: '3'
    }];


  useEffect(() => {
    getCityImage();
  }, []);

  const getCityImage = () => {
    axios({
      method: "GET",
      url: `https://api.unsplash.com/search/photos?query=${props.cityName}&client_id=nI-EqkPr7aLgCblXmt9x6Et6KFKVBcUe0-606VyHARU`,
    }).then((response) => {
      console.log(response.data);
      setImage(response.data.results[0].urls.full);
      setImage1(response.data.results[1].urls.full);
      setImage2(response.data.results[2].urls.full);
    });
  };

  return (
    <div>
      <UncontrolledCarousel items={items} />

      <br />
      <br />
      <button
        class="btn btn-danger btn-lg"
        id="open"
        onClick={() => {
          setBool(true);
          onOpenModal();
        }}
      >
        {props.cityName}
      </button>
      <Modal open={open} onClose={onCloseModal} center >

        <div>{bool1 ? <Details cityName={props.cityName} /> : null}</div>
      </Modal>
    </div>
  );
}