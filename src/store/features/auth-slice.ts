import { createSlice } from '@reduxjs/toolkit';

interface authState {
  isLoggedIn: boolean;
  defaultPassword: string;
  defaultUser: string;
}

const initialState: authState = {
  isLoggedIn: false,
  defaultPassword: 'RamdomPass123',
  defaultUser: 'quiz@email.com',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
