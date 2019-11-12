import React, {Component} from 'react';
import './home.css';

import homepageVideo from './../../assets/videos/food_adventure.mp4';

class Home extends Component {

    scrollHandler = (e) => {
        console.log('scroll clicked');
    }
    render(){
        return (
            <div className="home-container">
                <div className="video-wrapper">
                <video id="videoEl" src={homepageVideo} type="video/mp4" alt="Main Video" loop autoPlay={true} muted={true} height="50"/>
                </div>
                <div className="scrollDownWrapper">
                    <h3 className="scrollText" onClick={this.scrollHandler}>Click To Go Down</h3>
                </div>
            </div>
        )
    }
}

export default Home;