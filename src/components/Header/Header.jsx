import React from "react";
import s from './header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <p className={s.header__logo}>А</p>
            <p className={s.header__title}>Тестовая социальная сеть</p>
        </header>
    )
}

export default Header