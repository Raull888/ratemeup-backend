const { updatePostRating } = require('../backend/models/Post');
const { addRating } = require('../backend/models/Rating');

const ratePost = async (req, res) => {
  const { postId, rating } = req.body;
  await addRating(postId, rating);
  await updatePostRating(postId, rating);
  res.json({ message: 'Puntuación registrada' });
};

module.exports = { ratePost };
