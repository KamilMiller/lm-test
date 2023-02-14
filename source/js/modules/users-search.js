import {filterResetActivate, filterReset} from './filters-reset';

const searchInput = document.getElementById('user-email');
const searchInputClearButton = document.querySelector('.search-form__submit');

const onInputSearch = () => {
  filterResetActivate();
  let text = searchInput.value.toLowerCase().trim();
  let usersItems = document.querySelectorAll('.data__item');
  if (text !== '') {
    usersItems.forEach((elem) => {
      let userName = elem.querySelector('.data__item-name');
      let userEmail = elem.querySelector('.data__item-email');
      if (userName.innerText.toLowerCase().search(text) === -1 && userEmail.innerText.toLowerCase().search(text) === -1) {
        elem.classList.add('hide');
      } else {
        elem.classList.remove('hide');
      }
    });
  } else {
    usersItems.forEach((elem) => {
      elem.classList.remove('hide');
    });
  }
};

export const initUsersSearch = () => {
  searchInput.addEventListener('input', onInputSearch);
  searchInputClearButton.addEventListener('click', () => {
    filterReset();
  });
  filterReset();
};
