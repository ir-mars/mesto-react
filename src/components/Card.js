import React from 'react';

function Card ({ card, onCardClick }) {   
    
    function handleClick() {
        onCardClick(card)
    }

    return (
      <article className="card">
        <img
          className="card__image"
          src={card.link}
          alt={card.name}
          onClick={handleClick}
          />
        <button className="card__delete-button" type="button"></button>
        <div className="card__container">
          <h2 className="card__title">{card.name} </h2>
          <div className="card__like-container">
            <button className="card__like-button" type="button"></button>
            <p className="card__like-counter">{card.likes.length} </p>
          </div>
        </div>
      </article>
    )
}

export default Card;