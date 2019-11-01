import React, { Component } from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Login from '../Pages/Login/login'
import Register from '../Pages/register/register'
import ShopList from '../Pages/shopList/shopList'

class Router extends Component {
  render () {
    return (
      <div>
        <HashRouter >
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/shop-list" component={ShopList}></Route>
          </Switch>
        </HashRouter >
      </div>
    )
  }
}

export default Router
