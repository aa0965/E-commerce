import React from 'react';
// C:\Users\Anshu\Desktop\Node\React\crwn-clothing\src
import { Route } from 'react-router-dom';

import CollectionPage from '../collection/ollection.component';
import CollectionOverview from '../../components/collection-overvirew/collection-overview.component.jsx';


const ShopPage = ({match}) =>  (
      <div className='shop-page'>
<Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />      </div>
    );
  



export default ShopPage;