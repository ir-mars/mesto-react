import React from 'react';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/api';
import Card from './Card';

function Main ({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) {
  const { name, about, avatar } = useContext(CurrentUserContext);
  //const [userName, setUserName] = useState("")
  //const [userAbout, setUserAbout] = useState("");
  //const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  /*useEffect (() => {
    api.getUserInfo()
      .then((data) => {
        setUserName(data.name)
        setUserAbout(data.about)
        setUserAvatar(data.avatar)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);*/  

  useEffect (() => {
    api.getInitialCards()
      .then((card) => {
        setCards(card) /*console.log(cards)*/
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  return (
    <>
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
              />
            ))
          }
        </section>
      </main>
    </> 
  )
}

export default Main;