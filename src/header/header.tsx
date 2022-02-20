import React from 'react';
import s from './header.module.css'
import {DataType} from "../store/CurrencyReducers";
import usdPicture from './currencyPicture/US.png'
import rubPicture from './currencyPicture/RU.png'
import euPicture from './currencyPicture/EU.png'


type HeaderType = {
    findUsd: DataType | undefined,
    findRub: DataType | undefined,
    findEUR: DataType | undefined,
}

function Header(props: HeaderType) {

    return (
        <div className={s.header}>
            <div className={s.headerTititle}><h3>ВАЛЮТНИЙ КАЛЬКУЛЯТОР</h3></div>
            <div className={s.maineTitle}>
                <div className={s.titleUsd}>
                    <h4><img className={s.picture1} src={usdPicture}/>{`USD = ${props.findUsd?.rate}`}</h4></div>
                <div className={s.titleRub}>
                    <h4><img className={s.picture2} src={rubPicture}/>{`RUB = ${props.findRub?.rate}`}</h4></div>
                <div className={s.titleEur}>
                    <h4><img className={s.picture3} src={euPicture}/>{`EUR = ${props.findEUR?.rate}`}</h4></div>
            </div>
        </div>
    )
}

export default Header;