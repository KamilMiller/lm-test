import {userDataArr} from './user-list-render';
import {userListRender} from './user-list-render';

const sortButtons = document.querySelectorAll('.data__control-button');
const ratingSortButton = document.querySelector('[data-sort-rating]');
const registrationDataSortButton = document.querySelector('[data-sort-registration]');
let userDataCopy = [];
let ascendingSort = {
  'registrationData': true,
  'rating': true,
};

const sortByRating = (arr) => {
  const temp = JSON.parse(JSON.stringify(arr));
  if (ascendingSort.rating) {
    temp.sort((a, b) => a.rating > b.rating ? -1 : 1);
    ascendingSort.rating = false;
  } else {
    temp.sort((a, b) => a.rating > b.rating ? 1 : -1);
    ascendingSort.rating = true;
  }
  userDataCopy = temp;
};

const sortByRegistrationData = (arr) => {
  const temp = JSON.parse(JSON.stringify(arr));
  if (ascendingSort.registrationData) {
    temp.sort((a, b) => a.registration_date > b.registration_date ? -1 : 1);
    ascendingSort.registrationData = false;
  } else {
    temp.sort((a, b) => a.registration_date > b.registration_date ? 1 : -1);
    ascendingSort.registrationData = true;
  }
  userDataCopy = temp;
};

export const initSort = () => {
  ratingSortButton.addEventListener('click', () => {
    sortByRating(userDataArr);
    userListRender(userDataCopy);
    sortButtons.forEach((button) => button.classList.remove('data__control-button--active'));
    ratingSortButton.classList.add('data__control-button--active');
  });

  registrationDataSortButton.addEventListener('click', () => {
    sortByRegistrationData(userDataArr);
    userListRender(userDataCopy);
    sortButtons.forEach((button) => button.classList.remove('data__control-button--active'));
    registrationDataSortButton.classList.add('data__control-button--active');
  });
};
