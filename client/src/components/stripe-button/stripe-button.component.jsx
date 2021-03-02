import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import StipeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({price}) => {
    const realPrice = price*100;
    // console.log(realPrice);
    const publishableKey = 'pk_test_8jyODAcm7YdT3d4vTDAhOO4x';
    
    const onToken = token => {
        axios.post('/payment', {
            amount:realPrice,
            token
          })
          .then(function (response) {
            console.log('Payment Succesful');
          })
          .catch(function (error) {
            console.log('Payment unsuccesful');
          });
    }
    
 return(
     <StripeCheckout
     name="CRWN Clothing Ltd."
     description={`Your total is ${price}`}
     image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
     billingAddress
     shippingAddress
     label='Pay Now'
     amount={realPrice}
     currency="INR"
     panelLabel='Pay Now'
     token={onToken}
     stripeKey={publishableKey}
     />
 ) 
}
export default StripeButton;