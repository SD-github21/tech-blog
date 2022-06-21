const router = require('express').Router();
const { Post, User } = require('../../models');
const { route } = require('./user-routes');

// get all users
router.get('/', (req, res) => {
    console.log('====================');
    Post.findAll({
        attributes: ['id', 'title', 'contents', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
     .then(dbPostData => res.json(dbPostData))
     .catch(err => {
        console.log(err);
        res.status(500).json(err);
     });
});

module.exports = router;