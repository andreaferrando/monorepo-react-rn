import { sharedInitNetworking, sharedLogout, sharedIsLoggedIn, sharedResetStorage } from 'shared/utils';

export function initApp() {
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