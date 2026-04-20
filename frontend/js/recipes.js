const BASE_URL = "http://localhost:3000/api/recipes";

// Load default recipes
window.onload = () => {
  fetchRecipes("pizza");
};

// Search button function
function searchRecipes() {
  const query = document.getElementById("search").value;
  const diet = document.getElementById("diet").value;
  const cuisine = document.getElementById("cuisine").value;
  const meal = document.getElementById("meal").value;
  const time = document.getElementById("time").value;

  const user = JSON.parse(localStorage.getItem("user"));

  let url = `${BASE_URL}?query=${query}`;

  // Diet (priority: dropdown > user preference)
  if (diet) {
    url += `&diet=${diet}`;
  } else if (user && user.preferences) {
    url += `&diet=${user.preferences}`;
  }

  // Cuisine
  if (cuisine) {
    url += `&cuisine=${cuisine}`;
  }

  // Meal type
  if (meal) {
    url += `&type=${meal}`;
  }

  // Cooking time
  if (time) {
    url += `&maxReadyTime=${time}`;
  }

  // Allergies
  if (user && user.allergies) {
    url += `&exclude=${user.allergies}`;
  }

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (Array.isArray(data)) {
        displayRecipes(data);
      } else {
        alert("No recipes found");
      }
    });
}

// Fetch recipes from backend
function fetchRecipes(query) {
  const user = JSON.parse(localStorage.getItem("user"));

  let url = `${BASE_URL}?query=${query}`;

  if (user && user.preferences) {
    url += `&diet=${user.preferences}`;
  }

  if (user && user.allergies) {
    url += `&exclude=${user.allergies}`;
  }

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("API Response:", data);

      // ✅ FIX: ensure it's an array
      if (Array.isArray(data)) {
        displayRecipes(data);
      } else {
        alert("No recipes found or API error");
      }
    });
}

function displayRecipes(recipes) {
  const container = document.getElementById("recipes");
  container.innerHTML = "";

  recipes.forEach((recipe) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${recipe.title}</h3>
      <img src="${recipe.image}" width="200"><br><br>

      <input type="number" id="rating-${recipe.id}" min="1" max="5" placeholder="Rating (1-5)">
      <input type="text" id="comment-${recipe.id}" placeholder="Comment">
      <button onclick="addReview(${recipe.id})">Submit</button>

      <div id="reviews-${recipe.id}"></div>
      <hr>
    `;

    container.appendChild(div);

    loadReviews(recipe.id);
  });
}
