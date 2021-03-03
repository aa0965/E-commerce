import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {createStructuredSelector} from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { signOutFailure, signOutStart } from '../../redux/user/user.actions';
const Header = ({ currentUser,hidden,signOutStart }) => (
  <HeaderContainer>
    <LogoContainer  to='/'>
      <Logo className='logo' />
    </LogoContainer >
    <OptionsContainer>
      <OptionLink className='option' to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink className='option' to='/shop'>
        CONTACT
      </OptionLink>
      {currentUser ? (
        <div className='option' onClick={signOutStart}>
          SIGN OUT
        </div>
      ) : (
        <OptionLink className='option' to='/signin'>
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
     
    </OptionsContainer>
    {hidden ? null:<CartDropdown/>}
  </HeaderContainer>
);


const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
})

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);