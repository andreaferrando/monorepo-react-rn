import shR from 'shared/res/R';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  wrapperView: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  text: {
    justifyContent: 'center',
    top: '45%',
    left: '30%',
  },
  logo: {
    width: "80%",
    height: '10%',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    paddingTop: '10%',
  },
  formView: {
    width: '70%',
    marginTop: 30,
  },
  btn: {
    fontSize: 20, color: 'white'
  },
  btnContainer: {
    padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: shR.colors.main.default, marginTop:50
  },
};

export default styles;
