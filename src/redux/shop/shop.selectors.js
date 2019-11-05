import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectShopCollectionsPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  )

export const selectIsFetchingCollection = createSelector(
  [selectShop],
  shop => shop.isFetching
)

export const selectCollectionIsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
)
