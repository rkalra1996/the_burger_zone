import React, {Component} from 'react';
import './main-sidebar.css';

// fa
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MainSidebar extends Component {

    handleSidebarToggle = () => {
        // check if the sidebar is already open or not
        let sidebarEl = document.getElementsByClassName('main-sidebar-wrapper')[0];
        console.log(sidebarEl.style.transform);
        if (sidebarEl.style.transform === '' || sidebarEl.style.transform === 'translateX(-100%)') {
            console.log('open');
            sidebarEl.style.transform = 'translateX(0)'
        } else {
            console.log('close');
            sidebarEl.style.transform = 'translateX(-100%)';
        }
    }

    render() {
        return ( 
        <div className = "main-sidebar-wrapper" >
            <div className="sidebar-toggle-container" onClick={this.handleSidebarToggle}>
            <FontAwesomeIcon icon="align-left" className="sidebar-toggle-btn"/>
            </div>
          <div className = "main-sidebar-container">
              {
                  this.props.sidebarItems.map((listItem,index) => {
                    return (
                        <div className="item" key={index}>
                            <h3 className="text">{listItem}</h3>
                        </div>
                    )
                  })
              }
          </div> 
        </div>
        );
    }
}

export default MainSidebar;