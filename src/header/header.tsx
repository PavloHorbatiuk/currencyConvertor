import React from 'react';
import s from './header.module.css'
import { DataType } from "../store/CurrencyReducers";
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
            <div className={s.container}>
                <div className={s.tititle}><h1>ВАЛЮТНИЙ КАЛЬКУЛЯТОР</h1></div>
                <ul className={s.headMenu}>
                    <li><img className={s.picture1} src={usdPicture} alt='usd' /><span>{`USD = ${props.findUsd?.rate} грн.`}</span></li>
                    <li><img className={s.picture2} src={rubPicture} alt='rub' /><span>{`RUB = ${props.findRub?.rate} грн.`}</span></li>
                    <li><img className={s.picture3} src={euPicture} alt='eur' /><span>{`EUR = ${props.findEUR?.rate}  грн.`}</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;









{/* <div className={s.titleUsd}>
<h4><img className={s.picture1} src={usdPicture} alt='usd' />{`USD = ${props.findUsd?.rate}`}</h4></div>
<div className={s.titleRub}>
<h4><img className={s.picture2} src={rubPicture} alt='rub' />{`RUB = ${props.findRub?.rate}`}</h4></div>
<div className={s.titleEur}>
<h4><img className={s.picture3} src={euPicture} alt='eur' />{`EUR = ${props.findEUR?.rate}`}</h4></div> */}