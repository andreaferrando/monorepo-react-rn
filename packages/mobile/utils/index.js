import * as sh from 'shared/utils';
import shR from 'shared/res/R';
import { AsyncStorage, Dimensions } from 'react-native';

export function initApp() {
  sh.sharedInitApp('mobile');
  sh.sharedInitStorage(AsyncStorage);
}

export async function isLoggedIn() {
  const value = await AsyncStorage.getItem(shR.strings.auth.jwtToken);
  return value !== null;
}

export function resetLocalStoredInformation() {
  sh.sharedResetStorage();
}

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const sortDateAscending = (date1, date2) => {
  if (date1 > date2) return -1;
  if (date1 < date2) return 1;
  return 0;
};
