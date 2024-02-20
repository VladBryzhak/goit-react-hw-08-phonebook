import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { loginUser, logoutUser, refreshUser, registerUser } from "./operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isLoading: null,
  isRefreshing: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => builder
    .addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    })
    .addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isRefreshing = false;
    })
    .addCase(logoutUser.fulfilled, () => {
      return initialState;
    })
    .addMatcher(
      isAnyOf(registerUser.pending, loginUser.pending, refreshUser.pending, logoutUser.pending),
      state => {
        state.isLoading = true;
        state.error = null;
      }
  )
    .addMatcher(
      isAnyOf(registerUser.rejected, loginUser.rejected, refreshUser.rejected, logoutUser.rejected),
      (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    )
});

export const authReducer = authSlice.reducer;