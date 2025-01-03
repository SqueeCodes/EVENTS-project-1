async function renderPosts() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function postHTML(post) {
  return `  <div class="posts__card">
        <div class="post">
          <h4 class="post__userID">${userId}</h4>
          <h4 class="post__title">${title}</h4>
          <p class="post__idNum">${id}</p>
          <p class="post__body">${body}</p>
        </div>
      </div>`;
}
