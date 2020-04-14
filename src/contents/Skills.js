import React, { Component } from 'react'
class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'myskills': ['HTML', 'CSS', 'JS', 'PHP', 'REACT JS', 'NODE JS', 'EXPRESS', 'MONGODB', 'ANGULAR JS',]
        };
    }
    render() {
        return (
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <h4>(Specifically in Devlopment)</h4>
                <ul>
                    {this.state.myskills.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default Skills