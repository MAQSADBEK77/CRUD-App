import { createSlice } from "@reduxjs/toolkit";
import { UserList } from "./data/Data";
const userSlice = createSlice({
  name: "users",
  initialState: UserList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, image, email, phoneNumber, job, location, gender } =
        action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        uu.name = name;
        uu.image = image;
        uu.email = email;
        uu.phoneNumber = phoneNumber;
        uu.job = job;
        uu.location = location;
        uu.gender = gender;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        return state.filter((user) => user.id != id);
      }
    },
  },
});
export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
