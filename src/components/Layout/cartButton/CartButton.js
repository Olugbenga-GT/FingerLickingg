import React from 'react'
import CartIcon from '../../Cart/CartIcon';
import classes from './CartButton.module.css'

function CartButton(props) {
       return (
              <button className = {classes.button}>
                     <span className = {classes.icon}>
                            <CartIcon/>
                     </span>
                     <span>This Cartt</span>
                     <span className = {classes.badge}> 10 </span>
              </button>
       )
}

export default CartButton;
