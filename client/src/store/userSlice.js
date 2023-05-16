import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
  email: '',
  location: '',
  username: '',
  gender: '',
  token: '',
  bio: ''
};

const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));

const initialUserState = userFromLocalStorage ? { value: userFromLocalStorage } : { value: initialState };

export const UserSlice = createSlice({
  name: 'users',
  initialState: initialUserState,
  reducers: {
    login: function(state, action) {
      state.value = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: function(state) {
      state.value = initialState;
      localStorage.removeItem('user');
    },
    updateUser: function(state, action) {
      state.value = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    }
  }
});

export const { login, logout, updateUser } = UserSlice.actions;
export default UserSlice.reducer;


