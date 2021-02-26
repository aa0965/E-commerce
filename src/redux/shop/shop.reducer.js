import SHOPDATA from './shop.data';

const INITIAL_STATE={
    SHOP_DATA:SHOPDATA
}
const shopReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
export default shopReducer;