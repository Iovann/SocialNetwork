export const DUMMY_NOTIFICATIONS = [
    {
        id: '1',
        type: 'like',
        username: 'Fredel M.',
        avatar: require('../../assets/fredel.png'),
        content: 'a aimé votre publication',
        timeAgo: 'Il y a 5min',
        read: false,
    },
    {
        id: '2',
        type: 'comment',
        username: 'Boris A.',
        avatar: require('../../assets/boris.png'),
        content: 'a commenté votre photo',
        timeAgo: 'Il y a 15min',
        read: false,
    },
    {
        id: '3',
        type: 'follow',
        username: 'Iovann A.',
        avatar: require('../../assets/iovann.png'),
        content: 'a commencé à vous suivre',
        timeAgo: 'Il y a 1h',
        read: true,
    },
];


export const NOTIFICATION_TYPES = {
    LIKE: 'like',
    COMMENT: 'comment',
    FOLLOW: 'follow',
};