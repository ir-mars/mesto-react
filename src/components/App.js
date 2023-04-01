import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

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

  function handleCardLike (card) {
    const isLiked = card.likes.some((item) => item._id === currentUser._id);
    api.setLike(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => 
          state.map((item) => (item._id === card._id ? newCard : item))
        );
      })
      .catch((err) => {
        console.log(err);
      })
  }

  

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
          onCardLike={handleCardLike}
        />    
        <Footer />
    
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups} 
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups} 
        />    
        
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}          
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
