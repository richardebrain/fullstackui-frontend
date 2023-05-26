import { UserType, UserTypeWithToken, tokenType } from "@/utilities/types";
import { decodeToken } from "./helper";

const storage = {
  get: (key: tokenType) => {
    const value = localStorage.getItem(key);
    if (value) {
      return value;
    }
    return null;
  },
  set: (key: tokenType, value: string) => {
    return localStorage.setItem(key, value);
  },
  remove: (key: tokenType) => {
    return localStorage.removeItem(key);
  },
};

export const getToken = (key: tokenType): UserTypeWithToken | null => {
  const tokenToDecode = storage.get(key);
  if (tokenToDecode) {
    const decodedToken = decodeToken(tokenToDecode);
    if (decodedToken.exp * 1000 < Date.now()) {
      removeToken(key);
      return null;
    } else {
      return decodedToken;
    }
  } else {
    return null;
  }
};

export const setToken = (token: tokenType, data: string) => {
  storage.set(token, data);
};

export const removeToken = (token: tokenType) => {
  storage.remove(token);
};
