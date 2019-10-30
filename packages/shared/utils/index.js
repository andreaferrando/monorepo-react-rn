import Storage from './storage';
import Platform from './platform';
import shR from '../res/R';

export function sharedInitApp(source) {
  Platform.add(source);
}

export function sharedInitStorage(storage) {
  Storage.add(storage);
}

export function sharedIsLoggedIn() {
  return Storage.get().getItem(shR.strings.auth.jwtToken);
}

export function sharedResetStorage() {
  Storage.get().clear();
}
