import { Dimensions } from "react-native";
const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = {
  textStyle: {
    alignSelf: "center",
    color: "#000",
    fontSize: 22,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonWithOpaqueBackground: {
    justifyContent: "center",
    backgroundColor: "transparent",
    width: SCREEN_WIDTH * 0.45,
    height: SCREEN_WIDTH * 0.45
  },
  btnOpaqueViewStyle: {
    backgroundColor: "#fff",
    opacity: 0.5,
    borderRadius: 5,
    position: "absolute",
    width: SCREEN_WIDTH * 0.45,
    height: SCREEN_WIDTH * 0.45
  },

  buttonIcon: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%"
  },
  buttonIconWrapperStyle: {
    backgroundColor: "transparent",
    width: 30,
    height: 30,
    marginHorizontal: 10
  }
};

export default styles;
