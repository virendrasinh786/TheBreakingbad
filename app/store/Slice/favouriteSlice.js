import { createSlice } from '@reduxjs/toolkit';

const favourites = createSlice({
  name: 'favourite',
  initialState: {
    loading: false,
    data: [],
  },
  reducers: {
    toggleFavourite(state, action) {
      let favourite = state.data;
      if (favourite.some(favourite => favourite?.char_id == action?.payload?.id)) {
        favourite = favourite.filter(favourite => favourite?.char_id !== action?.payload?.id)
      } else {
        state.data = favourite.push(action?.payload?.favourite);
      }
      if (favourite) {
        state.data = favourite;
      } else {
        state.data = [];
      }
    }
  },
});

export const { toggleFavourite } = favourites.actions;

export default favourites;