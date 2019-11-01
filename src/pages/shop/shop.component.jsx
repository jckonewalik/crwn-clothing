import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './shop.styles.scss'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
const ShopPage = ({ match }) => (
  <Switch>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
  </Switch>
)

export default ShopPage
