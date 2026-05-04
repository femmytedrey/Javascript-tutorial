//Select all the elements we will manipulate
const input = document.querySelector("#username-input");
const searchBtn = document.querySelector("#search-btn");
const statusE1 = document.querySelector("#status");
const profileE1 = document.querySelector("#profile");
const repoSection = document.querySelector("#repos-section");
const reposList = document.querySelector("#repos-list");

//Profile fields elements
const avatarEl = document.querySelector("#avatar");
const nameEl = document.querySelector("#full-name");
const usernameEl = document.querySelector("#username-display");
const bioEl = document.querySelector("#bio-display");
const reposCount = document.querySelector("#repos-count");
const followers = document.querySelector("#followers-count");
const following = document.querySelector("#following-count");

function setStatus(message, isError = false) {
  statusE1.textContent = message;
  statusE1.style.color = isError ? "#f85149" : "#8b949e";
}

function clearResult() {
  profileE1.style.display = "none";
  repoSection.style.display = "none";
  reposList.innerHTML = "";
}

function renderProfile(user) {
  avatarEl.src = user.avatar_url;
  avatarEl.alt = `${user.login}'s avatar`;
  nameEl.textContent = user.name || user.login;
  usernameEl.textContent = `@${user.login}`;
  bioEl.textContent = user.bio || "No bio provided.";
  reposCount.textContent = user.public_repos.toLocaleString();
  followers.textContent = user.followers.toLocaleString();
  following.textContent = user.following.toLocaleString();

  profileE1.style.display = "block";
}

//Todo: render repos
function renderRepos(repos) {
  const top = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);

  reposList.innerHTML = top
    .map(
      (repo) => `
   <div class="repo-card">
     <a class="repo-name" href="${repo.html_url}" target="_blank" rel="noopener">
       ${repo.name}
     </a>
     <div class="repo-description">
       ${repo.description || "No description."}
     </div>
     <div class="repo-meta">
       <span>⭐ ${repo.stargazers_count.toLocaleString()}</span>
       <span>🍴 ${repo.forks_count.toLocaleString()}</span>
       ${repo.language ? `<span>🔵 ${repo.language}</span>` : ""}
     </div>
   </div>
 `,
    )
    .join("");

  repoSection.style.display = "block";
}

async function searchUser() {
  const username = input.value.trim();

  if (!username) {
    setStatus("Please enter a valid username.", true);
    return;
  }

  clearResult();
  setStatus("Searching...");
  searchBtn.disabled = true;

  try {
    const userResponse = await fetch(
      `https://api.github.com/users/${username}`,
    );

    if (userResponse.status === 404) {
      throw new Error(`User "${username}" not found on Github.`);
    }

    if (!userResponse.ok) {
      throw new Error(`Github API error: ${userResponse.statuws}`);
    }

    const user = await userResponse.json();
    renderProfile(user);
    setStatus("");

    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=20`,
    );

    const repos = await reposResponse.json();
    renderRepos(repos);

    // console.log(user);
  } catch (error) {
    clearResult();
    setStatus(error.message, true);
    // console.log(error);
  } finally {
    searchBtn.disabled = false;
  }
}

searchBtn.addEventListener("click", searchUser);

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    searchUser();
  }
});

//Assignment: Write a debounce function on the input so that it call the backend on every keystroke strike
