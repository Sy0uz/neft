import React from 'react'
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.body}>
        <h1 className={s.logo}>Neft</h1>
    </header>
  )
}

export default Header