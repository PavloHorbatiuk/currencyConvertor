import {Dispatch} from "redux";
import {currencyAPI} from "../api/api";

enum ACTIONS_TYPE {
    SET_AMOUNT_IN_1_INPUT_CURRENCY = 'SET/AMOUNT/IN/1/INPUT',
    SET_VALUE_FROM_2_SELECT = "SET/VALUE/FROM/2/SELECT",
    SET_VALUE_FROM_1_SELECT = "SET/VALUE/FROM/1/SELECT",
    SET_ON_CHANGE_FROM_1_INPUT = "SET/VALUE/FROM/1/INPUT",
    SET_DATA_FROM_API = "SET/DATA/FROM/API",
    SET_VALUE_FROM_2_INPUT = "SET/VALUE/FROM/2/INPUT"
}

export type DataType = {
    r030: number,
    txt: string,
    rate: number,
    cc: string,
    exchangeDate: string
}
export type CurrencyState = {
    allCurrency: Array<DataType>
    amount1: number;
    amount2: number;
    rateCurrencyFrom: number
    rateCurrencyTo: number
    isBuying: boolean,
    isLoaded: boolean
};

const initialState: CurrencyState = {
    allCurrency: [],
    amount1: 1,
    amount2: 1,
    rateCurrencyFrom: 1,
    rateCurrencyTo: 1,
    isBuying: true,
    isLoaded: false
}


export const currencyReducer = (state: CurrencyState = initialState, action: ActionsType): CurrencyState => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_AMOUNT_IN_1_INPUT_CURRENCY:
            return {
                ...state, isBuying: action.payload
            }
        case ACTIONS_TYPE.SET_VALUE_FROM_2_SELECT:
            return {
                ...state, ...{rateCurrencyTo: action.payload}
            }
        case ACTIONS_TYPE.SET_VALUE_FROM_1_SELECT:
            return {
                ...state, ...{rateCurrencyFrom: action.payload}
            }
        case ACTIONS_TYPE.SET_VALUE_FROM_2_INPUT:
            return {
                ...state, amount2: action.payload
            }
        case ACTIONS_TYPE.SET_ON_CHANGE_FROM_1_INPUT:
            return {
                ...state, amount1: action.payload
            }
        case ACTIONS_TYPE.SET_DATA_FROM_API:
            return {
                ...state,
                allCurrency: action.currencys,
                rateCurrencyFrom: action.currencys[18].rate,
                rateCurrencyTo: action.currencys[18].rate,
                isLoaded: true
            }
        default:
            return state;
    }
};

export const setIsBuyingAC = (setIsBuying: boolean) => ({
    type: ACTIONS_TYPE.SET_AMOUNT_IN_1_INPUT_CURRENCY,
    payload: setIsBuying
} as const)
export const setCurrencyRatesAC = (currencys: Array<DataType>) => ({
    type: ACTIONS_TYPE.SET_DATA_FROM_API,
    currencys
} as const)
export const onChangeAmount1AC = (amount: number) => ({
    type: ACTIONS_TYPE.SET_ON_CHANGE_FROM_1_INPUT,
    payload: amount
} as const)
export const onChangeAmount2AC = (amount: number) => ({
    type: ACTIONS_TYPE.SET_VALUE_FROM_2_INPUT,
    payload: amount
} as const)
export const onChangeRateSelected1AC = (rate: number) => ({
    type: ACTIONS_TYPE.SET_VALUE_FROM_1_SELECT,
    payload: rate
} as const)
export const onChangeSelected2AC = (rate: number) => ({
    type: ACTIONS_TYPE.SET_VALUE_FROM_2_SELECT,
    payload: rate
} as const)

export const getCurrency = () => {
    return (dispatch: Dispatch) => {
        currencyAPI.getCourseCurrency()
            .then(res => {
                dispatch(setCurrencyRatesAC(res.data))
            })
            .catch(error => {
                alert(error)
            })
    }
}

export type setCurrencyACType = ReturnType<typeof setCurrencyRatesAC>;
export type onChangeAmountACType = ReturnType<typeof onChangeAmount1AC>;
export type onChangeToAmountACType = ReturnType<typeof onChangeAmount2AC>;
export type onChangeSelectedFromACType = ReturnType<typeof onChangeRateSelected1AC>;
export type onChangeSelectedTomACType = ReturnType<typeof onChangeSelected2AC>;
export type setAmountInFromAmountCurrencyACType = ReturnType<typeof setIsBuyingAC>;
export type ActionsType = setCurrencyACType
    | onChangeAmountACType
    | onChangeToAmountACType
    | onChangeSelectedFromACType
    | onChangeSelectedTomACType
    | setAmountInFromAmountCurrencyACType