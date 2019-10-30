import { RSAA } from 'redux-api-middleware';
import ENV from '../env';

const getApiUrl = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return ENV.API_URL_DEV;
    case 'staging':
      return ENV.API_URL_STAGING;
    case 'production':
      return ENV.API_URL_PROD;
    default:
      return ENV.API_URL_DEV;
  }
};

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
  UPDATE: 'UPDATE',
};

const API = (() => {
  const timeout = 3000;

  const entities = {
    exampleData: 'example',
  };

  const getAll = (entity, types) => ({
    [RSAA]: {
      endpoint: `${getApiUrl()}/${entity}`,
      method: methods.GET,
      types,
      options: { timeout },
    },
  });

  const getOne = (entity, id, types) => ({
    [RSAA]: {
      endpoint: `${getApiUrl()}/${entity}/${id}`,
      method: methods.GET,
      types,
      options: { timeout },
    },
  });

  const post = (entity, data, types) => ({
    [RSAA]: {
      endpoint: `${getApiUrl()}/${entity}`,
      method: methods.POST,
      types,
      options: { timeout },
      headers,
      body: JSON.stringify(data),
    },
  });

  const put = (entity, data, id, types) => ({
    [RSAA]: {
      endpoint: `${getApiUrl()}/${entity}/${id}`,
      method: methods.PUT,
      types,
      options: { timeout },
      headers,
      body: JSON.stringify(data),
    },
  });

  const patch = (entity, data, id, types) => ({
    [RSAA]: {
      endpoint: `${getApiUrl()}/${entity}/${id}`,
      method: methods.PATCH,
      types,
      options: { timeout },
      body: JSON.stringify(data),
    },
  });

  const deleteOne = (entity, id, types) => ({
    [RSAA]: {
      endpoint: `${getApiUrl()}/${entity}/${id}`,
      method: methods.DELETE,
      types,
      options: { timeout },
    },
  });

  return {
    getAll, getOne, post, put, patch, deleteOne, entities,
  };
});

export default API;
