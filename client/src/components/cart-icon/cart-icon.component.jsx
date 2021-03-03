import React from 'react';
import {connect} from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles';import { toggleCheckout } from '../../redux/cart/cart.actions';
const CartIcon = ({toggleCheckout,itemCount}) => {
    return(
      <CartContainer 
        onClick={toggleCheckout}
        >
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
      </CartContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCheckout:() =>dispatch(toggleCheckout())
});
const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
  });

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);