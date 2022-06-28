const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage', {
        id: 4,
        title: 'This is my first awesome post',
        contents: 'This is my first awesome post! I am user ID 4 and I just created my first post on this website!',
        created_at: '2022-06-26T04:31:48.000Z',
        comments: [],
        user: {
            username: 'test4'
        }
    });
});

module.exports = router;