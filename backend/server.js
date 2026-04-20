const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const reviewRoutes = require("./routes/reviewRoutes");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

app.use("/api/recipes", recipeRoutes);

app.use("/api/reviews", reviewRoutes);