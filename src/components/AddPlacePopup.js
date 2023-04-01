import React from 'react';
import { useState, useEffect, useContext } from 'react';

import PopupWithForm from './PopupWithForm';
//import { CurrentUserContext } from '../contexts/CurrentUserContext';

function AddPlacePopup ({ isOpen, onClose }) {
    return (
      <PopupWithForm
        name="add-card"
        isOpen={isOpen}
        onClose={onClose}
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
    )
}

export default AddPlacePopup;