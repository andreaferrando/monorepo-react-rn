import { sharedInitNetworking, sharedLogout, sharedIsLoggedIn, sharedResetStorage } from 'shared/utils';
import { AsyncStorage, Dimensions } from 'react-native';

export function initApp() {
    sharedInitNetworking()
}

export function	logout() {
    sharedLogout(AsyncStorage);
}

export function isLoggedIn() {
    return sharedIsLoggedIn(AsyncStorage)
}

export function resetLocalStoredInformation() {
    sharedResetStorage(AsyncStorage)
}


export const IS_DEV_MODE = true;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const sortDateAscending = (date1, date2) => {
    if (date1 > date2) return -1;
    if (date1 < date2) return 1;
    return 0;
  };
  
  
