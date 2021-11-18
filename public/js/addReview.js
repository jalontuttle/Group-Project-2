const newReviewHandler = async (event) => {
  event.preventDefault();

  const review_title = document.querySelector("#review-title").value;
  console.log(review_title);
  const review_body = document.querySelector("#review-body").value;
  const movie_id_element = document.querySelector("#movie-id");
  const movie_id = movie_id_element.getAttribute("data-id");
  console.log(movie_id);
  // const user_name = document.querySelector('#user_name').value

  if (review_title && review_body) {
    const response = await fetch(`/api/review/${movie_id}`, {
      method: "POST",
      body: JSON.stringify({
        review_title,
        review_body,
        // user_name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace(`/review/${movie_id}`);
      console.log("response received");
    } else {
      console.log(err);
    }
  }
};

document
  .querySelector(".new-review-form")
  .addEventListener("submit", newReviewHandler);
