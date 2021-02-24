import React, { useState } from 'react';

import "./App.css";

import Card from "../Card/Card" 

function App() {
    //default variable declaration of cards' active state
    const [isCardActive, setCardActiveState] = useState(0);

    //function that identifies which card number was clicked
    const setCardActive = (cardNumber) => {
        setCardActiveState(cardNumber);
    }

  return (
    <div className="d-flex align-items-center min-vh-100">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-sm-6 col-xs-12 mb-4">
          <Card
            namespace = "1"
            title = "Lake Inniscarra, Ireland—Pyramid"
            time = "30:53"
            distance = "6,248 M"
            thumbnail = "card1-thumb.jpg"
            image = "card1.jpg"
            workouts = "10"
            active = {isCardActive}
            toggleCardActive = {() => setCardActive("1")}
          />
        </div>
        <div className="col-lg-3 col-sm-6 col-xs-12 mb-4">
          <Card
            namespace = "2"
            title = "Performance Series"
            time = "none"
            distance = "none"
            thumbnail = "card2-thumb.jpg"
            image = "card2.jpg"
            workouts = "9"
            active = {isCardActive}
            toggleCardActive = {() => setCardActive("2")}
          />
        </div>
        <div className="col-lg-3 col-sm-6 col-xs-12 mb-4">
          <Card
            namespace = "3"
            title = "Show Pulls and Fast Intervals"
            time = "44:13"
            distance = "9,948 M"
            thumbnail = "card3-thumb.jpg"
            image = "card3.jpg"
            workouts = "8"
            active = {isCardActive}
            toggleCardActive = {() => setCardActive("3")}
          />
        </div>
        <div className="col-lg-3 col-sm-6 col-xs-12 mb-4">
            <Card
            namespace = "4"
            title = "20 Minutes to Toned"
            time = "none"
            distance = "none"
            thumbnail = "card4-thumb.jpg"
            image = "card4.jpg"
            workouts = "12"
            active = {isCardActive}
            toggleCardActive = {() => setCardActive("4")}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-6 col-xs-12 mb-4">
          <Card
            namespace = "5"
            title = "Charles Race, Boston, Massachusetts"
            time = "36:22"
            distance = "8,648 M"
            thumbnail = "card5-thumb.jpg"
            image = "card5.jpg"
            workouts = "4"
            active = {isCardActive}
            toggleCardActive = {() => setCardActive("5")}
          />
        </div>
        <div className="col-lg-3 col-sm-6 col-xs-12 mb-4">
          <Card
            namespace = "6"
            title = "Full-Body HIIT Series"
            time = "none"
            distance = "none"
            thumbnail = "card6-thumb.jpg"
            image = "card6.jpg"
            workouts = "12"
            active = {isCardActive}
            toggleCardActive = {() => setCardActive("6")}
          />
        </div>
        <div className="col-lg-3 col-sm-6 col-xs-12 mb-4">
          <Card
            namespace = "7"
            title = "Kafue River, Zambia—Power Stroke Pyramid"
            time = "22:22"
            distance = "4,660 M"
            thumbnail = "card7-thumb.jpg"
            image = "card7.jpg"
            workouts = "18"
            active = {isCardActive}
            toggleCardActive = {() => setCardActive("7")}
          />
        </div>
        <div className="col-lg-3 col-sm-6 col-xs-12 mb-4">
          <Card
            namespace = "8"
            title = "Shred & Burn Series"
            time = "none"
            distance = "none"
            thumbnail = "card8-thumb.jpg"
            image = "card8.jpg"
            workouts = "16"
            active = {isCardActive}
            toggleCardActive = {() => setCardActive("8")}
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
