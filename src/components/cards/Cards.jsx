import React from 'react'

import AppleIcon from '@mui/icons-material/Apple';

import "./Card.scss";
import "./Cards.scss";

const Cards = () => {

    const cards = [
        {
            title: "title1",
            text: 'text1',
            image: "img1",
            alt: "alt1"
        },
        {
            title: "title2",
            text: "text2",
            image: "img2",
            alt: "alt2",
        },
        {
            title: "title3",
            text: "text3",
            image: "img3",
            alt: "alt3",
        }
    ]


  return (
    <div className="cards">
        {cards.map((card, index) => (
            <div className="item">
                <Card  title={card.title} text={card.text} image={card.image} />
            </div>
        ))}
    </div>
  )
}

export default Cards

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-container">
                <div className="card-image">
                    {props.icon}
                    <img src={props.image} alt={props.alt} />
                </div>
                <div className="card-text">
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}