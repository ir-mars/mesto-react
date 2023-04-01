import React from 'react';
import { useState, useEffect, useContext } from 'react';

import PopupWithForm from './PopupWithForm';
//import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup ({ isOpen, onClose }) {
    return (
      <PopupWithForm
        name="avatar"
        isOpen={isOpen}
        onClose={onClose}
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
    )
}

export default EditAvatarPopup;