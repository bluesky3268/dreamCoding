'use strict';

class PopUp {
    constructor() {
        this.popUp = document.querySelector('.popup');
        this.popUpText = document.querySelector('.popup-msg');
        this.popUpRefresh = document.querySelector('.popup-refresh');
        popUpRefresh.addEventListener('click', () => {
            this.onClick && this.onClick();
            hidePopup();
        });
    }

    setClickListener(onClick) {
        this.onClick = onClick;
    }

    hide() {
        this.popUp.classList.add('pop-up-hide');
    }

}