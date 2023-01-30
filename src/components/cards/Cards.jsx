import React from 'react'

import AppleIcon from '@mui/icons-material/Apple';
import reactIcon from '../assets/logos/logo512.png'
import pythonIcon from '../assets/logos/python-icon-50.png'

import "./Card.scss";
import "./Cards.scss";

const Cards = () => {

    const cards = [
        {
            title: "Swift iOS Application",
            text: 'A Simple Swift iOS Application to display a to do list',
            icon: <AppleIcon sx={{fontSize: `150px`}} />,
            link: "/"
        },
        {
            title: "ReactJs Applications",
            text: `Multiple ReactJs applications built over the years`,
            image: reactIcon,
            style: "150px",
            link: "/"
        },
        {
            title: "Python Applications",
            text: `Multiple Python applications built over the years`,
            image: pythonIcon,
            style: "150px",
            link: "/"
        }
    ]


  return (
    <div className="cards">
        {cards.map((card, index) => (
            <div className="item">
                <Card title={card.title} 
                    text={card.text} image={card.image} 
                    icon={card.icon} link ={card.link}
                    style={{width: card.style}}
                    />
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
                    <img style={props.style} src={props.image} alt={props.alt} />
                </div>
                <div className="card-text">
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </div>
                <div className="card-btn">
                    <a><button>Check It Out</button></a>
                </div>
            </div>
        </div>
    )
}