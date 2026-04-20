const db = require("../config/dbConfig");

exports.registerUser = (req, res) => {
  const { name, email, password, preferences, allergies } = req.body;

  const query = `
    INSERT INTO users (name, email, password, preferences, allergies)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [name, email, password, preferences, allergies],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      res.json({ message: "User registered successfully" });
    },
  );
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  const query = `SELECT * FROM users WHERE email = ? AND password = ?`;

  db.query(query, [email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    if (results.length > 0) {
      res.json({ message: "Login successful", user: results[0] });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });
};
