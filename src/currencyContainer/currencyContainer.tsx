import React, { useEffect } from 'react';
import s from './currencyContainer.module.css'
import CurrencyRow from "./currencyRow";
import { useDispatch } from "react-redux";
import {
    CurrencyState,
    DataType,
    onChangeAmount1AC,
    onChangeRateSelected1AC,
    onChangeSelected2AC,
    onChangeAmount2AC, setIsBuyingAC
} from "../store/CurrencyReducers";


type CurrencyContainerPropsType = {
    listCurrency: DataType[],
    stateData: CurrencyState
}

function CurrencyContainer({ listCurrency, stateData }: CurrencyContainerPropsType) {
    const dispatch = useDispatch()

    const format = (number: number) => {
        return number.toFixed(4)
    }
    const onChangeAmountFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeAmount1AC(Number(e.currentTarget.value)));
        dispatch(setIsBuyingAC(true))

    }
    const onChangeAmountTo = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeAmount2AC(Number(e.currentTarget.value)))
        dispatch(setIsBuyingAC(false))
    }
    const selectedCurrencyFrom = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(onChangeRateSelected1AC(Number(e.currentTarget.value)))
        dispatch(setIsBuyingAC(true))

    }
    const selectedCurrencyTo = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(onChangeSelected2AC(Number(e.currentTarget.value)))
        dispatch(setIsBuyingAC(false))
    }

    useEffect(() => {
        if (stateData.isBuying) {
            const calculateValue1 = Number(format((stateData.amount1 * stateData.rateCurrencyFrom) / stateData.rateCurrencyTo))
            dispatch(onChangeAmount2AC(calculateValue1))
        } else {
            const calculateValue2 = Number(format((stateData.amount2 * stateData.rateCurrencyTo) / stateData.rateCurrencyFrom))
            dispatch(onChangeAmount1AC(calculateValue2))
        }
    }, [stateData.amount1, stateData.amount2, stateData.rateCurrencyTo, stateData.rateCurrencyFrom])

    return (
        <div className={s.currency}>
            <div className={s.title}><h2>Міняю</h2></div>
            <CurrencyRow
                listCurrency={listCurrency}
                onChangeAmount={onChangeAmountFrom}
                onChangeSelect={selectedCurrencyFrom}
                amount={stateData.amount1}
                currency={stateData.rateCurrencyFrom}
            />
            <div>=</div>
            <div><h2>Отримую</h2></div>
            <CurrencyRow
                listCurrency={listCurrency}
                onChangeAmount={onChangeAmountTo}
                onChangeSelect={selectedCurrencyTo}
                amount={stateData.amount2}
                currency={stateData.rateCurrencyTo}
            />
        </div>
    );
}

export default CurrencyContainer;

