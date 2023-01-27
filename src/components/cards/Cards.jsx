import React from 'react'

import AppleIcon from '@mui/icons-material/Apple';

import "./Card.scss";
import "./Cards.scss";

const Cards = () => {
  return (
    <div className="cards">
        <div className="item">
            <AppleIcon />
        <Card  />
        </div>
       
        <Card />
        <Card />
    </div>
  )
}

export default Cards

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-container">
                <div className="card-image">
                    img
                    <img src={props.image} alt={props.alt} />
                </div>
                <div className="card-text">
                    <h2>title{props.title}</h2>
                    <p>text{props.text}</p>
                </div>
            </div>
        </div>
    )
}