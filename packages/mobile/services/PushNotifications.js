import { Permissions, Notifications } from "expo";
import { AsyncStorage } from "react-native";
import axios from "axios";

const PUSH_ENDPOINT = "http://rallycoding.herokuapp.com/api/tokens";

export default async () => {
  const previousToken = await AsyncStorage.getItem("pushtoken");
  console.log("previousToken");
  console.log(previousToken);
  if (previousToken) {
    return;
  }
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  if (status !== "granted") {
    return;
  }
  try {
    const token = await Notifications.getExpoPushTokenAsync();
    console.log("token");
    console.log(token);
    await axios.post(PUSH_ENDPOINT, { token: { token } });
    AsyncStorage.setItem("pushtoken", token);
  } catch (err) {
    console.log("error");
    console.warn(err);
    console.log(err);
  }
};
