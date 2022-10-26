import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';

import { fetchWrapper } from '../helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;
const userData = localStorage.getItem('currentUser');
const userSubject = new BehaviorSubject(
  typeof window && JSON.parse(userData || '{}')
);

export const userService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  },
  login,
  logout,
  getAll,
};

async function login(username: string, password: string) {
  const user = await fetchWrapper.post(`${baseUrl}/authenticate`, {
    username,
    password,
  });
  user.authdata = window.btoa(username + ':' + password);
  userSubject.next(user);
  localStorage.setItem('user', JSON.stringify(user));
  return user;
}

function logout() {
  localStorage.removeItem('user');
  userSubject.next(null);
  Router.push('/login');
}

function getAll() {
  return fetchWrapper.get(baseUrl);
}
