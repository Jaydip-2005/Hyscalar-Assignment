const REVIEW_URL = "http://localhost:3000/api/reviews";

// Add Review
function addReview(recipeId) {
  const user = JSON.parse(localStorage.getItem("user"));

  let rating = parseInt(document.getElementById(`rating-${recipeId}`).value);
  const comment = document.getElementById(`comment-${recipeId}`).value;

  if (isNaN(rating) || rating < 1 || rating > 5) {
    alert("Rating must be between 1 and 5");
    return;
  }

  fetch(REVIEW_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: user.id,
      recipe_id: recipeId,
      rating,
      comment,
    }),
  })
    .then((res) => res.json())
    .then(() => {
      alert("Review added");
      loadReviews(recipeId);
    });
}

// Load Reviews
function loadReviews(recipeId) {
  fetch(`${REVIEW_URL}/${recipeId}`)
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById(`reviews-${recipeId}`);
      container.innerHTML = "<h4>Reviews:</h4>";

      data.forEach((r) => {
        const stars = "⭐".repeat(r.rating);

        container.innerHTML += `
          <p>${stars} - ${r.comment}</p>
        `;
      });
    });
}
