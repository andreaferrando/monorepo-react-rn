const ENV = {
  API_URL_DEV: typeof process.env.REACT_APP_API_URL_DEV !== 'undefined' ? process.env.REACT_APP_API_URL_DEV : process.env.EXPO_API_URL_DEV,
  API_URL_STAGING: typeof process.env.REACT_APP_API_URL_STAGING !== 'undefined' ? process.env.REACT_APP_API_URL_STAGING : process.env.EXPO_API_URL_STAGING,
  API_URL_PROD: typeof process.env.REACT_APP_API_URL_PROD !== 'undefined' ? process.env.REACT_APP_API_URL_PROD : process.env.EXPO_API_URL_PROD,
  IS_MOCK: typeof process.env.REACT_APP_IS_MOCK !== 'undefined' ? process.env.REACT_APP_IS_MOCK === 'true' : process.env.IS_MOCK === 'true',
};

export default ENV;
