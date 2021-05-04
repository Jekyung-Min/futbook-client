// action types
// sign part
export const SIGN_IN = "SIGN_IN";
export const SIGN_UP = "SIGN_UP";
export const SIGN_OUT = "SIGN_OUT";
//user part
export const GET_USER_INFO = "GET_USER_INFO";
// booking part
export const BOOK_FUTSAL = "BOOK_FUTSAL";
export const CHECK_BOOK = "CHECK_BOOK";
export const CANCEL_BOOK = "CANCEL_BOOK";
// futsal part
export const GET_ALLFUTSAL_INFO = "GET_ALLFUTSAL_INFO";

// actions creator functions
// action creator: sign
export const signIn = () => {
  return {
    type: SIGN_IN,
    payload: {},
  };
};

export const signup = () => {
  return {
    type: SIGN_UP,
    payload: {},
  };
};

export const signout = () => {
  return {
    type: SIGN_OUT,
    payload: {},
  };
};

// action creator: user
export const getUserInfo = () => {
  return {
    type: GET_USER_INFO,
    payload: {},
  };
};

//action creator: booking
export const bookFutsal = () => {
  return {
    type: BOOK_FUTSAL,
    payload: {},
  };
};

export const checkBook = () => {
  return {
    type: CHECK_BOOK,
    payload: {},
  };
};

export const cancelBook = () => {
  return {
    type: CANCEL_BOOK,
    payload: {},
  };
};

// action creator: futsal
export const getAllFutsalInfo = () => {
  return {
    type: GET_ALLFUTSAL_INFO,
    payload: {},
  };
};
