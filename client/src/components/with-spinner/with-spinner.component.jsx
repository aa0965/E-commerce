import React from 'react';
import Spinner from '../spinner/spinner.component';
const WithSpinner = WrappedComponent => ({loading,...otherProps}) => (
      loading ? <Spinner/> : <WrappedComponent {...otherProps}/>
    )



export default WithSpinner;