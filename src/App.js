import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Navbar } from 'components'
import { AboutPage, AccountPage, BillingPage } from 'pages'

const SubscriptionBrowserPage = () => {return(<p>browse</p>)}

class App extends Component {
  render() {
    return (
      <div className='app-wrapper'>
        <Navbar />
        <div>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={AccountPage}/>
            <Route exact path={`${process.env.PUBLIC_URL}/account`} component={AccountPage}/>
            <Route path={`${process.env.PUBLIC_URL}/browse`}component={SubscriptionBrowserPage}/>
            <Route path={`${process.env.PUBLIC_URL}/billing`} component={BillingPage}/>
            <Route path={`${process.env.PUBLIC_URL}/about`} component={AboutPage}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
