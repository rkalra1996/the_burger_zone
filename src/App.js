import React from 'react';
import './App.css';

// component imports
import Header from './components/header/header';
import MainSidebar from './components/main-sidebar/main-sidebar';

// font-awesome import
import {library} from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAlignRight } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faAlignRight)


function App() {
  return (
    <div className="App">
      <Header />
      <MainSidebar/>
    </div>
  );
}

export default App;
