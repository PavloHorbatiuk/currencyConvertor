import {currencyReducer} from "./CurrencyReducers";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {TypedUseSelectorHook, useSelector} from "react-redux";


const reducers = combineReducers({
    currency: currencyReducer
})
export type IGlobalState = ReturnType<typeof reducers>;
export const useAppSelector: TypedUseSelectorHook<IGlobalState> = useSelector
export const store = createStore(reducers, applyMiddleware(thunk));