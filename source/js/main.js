import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initCustomSelect} from './modules/form/init-custom-select';
import {initFormValidate} from './modules/form/init-form-validate';
import {initUserListRender} from './modules/user-list-render';
import {initSort} from './modules/users-sort';
import {initUsersSearch} from './modules/users-search';
import {initDeleteUsers} from './modules/delete-user-item';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  initDeleteUsers();

  // Modules
  // ---------------------------------
  initUserListRender();
  initSort();
  initUsersSearch();

  window.addEventListener('load', () => {
    initModals();
    initCustomSelect();
    initFormValidate();
  });
});
