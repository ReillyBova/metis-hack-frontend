import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Navbar } from './components'

const AccountPage = () => {return(<p>accounts</p>)}
const SubscriptionBrowserPage = () => {return(<p>browse</p>)}
const BillingPage = () => {return(<p>billing</p>)}
const AboutPage = () => {return(<p>about</p>)}

class App extends Component {
  render() {
    return (
      <div className='app-wrapper'>
        <Navbar />
        <div>
          <Switch>
            <Route exact path='/' component={AccountPage}/>
            <Route exact path='/account' component={AccountPage}/>
            <Route path='/browse' component={SubscriptionBrowserPage}/>
            <Route path='/billing' component={BillingPage}/>
            <Route path='/about' component={AboutPage}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
