import React from 'react';
import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

function Main ({ cards, onEditProfile, onEditAvatar, onAddPlace, onCardClick, onCardLike, onCardDelete }) {
  const { name, about, avatar } = useContext(CurrentUserContext);
  
  return (
    
      <main className="content">
        <section className="profile" aria-label="Раздел Профайл">
        <div className="profile__container">
            <div className="profile__avatar-container">
              <img
                className="profile__image"
                src={avatar}
                alt="фото профиля"
                name="avatar"
              />
              <button className="profile__avatar-button" type="button" onClick={onEditAvatar}></button>          
            </div>    
            <div className="profile__info">
              <div className="profile__box">
                <h1 className="profile__title">{name}</h1>
                <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
              </div>
              <p className="profile__subtitle">{about}</p>
            </div>
        </div>  
          <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
        </section>

        <section className="cards" aria-label="Раздел карточки с описанием мест">
          {
            cards.map((card) => (
              <Card
                card={card} 
                key={card._id}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            ))
          }
        </section>
      </main>
     
  )
}

export default Main;