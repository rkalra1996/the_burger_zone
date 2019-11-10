import React, {Component} from 'react';
import './main-sidebar.css';

class MainSidebar extends Component {

    handleSidebarToggle = () => { 
        console.log('sidebar');
    }

    render() {
        return ( 
        <div className = "main-sidbar-wrapper" >
          <div className = "main-sidebar-container">
            <div className="item">
                This is list item
            </div>
          </div> 
        </div>
        );
    }
}

export default MainSidebar;