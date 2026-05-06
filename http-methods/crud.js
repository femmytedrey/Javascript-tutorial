const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

const titleInput = document.querySelector("#post-title");
const bodyInput = document.querySelector("#post-body");
const editingId = document.querySelector("#editing-id");
const createBtn = document.querySelector("#create-btn");
const updateBtn = document.querySelector("#update-btn");
const cancelBtn = document.querySelector("#cancel-btn");
const statusEl = document.querySelector("#status");
const formTitle = document.querySelector("#form-title");
const loadingEl = document.querySelector("#loading");
const postsList = document.querySelector("#posts-list");

let posts = [];

// Helper
function setStatus(msg, isError = false) {
  statusEl.textContent = msg;
  statusEl.style.color = isError ? "#c62828" : "#2e75b6";
}

function clearForm() {
  titleInput.value = "";
  bodyInput.value = "";
  editingId.value = "";
  formTitle.textContent = "Create New Post";
  createBtn.style.display = "inline-block";
  updateBtn.style.display = "none";
  setStatus("");
}

function renderPosts() {
  if (posts.length === 0) {
    postsList.innerHTML = `<p style="color: #888">No posts yet</p>`;
    return;
  }

  postsList.innerHTML = posts
    .map(
      (post) =>
        `<div class="post-card" data-id="${post.id}">
            <div class="post-text">
            <div class="post-id">Post #${post.id}</div>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            </div>
            <div class="post-actions">
            <button class="btn-edit"   data-id="${post.id}">Edit</button>
            <button class="btn-delete" data-id="${post.id}">Delete</button>
            </div>
        </div>
        `,
    )
    .join("");
}

async function loadPosts() {
  try {
    const response = await fetch(`${BASE_URL}?_limit=10`);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    loadingEl.style.display = "none";
    posts = await response.json();

    renderPosts();
  } catch (error) {
    loadingEl.textContent = "Could not load posts. " + error.message;
  }
}

loadPosts();

async function createPost() {
  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();

  if (!title || !body) {
    setStatus("Please fill in both fields.", true);
    return;
  }

  setStatus("Creating....");
  createBtn.disabled = true;

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        userId: 1,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const newPost = await response.json();

    posts.unshift(newPost);
    renderPosts();
    clearForm();
    setStatus("Post created successfully");
  } catch (error) {}
}

function startEditing(postId) {
  // Find the post in our local array
  const post = posts.find((p) => p.id === postId);
  if (!post) return;

  // Populate the form fields
  titleInput.value = post.title;
  bodyInput.value = post.body;
  editingId.value = post.id;

  // Switch the form to edit mode
  formTitle.textContent = `Editing Post #${post.id}`;
  createBtn.style.display = "none";
  updateBtn.style.display = "inline-block";

  // Scroll the form into view
  titleInput.focus();
}

async function updatePost() {
  const id = parseInt(editingId.value);
  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();

  if (!title || !body) {
    setStatus("Both fields are required.", true);
    return;
  }

  setStatus("Saving changes...");
  updateBtn.disabled = true;

  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, title, body, userId: 1 }),
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const updatedPost = await response.json();

    // Update the local array — find the post by id and replace it
    const index = posts.findIndex((p) => p.id === id);
    if (index !== -1) {
      posts[index] = updatedPost;
    }

    // startEditing(index.id);
    renderPosts();
    clearForm();
    setStatus("Post updated successfully!");
  } catch (error) {
    setStatus("Update failed: " + error.message, true);
  } finally {
    updateBtn.disabled = false;
  }
}

createBtn.addEventListener("click", createPost);
updateBtn.addEventListener("click", updatePost);

postsList.addEventListener("click", function (e) {
  const id = parseInt(e.target.dataset.id);
  if (e.target.classList.contains("btn-edit")) {
    startEditing(id);
  }
});

// console.log(posts)
