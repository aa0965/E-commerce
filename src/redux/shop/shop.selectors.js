import { createSelector } from 'reselect';

export const selectShop = state => state.shop;

export const selectShopData = createSelector(
    [selectShop],
    shop=>shop.SHOP_DATA
)

export const selectCollectionsForPreview = createSelector(
    [selectShopData],
    SHOP_DATA => Object.keys(SHOP_DATA).map(key => SHOP_DATA[key])
  );

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopData],
    SHOP_DATA => SHOP_DATA[collectionUrlParam]
  );