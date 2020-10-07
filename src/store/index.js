import {combineReducers, createStore} from "redux";
import NavReducer from "./reducers/NavReducer";
import TvSeriesName from "./reducers/TvSeriesReducer";

const reducers=combineReducers({
    NavReducer:NavReducer,
    TvSeriesName:TvSeriesName
})

const store=createStore(reducers);

export default store;