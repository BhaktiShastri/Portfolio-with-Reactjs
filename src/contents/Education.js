import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="MS in Computer Science" where="Pace University, New York" from="2019" to="Present.." />
                <Widecard title="PG Diploma in Computer Applications" where="Saurashtra University" from="July 2017" to="May 2018" />
            
                
            </div>
        )
    }
}
export default Education