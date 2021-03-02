import React from 'react';
import {SpinnerContainer,SpinnerOverlay} from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({loading,...otherProps}) => {
    const Spinner = (
      loading ? <SpinnerOverlay><SpinnerContainer/></SpinnerOverlay> : <WrappedComponent {...otherProps}/>
    )
    return Spinner;
} 

export default WithSpinner;