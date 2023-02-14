import {userDataArr} from './user-list-render';
import {userListRender} from './user-list-render';

const searchInputClearButton = document.querySelector('.search-form__submit');
const searchInput = document.getElementById('user-email');

export const filterResetActivate = () => {
  searchInputClearButton.classList.remove('search-form__submit--hide');
  searchInputClearButton.removeAttribute('disabled');
};

export const filterReset = () => {
  searchInput.value = '';
  searchInputClearButton.classList.add('search-form__submit--hide');
  searchInputClearButton.setAttribute('disabled', 'disabled');
  userListRender(userDataArr);
};
