import React from 'react'
import './App.css'
import HomePage from './pages/homepage/homepage.component'
import Header from './components/header/header.component'
import { Switch, Route, Redirect } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'

class App extends React.Component {
  unsubscriptionAuthStateChange = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscriptionAuthStateChange = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscriptionAuthStateChange()
  }

  render() {
    const { currentUser } = this.props
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />)}
          />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user)),
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
