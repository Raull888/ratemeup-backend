const db = require('../../config/db');

const createPost = async (userId, content) => {
  const result = await db.query(
    'INSERT INTO posts (user_id, content) VALUES ($1, $2) RETURNING *',
    [userId, content]
  );
  return result.rows[0];
};

const getAllPosts = async () => {
  const result = await db.query('SELECT * FROM posts ORDER BY id DESC');
  return result.rows;
};

const updatePostRating = async (postId, rating) => {
  await db.query(
    `UPDATE posts SET rating_sum = rating_sum + $1, rating_count = rating_count + 1 WHERE id = $2`,
    [rating, postId]
  );
};

module.exports = { createPost, getAllPosts, updatePostRating };
