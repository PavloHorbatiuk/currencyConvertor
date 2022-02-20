import React, {useEffect} from 'react';
import './App.css';
import Header from "./header/header";
import s from "./App.module.css"
import {useDispatch} from "react-redux";
import {useAppSelector} from "./store/state";
import CurrencyContainer from './currencyContainer/currencyContainer';
import {getCurrency} from "./store/CurrencyReducers";
import TableForCurrency from "./table/tableForCurrency";


function App() {
    const findCurrency = useAppSelector(state => state.currency.allCurrency)
    const stateData = useAppSelector(state => state.currency)
    const isLoaded = useAppSelector(state => state.currency.isLoaded)

    const findUsd = findCurrency.find(f => f.r030 === 840)
    const findRub = findCurrency.find(f => f.r030 === 643)
    const findEUR = findCurrency.find(f => f.r030 === 978)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrency())
    }, [])

    if (!isLoaded) return <div>loading...</div>

    return (
        <div className={s.mainBlock}>
            <div className={s.headerApp}>
                <Header findUsd={findUsd}
                        findRub={findRub}
                        findEUR={findEUR}/>
            </div>
            <div className={s.maineBlockExchange}>
                <div className={s.tableBlock}>
                    <TableForCurrency listCurrency={findCurrency}/>
                </div>
                <div className={s.blockExchange}>
                    <CurrencyContainer listCurrency={findCurrency} stateData={stateData}/>
                </div>
            </div>
        </div>
    );
}

export default App;
