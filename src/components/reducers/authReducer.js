import { SIGN_IN, SIGN_OUT } from '../actions/types';

const STATE = {
    loginStatus: null,
    userId: null
};

export const authReducer = (state = STATE, action) => {
    switch (action.type) {
        case SIGN_IN: {
            return { ...state, loginStatus: true, userId: action.payload }
        }
        case SIGN_OUT: {
            return { ...state, loginStatus: false, userId: null }
        }
        default:
            return { ...state }
    }
}