import { sharedInitNetworking, sharedLogout, sharedIsLoggedIn, sharedResetStorage, sharedInitStorage} from 'shared/utils';

export function initApp() {
    sharedInitStorage(localStorage)
    sharedInitNetworking()
}

export function	logout() {
    sharedLogout(localStorage);
}

export function isLoggedIn() {
    return sharedIsLoggedIn(localStorage) != null
}

export function resetLocalStoredInformation() {
    sharedResetStorage(localStorage)
}