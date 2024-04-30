import { createSlice } from '@reduxjs/toolkit';
import { removeRefreshToken, setRefreshToken } from 'utils';

const user = {};

const auth = {
  isAuthenticated: false, // user authentication
  isLoading: false,
  error: null,
  user,
  token: null
};

const initialState = {
  //   error: null,
    auth
//   isAuthenticated: false, // user authentication
//   isLoading: false,
//   error: null,
//   user,
};

export const userSlice = createSlice({
  name: 'userAuthDetails',
  initialState,
  reducers: {
    initiateAuth: (state, action) => {
      state.auth = {
        ...state.auth,
        isLoading: true,
        error: null,
        user: {},
        isAuthenticated: false,
        token: null
      };
      removeRefreshToken()
    },

    setAuthSuccess: (state, action) => {
      state.auth = {
        ...state.auth,
        isLoading: false,
        error: null,
        user: action.payload.user,
        token: action.payload.tokens,
        isAuthenticated: true,
      };
      setRefreshToken(action.payload.tokens.refreshToken, action.payload.user.username)
    },

    updateTokens: (state, action) => {
      state.auth = {
        ...state.auth,
        token: action.payload.tokens,
      };
    },

    setAuthFailAndLogout: (state, action) => {
        state.auth = {
          ...state.auth,
          isLoading: false,
          error: null,
          user: {},
          token: null,
          isAuthenticated: false,
        };
        removeRefreshToken()
      },

    // loginSuccess: (state, action) => {
    //   state.auth = {
    //     isLoading: false,
    //     error: null,
    //     user: { ...action.payload },
    //     isAuthenticated: true,
    //   };
    // },

    // loginFail: (state, action) => {
    //   state.auth = {
    //     isLoading: false,
    //     error: action.payload,
    //     user: { ...state?.auth?.user, userDataLoading: false },
    //     googleUser,
    //     isAuthenticated: false,
    //   };
    // },

    // resetAuth: (state, action) => {
    //   state.auth = {
    //     isAuthenticated: false,
    //     isLoading: false,
    //     user: { ...state?.auth?.user, userDataLoading: false },
    //     googleUser,
    //   };
    // },

    // logoutSuccess: (state, action) => {
    //   state.auth = {
    //     isAuthenticated: false,
    //     isLoading: false,
    //     user: { ...user, userDataLoading: false },
    //     googleUser,
    //   };
    // },

    // setAuth: (state, action) => {
    //   state.auth = {
    //     ...state.auth,
    //     isAuthenticated: true,
    //     user: {
    //       ...state.auth.user,
    //       userDataLoading: false,
    //     },
    //   };
    // },

  },
});

export const {
  initiateAuth,
  setAuthSuccess,
  updateTokens,
  setAuth,
  setAuthFailAndLogout,
  loginSuccess,
  loginFail,
  resetAuth,
  logoutSuccess,
} = userSlice.actions;

export const selectAuthData = (state) => state.userAuthDetails.auth;

export default userSlice.reducer;
