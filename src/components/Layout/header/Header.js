import React from 'react'
import classes from './Header.module.css'
import food from '../../../assets/food.jpg'
import CartButton from '../cartButton/CartButton'

function Header(props) {
       return (
              <>
                     <header className = {classes.header}>
                            <h1>FingerLickking By Gastt...</h1>
                            <CartButton/>
                     </header>
                     <div className = {classes['main-image']}>
                            <img src={food} alt="m" />
                     </div>
              </>
       )
}

export default Header
