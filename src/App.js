import React from 'react';
import './App.css';

// component imports
import Header from './components/header/header';
import MainSidebar from './components/main-sidebar/main-sidebar';

// font-awesome import
import {library} from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAlignRight, faAlignLeft } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faAlignRight, faAlignLeft)


function App() {
  const listItemsForSidebar = [
    'Categories',
    'About Us',
    'Contact Us'
  ]
  return (
    <div className="App">
      <Header />
      <MainSidebar sidebarItems={listItemsForSidebar}/>
    </div>
  );
}

export default App;
