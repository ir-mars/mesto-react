import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true);
  };

  function handleCardClick (card) {
    setSelectedCard(card);
    //console.log(card)
  };

  function closeAllPopups () {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  useEffect (() => {
    api.getUserInfo()
      .then(({ name, about, avatar, _id }) => {
        setCurrentUser({ name, about, avatar, _id })
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  useEffect (() => {
    api.getInitialCards()
      .then((cardsData) => {
        setCards(cardsData) /*console.log(cardsData)*/
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);
    
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          cards={cards}       
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />    
        <Footer />
    
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

        <PopupWithForm 
          name="edit-profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}  
          title="Редактировать профиль"
          buttonText="Сохранить"
        >
          <input 
            type="text"
            id="name"
            name="name"
            className="popup__input popup__input_type_name"
            placeholder="Ваше имя"
            required
            minLength="2"
            maxLength="40"
          />
          <span id="name-error" className="popup__input-error"></span>    
          <input
            type="text"
            id="description"
            name="about"
            className="popup__input popup__input_type_description"
            placeholder="О себе"
            required
            minLength="2"
            maxLength="200"
          />
          <span id="description-error" className="popup__input-error"></span>    
        </PopupWithForm>

        <PopupWithForm
          name="add-card"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          title="Новое место"
          buttonText="Сохранить" 
        >        
          <input
            type="text"
            id="img-name"
            name="name"
            className="popup__input popup__input_type_img-name"
            placeholder="Название места"
            required
            minLength="2"
            maxLength="30"
          />
          <span id="img-name-error" className="popup__input-error"></span>
          <input
            type="url"
            id="img-link"
            name="link"
            className="popup__input popup__input_type_img-link"
            placeholder="Ссылка на изображение"
            required
          />
          <span id="img-link-error" className="popup__input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          title="Обновить аватар"
          buttonText="Сохранить"
        >      
          <input
            type="url"
            id="avatar-url"
            name="avatar"
            className="popup__input popup__input_type_url"
            placeholder="Ссылка на картинку"
          />
          <span id="avatar-url-error" className="popup__input-error"></span>
        </PopupWithForm>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
