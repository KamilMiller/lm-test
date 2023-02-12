import {getData} from './api';

const userItemTemplate = document.querySelector('#user').content.querySelector('.data__item');
const userDataList = document.querySelector('.data__list');
let userDataArr = [];

// Сборка строки с датой регистрации
const getSixDigitDate = (fullData) => {
  const dataString = String(fullData);
  let sixDigitDate = `${dataString[8]}${dataString[9]}.${dataString[5]}${dataString[6]}.${dataString[0]}${dataString[1]}${dataString[2]}${dataString[3]}`;
  return sixDigitDate;
};

// Сборка элемента списка с данными пользователя
const buildUserItem = (fragment, element) => {
  const userItem = userItemTemplate.cloneNode(true);
  userItem.dataset.id = element.id;
  userItem.querySelector('.data__item-name').textContent = element.username;
  userItem.querySelector('.data__item-email').textContent = element.email;
  userItem.querySelector('.data__item-registration-data').textContent = getSixDigitDate(element.registration_date);
  userItem.querySelector('.data__item-registration-data').setAttribute('datetime', element.registration_date);
  userItem.querySelector('.data__item-rating').textContent = element.rating;
  userItem.querySelector('.data__delete-button').dataset.id = element.id;
  fragment.appendChild(userItem);
};

// Сборка списка с данными пользователей
const userListRender = (data) => {
  userDataArr = data;
  const fragment = document.createDocumentFragment();
  userDataArr.forEach((item) => {
    buildUserItem(fragment, item);
  });
  document.querySelectorAll('.data__item').forEach((element) => element.remove());
  userDataList.appendChild(fragment);

  return userDataArr;
};

export const initUserListRender = () => {
  const dataPromise = getData();
  dataPromise.then(userListRender);
};