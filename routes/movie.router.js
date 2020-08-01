const express = require('express');
const router = express.router();
const pool = require('../modules/pool')

//get for movies
router.get('/', (req, res) => {
    const queryString = `SELECT * FROM movies`;

]   pool.query()
    .then((responce) => {
        res.send(response.rows);
    })
    .catch((err) => {
        console.log();
        res.sendStatus(500);
    })

});



module.exports = router;