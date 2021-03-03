import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { toggleCheckout } from '../../redux/cart/cart.actions';

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './cart-dropdown.styles';
const CartDropdown = ({cartItems,history,dispatch}) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.map(item => (
          <CartItem key={item.id} item={item}/>
      ))}
     </CartItemsContainer>
    <CartDropdownButton onClick={()=>{
        history.push('/checkout');
        dispatch(toggleCheckout());
        }} >GO TO CHECKOUT </CartDropdownButton>
        </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));