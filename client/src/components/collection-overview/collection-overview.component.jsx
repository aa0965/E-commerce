import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component.jsx';
import { CollectionsOverviewContainer } from './collection-overview.styles';

const CollectionOverview = ({shopData}) =>  (
    <CollectionsOverviewContainer>
      {shopData.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );



  const mapStateToProps = createStructuredSelector({
    shopData:selectCollectionsForPreview
  })
  
  export default connect(mapStateToProps)(CollectionOverview);
