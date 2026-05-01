const loadingE1 = document.querySelector("#loading");
const errorE1 = document.querySelector("#error");
const containerE1 = document.querySelector("#posts-container");

function showLoading() {
  loadingE1.style.display = "block";
  errorE1.style.display = "none";
  containerE1.innerHTML = "";
}

function showError(message) {
  loadingE1.style.display = "none";
  errorE1.style.display = "block";
  errorE1.textContent = message;
}

function hideLoading() {
  loadingE1.style.display = "none";
}

function renderPosts(posts) {
  const html = posts
    .map(
      (post) => `
        <div class="post-card">
            <div class="post-id">Post #${post.id}</div>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
    `,
    )
    .join("");

  containerE1.innerHTML = html;
}

async function loadPosts() {
  showLoading();
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`);
    }

    const posts = await response.json();

    if (posts.length === 0) {
      containerE1.innerHTML = `<div class="post-card">
            <p>No post found</p>
        </div>`;
      return;
    }

    hideLoading();
    renderPosts(posts);
  } catch (error) {
    showError(error.message);
    console.log("Fetch error: ", error.message);
  } finally {
    hideLoading();
  }
}

loadPosts();
