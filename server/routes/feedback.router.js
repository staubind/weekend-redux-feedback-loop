const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// set up endpoints

// POST
router.post('/', (req, res) => {
    console.log('req.body is: ', req.body);
    let sqlParams = Object.values(req.body);
    let sqlQuery = `
        INSERT INTO "feedback"
        ("feeling", "understanding", "support", "comments")
        VALUES
        ($1, $2, $3, $4);
        `;
    pool.query(sqlQuery, sqlParams).then(dbResponse => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('Failed to post to DB: ', error);
        res.sendStatus(500);
    });
})

module.exports = router;