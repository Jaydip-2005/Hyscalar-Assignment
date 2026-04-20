const axios = require("axios");

const API_KEY = "080a488ab0ec44879c6ac9bf6aa63c06";

exports.getRecipes = async (req, res) => {
  try {
    const { query, diet, exclude, cuisine, type, maxReadyTime } = req.query;

    let url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&apiKey=${API_KEY}`;

    if (diet) url += `&diet=${diet}`;
    if (cuisine) url += `&cuisine=${cuisine}`;
    if (type) url += `&type=${type}`;
    if (maxReadyTime) url += `&maxReadyTime=${maxReadyTime}`;
    if (exclude) url += `&excludeIngredients=${exclude}`;

    const response = await axios.get(url);

    res.json(response.data.results);
  } catch (error) {
    console.log("ERROR:", error.response?.data || error.message);
    res.status(500).json({ error: "Error fetching recipes" });
  }
};
