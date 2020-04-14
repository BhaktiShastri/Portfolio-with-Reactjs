import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/pic1.jpg';

import Social from '../components/Social'
class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic"></img>
                
                <ReactTypingEffect className="typingeffect" text={['I am Bhakti Shastri.', 'I am a Graduate student and a Web Developer.']} speed={120} eraseDelay={700} />
                <Social />
            </div>
        )
    }
}
export default Home;