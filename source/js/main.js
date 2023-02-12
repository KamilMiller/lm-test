import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initCustomSelect} from './modules/form/init-custom-select';
import {initFormValidate} from './modules/form/init-form-validate';
import {initUserListRender} from './modules/user-list-render';
import {initSort} from './modules/users-sort';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------
  initUserListRender();
  initSort();

  window.addEventListener('load', () => {
    initModals();
    initCustomSelect();
    initFormValidate();
  });
});
