import React, { Component } from 'react'

export default class Tweet extends Component {
    render() {
        const tweep = this.props.tweets.map(items => {
            return (
                <li key={items.id}>
                    <h2>{items.name}</h2>
                    <h2>@{items.userName}</h2>
                    <h3>{items.tweet}</h3>
                    <p>{items.date}</p>
                </li>
            );
        })
        return (
            <div>
                <h1>Part 2</h1>
                {tweep}
                </div>
        )
    }
}

Tweet.defaultProps = {
    tweets: [
        {
            id: 1,
            userName: "JunglePie",
            name: "Michael Heleb",
            date: "02-01-2021",
            tweet: "I think the sky is falling around me here. is it thesame in your neighbourhood?"
        },
        {
            id: 2,
            userName: "BigJoe",
            name: "Dwayne Johnson",
            date: "17-12-2020",
            tweet: "Anyone care for some hamburger?"
        },
        {
            id: 3,
            userName: "Jose",
            name: "Jose Mourinho",
            date: "12-01-2021",
            tweet: "Who told him that tottenham would be interested in signing him?"
        },
        {
            id: 4,
            userName: "KamalaHarris",
            name: "Kamala Harris",
            date: "12-01-2021",
            tweet: `In eight days, we'll show every child in America regardless of their color or gender that there are no limits to who can lead and hold positions of power in our country.`
        }
    ]
}
