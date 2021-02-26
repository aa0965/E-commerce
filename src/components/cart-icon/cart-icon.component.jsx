import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';
import { toggleCheckout } from '../../redux/cart/cart.actions';
const CartIcon = ({toggleCheckout,itemCount}) => {
    return(
        <div className='cart-icon' 
        onClick={toggleCheckout}
        >
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
      </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCheckout:() =>dispatch(toggleCheckout())
});
const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
  });

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);