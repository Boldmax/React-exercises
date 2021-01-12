import React, { Component } from 'react'

export default class Person extends Component {
    render() {
        const people = this.props.persons.map(item => {
            if (item.age > 21) {
                return (
                    <h3>{item.name} Have a drink</h3>
                )
            }else if (item.age < 21){
                return (
                    <h3>{item.name}, you must be 21!</h3>
                )
            }
        })
        return (
            <div>
                <h1>Part 3</h1>
                <p> Learn some information about this person</p>
                {people}
            </div>
        )
    }
}

Person.defaultProps = {
    persons: [
        {
            name: "William",
            age: 30
        },
        {
            name: "Becker",
            age: 45
        },
        {
            name: "Damilola",
            age: 20
        },
        {
            name: "Julius",
            age: 17
        }
    ]
}
