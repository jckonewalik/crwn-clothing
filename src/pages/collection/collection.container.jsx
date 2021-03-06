import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import { selectCollectionIsLoaded } from '../../redux/shop/shop.selectors'
import WithSpinner from '../../components/with-spinner/with-spinner.components'

import CollectionPage from './collection.component'

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectCollectionIsLoaded(state),
})

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage)

export default CollectionContainer
