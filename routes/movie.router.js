const express = require('express');
const router = express.Router();
const pool = require('../server/modules/pool');

//get for movies
router.get('/', (req, res) => {
    const queryString = `SELECT * FROM movies`;

   pool.query(queryString)
    .then((res) => {
        res.send(response.rows);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});



module.exports = router;