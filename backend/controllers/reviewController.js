const db = require("../config/dbConfig");

// Add Review
exports.addReview = (req, res) => {
  const { user_id, recipe_id, rating, comment } = req.body;

  const query = `
    INSERT INTO reviews (user_id, recipe_id, rating, comment)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [user_id, recipe_id, rating, comment], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Review added" });
  });
};

// Get Reviews
exports.getReviews = (req, res) => {
  const recipeId = req.params.recipeId;

  const query = `SELECT * FROM reviews WHERE recipe_id = ?`;

  db.query(query, [recipeId], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};
