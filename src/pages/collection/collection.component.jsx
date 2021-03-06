import React from 'react'
import './collection.styles.scss'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component'

const CollectionPage = ({ collection }) => {
  const { title, items } = collection
  return (
    <div className="collection-page">
      <span className="title">{title}</span>
      <div className="items">
        {items.map(collectionItem => (
          <CollectionItem key={collectionItem.id} item={collectionItem} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage)
