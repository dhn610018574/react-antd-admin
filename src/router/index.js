import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BaseLayout from '../components/BaseLayout'
import Login from '../views/Login'
import Home from '../views/Home'
import Error404 from '../components/Error404'
function Main() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <BaseLayout>
          <Route exact path="/home" component={Home}></Route>
          <Route component={Error404}></Route>
        </BaseLayout>
        <Route component={Error404}></Route>
      </Switch>
    </Router>
  )
}
export default Main