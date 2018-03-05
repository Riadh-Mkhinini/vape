import { AsyncStorage } from 'react-native';

export const CACHE_KEY = 'user';

export const setInStorage = (object, key) => AsyncStorage.setItem(key, JSON.stringify(object));

export const onSignOut = (key) => AsyncStorage.removeItem(key);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(CACHE_KEY).then(res => {
      if (res !== null) {
        resolve({ isLoggedIn: true, user: JSON.parse(res) });
      } else {
        resolve({ isLoggedIn: false, user: JSON.parse(res) });
      }
    }).catch(err => reject(err));
  });
};
export const getStorage = (key) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key)
      .then(res => {
        if (res !== null) {
          resolve({ status: true, response: JSON.parse(res) });
        } else {
          resolve({ status: false, response: null });
        }
      })
      .catch(err => reject(err));
  });
};
