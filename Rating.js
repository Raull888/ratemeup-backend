const db = require('../../config/db');

const addRating = async (postId, rating) => {
  await db.query('INSERT INTO ratings (post_id, rating) VALUES ($1, $2)', [postId, rating]);
};

module.exports = { addRating };
