import * as types from './types';

export function authSuccess () {
  return {
    type: types.AUTHENTICATION_SUCCESS
  }
}

export function authFailed () {
  return {
    type: types.AUTHENTICATION_FAILED
  }
}
