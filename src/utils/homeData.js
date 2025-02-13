export const DUMMY_STORIES = [
    { id: '1', username: 'Vous', avatar: require('../../assets/fredel.png'), hasStory: false },
    { id: '2', username: 'Pascal', avatar: require('../../assets/setup.png'), hasStory: true },
    { id: '3', username: 'Boris', avatar: require('../../assets/jjk.png'), hasStory: true },
    { id: '4', username: 'Castro', avatar: require('../../assets/bl.png'), hasStory: true },
    { id: '5', username: 'Bernard', avatar: require('../../assets/sl.png'), hasStory: true },
    { id: '6', username: 'Jules', avatar: require('../../assets/lambo.png'), hasStory: true },
];

export const DUMMY_POSTS = [
    {
        id: '1',
        username: 'Fredel M.',
        avatar: require('../../assets/fredel.png'),
        content: 'Superbe journée à la plage ! ☀️🌊 #Vacances',
        image: require('../../assets/plage.png'),
        likes: 124,
        comments: 15,
        timeAgo: '2h',
    },
    {
        id: '2',
        username: 'Boris ADONON',
        avatar: require('../../assets/boris.png'),
        content: 'Nouveau projet en cours... Restez connectés ! 💻✨',
        likes: 89,
        comments: 8,
        timeAgo: '4h',
    },
    {
        id: '3',
        username: 'ATCHO Iovann',
        avatar: require('../../assets/iovann.png'),
        content: 'Le code, ma passion !  🫶❤️',
        image: require('../../assets/setup.png'),
        likes: 99,
        comments: 12,
        timeAgo: '6h',
    },
];
