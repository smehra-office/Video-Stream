import { SIGN_IN, SIGN_OUT } from './types';

export const login = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const logout = () => {
    return {
        type: SIGN_OUT
    };
};