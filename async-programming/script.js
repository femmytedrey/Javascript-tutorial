//callback
// setTimeout(function () {
//   console.log("This run after 5 seconds");
// }, 5000);

// function getUserFromServer(userId, callback) {
//   setTimeout(function () {
//     const user = { id: userId, name: "John", role: "student" };
//     callback(null, user);
//   }, 1000);
// }

// // function getPostsForUser()

// getUserFromServer(1, function (error, user) {
//   if (error) {
//     console.log("Something went wrong", error);
//   }
//   console.log("user: ", user.name);
// });

//promise
// const myPromise = new Promise(function (resolve, reject) {
//   const success = true;

//   if (success) {
//     resolve("Operation worked! Here's your data");
//   } else {
//     reject("Something went wrong");
//   }
// });

// console.log(myPromise);

// function getUserFromServer(userId) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (userId <= 0) {
//         reject(new Error("Invalid user Id"));
//       }

//       const user = { id: userId, name: "John", role: "student" };

//       resolve(user);
//       //   return user
//     }, 2000);
//   });
// }

// getUserFromServer(1)
//   .then((user) => console.log(user, "This is success block"))
//   .catch((err) => console.error(err, "This is error block"));

//callback hell from promise

// call pattern
// function getUser(userId, callback) {
//   setTimeout(() => {
//     callback(null, { id: userId, name: "John" });
//   }, 1000);
// }

// function getPosts(user, callback) {
//   setTimeout(() => {
//     callback(null, [{ id: 1, title: "Post 1" }]);
//   }, 1000);
// }

// function getComments(post, callback) {
//   setTimeout(() => {
//     callback(null, [{ id: 1, text: "Nice post!" }]);
//   }, 1000);
// }

// getUser(1, (err, user) => {
//   if (err) return console.error(err);
//   getPosts(user, (err, posts) => {
//     if (err) return console.error(err);
//     getComments(posts[0], (err, comments) => {
//       if (err) return console.error(err);
//       console.log("user:", user);
//       console.log("posts:", posts);
//       console.log("comments:", comments);
//     });
//   });
// });

// promise pattern
function getUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: userId, name: "John" }), 1000);
  });
}

function getPosts(user) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([{ id: 1, title: "Post 1" }]), 1000);
  });
}

function getComments(post) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([{ id: 1, text: "Nice post!" }]), 1000);
  });
}

// getUser(1)
//   .then((user) => {
//     console.log("user:", user);
//     return getPosts(user);
//   })
//   .then((posts) => {
//     console.log("posts:", posts);
//     return getComments(posts[0]);
//   })
//   .then((comments) => {
//     console.log("comments:", comments);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

Promise.all([getUser(1), getPosts(1), getComments(1)])
  .then(([user, posts, comments]) => {
    console.log("user: ", user);
    console.log("posts: ", posts);
    console.log("comments: ", comments);
  })
  .catch((err) => {
    console.log("Something went wrong", err);
  });
