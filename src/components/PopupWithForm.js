import React from 'react';

function PopupWithForm ({ name, title, buttonText,children, isOpen, onClose, onSubmit }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_is-opened" : ""}`}>  
      <div className="popup__container">
        <button className="popup__close-btn" type="button" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form
          action="#"
          className={`popup__form popup__form_type_${name}`}
          name={`${name}`}
          onSubmit={onSubmit}
        >
        {children}        
        <button className="popup__submit-btn" type="submit">{buttonText}</button>
        </form>
      </div>      
    </div>
  )
}

export default PopupWithForm;