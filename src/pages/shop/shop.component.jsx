import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionContainer from '../collection/collection.container'

import { connect } from 'react-redux'
import { fetchCollectionsAsync } from '../../redux/shop/shop.actions'

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsAsync } = this.props
    fetchCollectionsAsync()
  }
  render() {
    const { match } = this.props
    return (
      <Switch>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </Switch>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync()),
})

export default connect(
  null,
  mapDispatchToProps
)(ShopPage)
