import API from './api';
import * as MOCKAPI from './mock/mockapi';
import ENV from '../env';

function getApi() {
  if (process.env.NODE_ENV !== 'production' && ENV.IS_MOCK === true) {
    return MOCKAPI.default;
  }
  return API;
}
export default getApi();
