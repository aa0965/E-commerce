import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component.jsx';

const CollectionOverview = ({shopData}) =>  (
    <div className='shop-page'>
      {shopData.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );



  const mapStateToProps = createStructuredSelector({
    shopData:selectCollectionsForPreview
  })
  
  export default connect(mapStateToProps)(CollectionOverview);
