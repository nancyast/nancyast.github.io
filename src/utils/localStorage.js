export const ID_TOKEN = 'idToken';
export const ACCESS_TOKEN = 'accessToken';
export const SESSION = 'session';

const save = (key, value) => {
  if (value === 'undefined' || value === 'null') {
    value = '';
  }
  window.localStorage.setItem(key, value);
};

const load = (key) => {
  const value = window.localStorage.getItem(key);
  if (value === 'undefined' || value === 'null') {
    return '';
  }
  return value;
};

const clear = (key) => {
  window.localStorage.removeItem(key);
};

const loadAndClear = (key) => {
  const result = window.localStorage.getItem(key);
  window.localStorage.removeItem(key);
  return result;
};

const loadTokens = () => {
  try {
    const idToken = load(ID_TOKEN);
    const accessToken = load(ACCESS_TOKEN);
    const session = load(SESSION);
    return { idToken, accessToken, session };
  } catch (error) {
    return { idToken: '', accessToken: '', session: '' };
  }
};

export default {
  save,
  load,
  clear,
  loadAndClear,
  loadTokens
};
