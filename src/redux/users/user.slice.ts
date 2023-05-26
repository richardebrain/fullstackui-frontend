import { UserType } from "@/utilities/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type UserState = {
  user: UserType | null;
};
const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser,removeUser } = userSlice.actions;

export default userSlice.reducer;
