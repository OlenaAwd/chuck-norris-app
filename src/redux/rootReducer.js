import { combineReducers } from "redux";
import jokeReducer from '../redux/joke';
import categoriesReducer from "../redux/categories";
import categoryReducer from "../redux/category";
import searchTextReducer from "../redux/searchText";

const rootReducer = combineReducers({
    joke: jokeReducer,
    categories: categoriesReducer,
    category: categoryReducer,
    searchText: searchTextReducer,
})

export default rootReducer;

