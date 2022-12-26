import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Actions
export const userAction = createAsyncThunk(
  "userAction",
  async ({ user, sessionType }) => {
    const response = await axios.post(`api/v1/user/${sessionType}`, user);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: JSON.parse(localStorage.getItem("user")) || null,
    isError: null,
  },
  extraReducers: (builder) => {
    builder.addCase(userAction.pending, (state, action) => {
      state.isLoading = true;
      state.data = null;
      state.isError = null;
    });
    builder.addCase(userAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = null;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    });
    builder.addCase(userAction.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.isError = action.payload;
    });
  },
});

export default userSlice.reducer;
