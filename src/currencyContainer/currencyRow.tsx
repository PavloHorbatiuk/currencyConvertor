import React, {ChangeEvent} from 'react';
import s from "./currencyRow.module.css"
import {DataType} from "../store/CurrencyReducers";

type CurrencyContainerType = {
    listCurrency: Array<DataType>
    onChangeAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;
    amount: number | undefined
    onChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void
    currency: number
}

export const CurrencyContainer = React.memo(function (props: CurrencyContainerType) {

    const filteredCurrency = props.listCurrency.filter(f => f.r030 === 840 || f.r030 === 643 || f.r030 === 978
        || f.r030 === 933
        || f.r030 === 826)
    return (
        <div className={s.styleRow}>
            <select className={s.select} value={props.currency} onChange={props.onChangeSelect}>
                {filteredCurrency.map((m => (<option key={m.r030} value={m.rate}>{m.txt}</option>)))}
            </select>
            <input type="number"
                   className={s.inputs}
                   onChange={props.onChangeAmount}
                   value={props.amount}
            />
        </div>
    );
})

export default CurrencyContainer;