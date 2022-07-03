const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment} = require('../models');
const withAuth = require('../utils/auth');

// get a particular user's posts
router.get('/', withAuth, (req, res) => {
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

// Render a new post page
router.get('/new-post', withAuth, (req, res) => {
    res.render('new-post', { loggedIn: true })
});

// edit a post
router.get('/edit/:id', withAuth, (req,res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
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
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        const post = dbPostData.get({ plain: true });
        res.render('edit-post', {
            post,
            loggedIn: true});
     })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});


module.exports = router;

