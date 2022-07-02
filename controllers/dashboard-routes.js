const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment} = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        where: {
            // use the ID from the session.
            user_id: req.session.user_id
        },
        order: [['created_at', 'ASC']],
        attributes: [
            'id', 
            'title', 
            'contents', 
            'created_at'],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { 
            posts,
            loggedIn: req.session.loggedIn 
        });
    })
    .catch(err=> {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/new-post', (req, res) => {
    res.render('new-post', { loggedIn: true })
});


// create a post
// router.post('/new-post', (req, res) => {
//     Post.create({
//         title: req.body.title,
//         contents: req.body.contents,
//         user_id: req.body.user_id
//     })
//      .then(dbPostData => 
//         res.json(dbPostData),
//         res.render('new-post', { 
//             posts,
//             loggedIn: req.session.loggedIn 
//         }))
//      .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//      });
// });



module.exports = router;

