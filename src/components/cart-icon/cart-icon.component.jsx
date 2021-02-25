import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';

import './cart-icon.styles.scss';
import { toggleCheckout } from '../../redux/cart/cart.actions';
const CartIcon = ({toggleCheckout}) => {
    return(
        <div className='cart-icon' 
        onClick={toggleCheckout}
        >
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
      </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCheckout:() =>dispatch(toggleCheckout())
})

export default connect(null,mapDispatchToProps)(CartIcon);