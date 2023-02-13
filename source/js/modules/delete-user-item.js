const confirmButton = document.querySelector('.modal-confirm__button--yes');
let userItemID;

export const getUserID = (evt, buttonClass) => {
  let target = evt.target.closest(buttonClass);
  userItemID = target.dataset.id;
};

const deleteUserAfterConfirm = () => {
  const userItems = document.querySelectorAll('.data__item');
  userItems.forEach((item) => {
    if (item.dataset.id === userItemID) {
      item.remove();
    }
  });
};

export const initDeleteUsers = () => {
  confirmButton.addEventListener('click', deleteUserAfterConfirm);
};
