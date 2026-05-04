// const jsonString = '{"name": "Femi", "age": 22, "skills": ["HTML", "CSS"]}'

// const user = JSON.parse(jsonString)

// console.log(user)
// console.log(user.skills[0])

// const product = { name: "Phone", price: `50000`, inStock: true };

// const jsonProduct = JSON.stringify(product, null, 2)
// console.log(jsonProduct)

// const users = [
//   {
//     id: 1,
//     firstName: "John",
//     isActive: true,
//     toggleUserStatus: () => {},
//     dob: undefined,
//   },
// ];

// const jsonUser = JSON.stringify(users);

// console.log(jsonUser);

// async function displayGithubUser(username) {
//   const response = await fetch(`https://api.github.com/users/${username}`);
//   const user = await response.json();
//   //   console.log(user);
//   console.log(user.avatar_url);
//   console.log(user.html_url);
//   console.log(user.followers);
// }

// async function displayGithubUser(username) {
//   const response = await fetch(
//     `https://api.github.com/users/${username}/repos`,
//   );
//   const repos = await response.json();
//   //   console.log(repos);
//   return repos;
// }

// async function getNames() {
//   const repos = await displayGithubUser("femmytedrey");
//   const repoNames = repos.map((repo) => repo.name);
//   console.log(repoNames);
// }

// getNames();
