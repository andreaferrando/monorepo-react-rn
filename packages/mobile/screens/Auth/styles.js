import { Dimensions } from 'react-native';
import R from 'res/R';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#03A9F4',
    width: '100%',
    height: '100%'
  },
  wrapper: {
    width: SCREEN_WIDTH * (2 / 2.7),
    marginTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  loginWrapper: {
    marginBottom: SCREEN_HEIGHT / 9,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 0,
  },

  loginOpacity: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.75
  },

  tabStyle: {
    marginTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderColor: '#fff',
  },
  activeTabStyle: {
    backgroundColor: 'transparent',
  },
  tabTextStyle: {
    fontSize: 20,
    color: '#fff',
    opacity: 0.8
  },
  activeTabTextStyle: {
    fontSize: 20,
    color: '#000',
    opacity: 1
  },
  tabBadgeContainerStyle: {
    color: '#fff'
  },
  spinnerTextStyle: {
    color: '#FFF'
  },

};

export default styles;
