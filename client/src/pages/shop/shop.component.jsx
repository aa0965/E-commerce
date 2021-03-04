import React ,{lazy,Suspense} from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
// C:\Users\Anshu\Desktop\Node\React\crwn-clothing\src
import { Route } from 'react-router-dom';
// import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container.jsx';
// import CollectionPageContainer from '../collection/collection.container';
import Spinner from '../../components/spinner/spinner.component';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
const CollectionOverviewContainer = lazy(()=>import('../../components/collection-overview/collection-overview.container.jsx'));
const CollectionPageContainer = lazy(()=>import('../collection/collection.container'));
const ShopPage =({fetchCollectionsStart,match})=> {
  
 useEffect(()=>{
   fetchCollectionsStart();
 },[fetchCollectionsStart])
  //  throw Error;
    return (
      <div className='shop-page'>
        <Suspense fallback={<Spinner/>}>
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
        </Suspense>
      </div>
    );
  }




const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart:() => dispatch(fetchCollectionsStart())
});

export default connect(null,mapDispatchToProps)(ShopPage);