import React from 'react'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import { selectShopCollectionsPreview } from '../../redux/shop/shop.selectors'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { CollectionsOverviewContainer } from './collections-overview.styles'
const CollectionsOverview = ({ collection }) => (
  <CollectionsOverviewContainer>
    {collection.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
  collection: selectShopCollectionsPreview,
})
export default connect(mapStateToProps)(CollectionsOverview)
