import { AsyncStorage, Dimensions } from "react-native";

export const setIsNotFirstTime = () => {
  AsyncStorage.setItem("storageVarIsFirstAppLoading", JSON.stringify(false));
};

export const resetAppLoading = () => {
  AsyncStorage.setItem("storageVarIsFirstAppLoading", JSON.stringify(true));
  resetUser();
};

export const resetUser = () => {
  AsyncStorage.setItem("user", "");
};

export const clearAsyncStorage = () => {
  AsyncStorage.clear();
};

export const sortDateAscending = (date1, date2) => {
  if (date1 > date2) return -1;
  if (date1 < date2) return 1;
  return 0;
};

export const IS_DEV_MODE = true;
export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;
