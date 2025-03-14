
export const userData = [
    {
        username: 'West',
        email: 'WestWood@email.com'
    },

    {
        username: 'WhatWhat',
        email: 'WhatWhat@email.com'
    },

    {
        username: 'peaceandlove',
        email: 'peaceandlove@email.com'
    }
];


const reactions = [
    {
        reactionBody: 'Unfortunate!',
        username: userData[1].username,
    },

    {
        reactionBody: 'Not Good! Next time!',
        username: userData[0].username,
    }, 

    {
        reactionBody: 'Nope....',
        username: userData[1].username,
    }
]

export const thoughtData = [
    {
        thoughtText: `Addictions are not good`,
        username: userData[2].username,
        reactions: [reactions[0], reactions[1]]
    },

    {
        thoughtText: `Be the guiding light`,
        username: userData[0].username,
        reactions: [reactions[2]]
    }
]