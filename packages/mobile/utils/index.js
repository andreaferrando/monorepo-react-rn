import * as sh from 'shared/utils';
import { AsyncStorage, Dimensions } from 'react-native';

export function initApp() {
    sh.sharedInitApp('mobile')
    sh.sharedInitStorage(AsyncStorage)
    sh.sharedInitNetworking()
}

export async function isLoggedIn() {
    return sh.sharedIsLoggedIn().then((item) => {
        return item != null
   })
}

export function resetLocalStoredInformation() {
    sh.sharedResetStorage()
}


export const IS_DEV_MODE = true;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const sortDateAscending = (date1, date2) => {
    if (date1 > date2) return -1;
    if (date1 < date2) return 1;
    return 0;
  };
  
  
