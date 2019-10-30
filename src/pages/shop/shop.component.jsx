import React from 'react'
import './shop.styles.scss'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import { selectShopCollection } from '../../redux/shop/shop.selectors'
import { createStructuredSelector } from 'reselect'

import { connect } from 'react-redux'

const ShopPage = ({ collection }) => (
  <div>
    {collection.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collection: selectShopCollection,
})

export default connect(mapStateToProps)(ShopPage)
