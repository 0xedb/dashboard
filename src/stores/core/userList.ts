import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserList {
  id: number;
  name: string;
  username: string;
  email: string;
  city: string;
}

export interface IData {
  sortAsc: boolean;
  data: UserList[];
  isLoading: boolean;
}

// remove single element
// console.log
const initialState: IData = {
  sortAsc: true,
  isLoading: false,
  data: [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      city: "Gwenborough",
    },
  ],
};

export const userListSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state) => {
      state.isLoading = true;
    },
    getUsersSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    getUsersFailure: (state) => {
      state.isLoading = false;
    },
    removeUser: (state, action) => {
      console.log("deleting..................", action);
      state.data = state.data.filter((el) => el.id !== action.payload);
    },
    setSortOrder: (state, action) => {
      state = {
        ...state,
        sortAsc: action.payload,
        data: state.data.sort((a, b) =>
          action.payload
            ? a.username.localeCompare(b.username)
            : b.username.localeCompare(a.username)
        ),
      };
    },
    // update store
    // remove
    // add
  },
});

export const {
  getUsers,
  getUsersFailure,
  getUsersSuccess,
  removeUser,
  setSortOrder,
} = userListSlice.actions;
export const userListReducer = userListSlice.reducer;
