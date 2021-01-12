import React, { Component } from 'react'

class FirstComponent extends Component {
    render() {
        return (
            <div>
                <h1>My very first Component</h1>
            </div>
        )
    }
}


class SecondComponent extends Component {
    render() {
        return (
            <div>
                <h2>My second component</h2>
            </div>
        )
    }
}

class NamedComponent extends Component {
    render() {
        return (
            <div> 
                <h1>Part 1</h1>  
                <FirstComponent/>
                <SecondComponent/>
                <p>My name is + {this.props.name}</p>
            </div>
        )
    }
}
NamedComponent.defaultProps = {
    name: "Herbert"
}
export default NamedComponent