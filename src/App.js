import React from 'react';
import './App.css';

// component imports
import Header from './components/header/header';
import MainSidebar from './components/main-sidebar/main-sidebar';
import Home from './components/home/home';
import Login from './components/login/login';
import Signup from './components/signup/signup';

// font-awesome import
import {library} from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAlignRight, faAlignLeft } from '@fortawesome/free-solid-svg-icons'

// react router
import {BrowserRouter, Route} from 'react-router-dom';

library.add(fab, faAlignRight, faAlignLeft)

function App() {
  const listItemsForSidebar = [
    'Categories',
    'About Us',
    'Contact Us'
  ]
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <MainSidebar sidebarItems={listItemsForSidebar}/>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </div>
    </BrowserRouter>
  );
}

export default App;
