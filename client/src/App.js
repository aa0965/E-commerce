import React,{lazy,Suspense} from 'react';
import {useEffect} from 'react';
import {Switch ,Route,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
// import CheckoutPage from './pages/checkout/checkout.component';
// import HomePage from './pages/homepage/homepage.component';
// import ShopPage from './pages/shop/shop.component';
// import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component.jsx';
import SignUp from './components/sign-up/sign-up.component.jsx';
import { auth,createUserProfile} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { GlobalStyle } from './global.styles';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
// import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollectionsForPreview, selectShopData } from './redux/shop/shop.selectors';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage= lazy(() => import ('./pages/shop/shop.component') );
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component') );
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
// const HomePage = lazy(() => );
const App=({checkUserSession,currentUser }) => {
  

  useEffect(() => {
    checkUserSession();
  },[checkUserSession])

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }
    return (
      <div>
        <GlobalStyle/>
        <Header  />
        <Switch>
          <ErrorBoundary>
          <Suspense fallback={<Spinner/>}>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path='/signin' 
           render={() =>
            currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUpPage />
            )
          } />
</Suspense>
</ErrorBoundary>
        </Switch>
      </div>
    );
  }


const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
  // collections:selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);