import { combineReducers } from 'redux';
import favourites from './Slice/favouriteSlice';


const rootReducer = combineReducers({
  favourites: favourites.reducer,
});

export default rootReducer;
