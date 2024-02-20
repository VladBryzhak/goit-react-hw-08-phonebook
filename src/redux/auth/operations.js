import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const $authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
})

const setAuthHeader = token => {
  $authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const clearAuthHeader = () => {
  $authInstance.defaults.headers.common.Authorization = '';
}

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (formData, thunkAPI) => {
    try {
      const response = await $authInstance.post('/users/signup', formData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (formData, thunkAPI) => {
    try {
      const response = await $authInstance.post('/users/login', formData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, thunkAPI) => {
    try {
      await $authInstance.post('/users/logout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) return thunkAPI.rejectWithValue("You don't have a token!");
    try {
      setAuthHeader(token);
      const response = await $authInstance.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);