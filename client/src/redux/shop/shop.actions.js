import ShopActionTypes from './shop.types';
import {convertCollectionsSnapshotToMap,firestore} from '../../firebase/firebase.utils'; 
export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSucces = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap
  });

  
export const fetchCollectionsFailure = (err) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload:err
  });

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        collectionRef.get().then((snapshot) => {
          const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
          // console.log(collectionsMap)
        //   updateCollections(collectionsMap);
        //   this.setState({loading:false});
        dispatch(fetchCollectionsSucces(collectionsMap))
        }).catch(err => dispatch(fetchCollectionsFailure(err.message)));

    }
}