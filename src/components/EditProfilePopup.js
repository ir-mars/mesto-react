import React from 'react';
import { useState, useEffect, useContext } from 'react';

import PopupWithForm from './PopupWithForm';
//import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup ({ isOpen, onClose }) {
  return (
    <PopupWithForm 
      name="edit-profile"
      isOpen={isOpen}
      onClose={onClose}  
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
  )
}

export default EditProfilePopup;