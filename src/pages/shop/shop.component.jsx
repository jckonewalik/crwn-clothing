import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'

import { connect } from 'react-redux'
import { fetchCollectionsAsync } from '../../redux/shop/shop.actions'

import { createStructuredSelector } from 'reselect'
import {
  selectIsFetchingCollection,
  selectCollectionIsLoaded,
} from '../../redux/shop/shop.selectors'

import WithSpinner from '../../components/with-spinner/with-spinner.components'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsAsync } = this.props
    fetchCollectionsAsync()
  }
  render() {
    const { match, isFetching, isLoaded } = this.props
    return (
      <Switch>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={props => <CollectionPageWithSpinner isLoading={!isLoaded} {...props} />}
        />
      </Switch>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync()),
})

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetchingCollection,
  isLoaded: selectCollectionIsLoaded,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage)
