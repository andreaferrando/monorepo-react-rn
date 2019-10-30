import {
  sharedIsLoggedIn,
  sharedResetStorage,
  sharedInitStorage,
  sharedInitApp,
} from 'shared/utils';

export function initApp() {
  sharedInitApp('web');
  sharedInitStorage(localStorage);
}

export function isLoggedIn() {
  return sharedIsLoggedIn() != null;
}

export function resetLocalStoredInformation() {
  sharedResetStorage();
}
