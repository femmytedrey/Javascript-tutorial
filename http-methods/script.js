// async function createPost(title, body, userId) {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         title,
//         body,
//         userId,
//       }),
//     });

//     // const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts")
//     // const postResponseResult = await postResponse.json()

//     if (!response.ok) {
//       throw new Error(`Server erro: ${response.status}`);
//     }

//     const newPost = await response.json();

//     console.log("Created post with id: ", newPost.id);
//     // console.log(postResponseResult)
//     return newPost;
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// createPost("My FIrst Post", "This is the body of the post", 10);

// async function updatePost(postId, updatedData) {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${postId}`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updatedData),
//       },
//     );

//     if (!response.status) {
//       throw new Error(`Update failed: ${response.status}`);
//     }

//     const updatedPost = await response.json();
//     console.log("Updated post:", updatedPost);
//     return updatedPost;
//   } catch (error) {
//     console.log("PUT failed: ", error.message);
//   }
// }

// updatePost(1, {
//   id: 1,
//   title: "Updated Title",
//   body: "This is the new body text.",
//   userId: 1,
// });

// async function patchPost(postId, changes) {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${postId}`,
//       {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(changes),
//       },
//     );

//     if (!response.status) {
//       throw new Error(`Update failed: ${response.status}`);
//     }

//     const updatedPost = await response.json();
//     console.log("Updated post:", updatedPost);
//     return updatedPost;
//   } catch (error) {
//     console.log("PATCH failed: ", error.message);
//   }
// }

// patchPost(1, {
//   body: "This is the new body text.",
// });

async function deletePost(postId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        method: "DELETE",
      },
    );

    if (!response.ok) {
      throw new Error(`Delete faile ${response.status}`);
    }

    // if (response.status === 204) {
    //   console.log(`Post ${postId} deleted successfully.`);
    //   return trues
    // }

    const result = await response.json()
    console.log(`Post ${postId} deleted. Server response`, result)

    return true
  } catch (error) {
    console.log("DELETE failed: ", error.message);
    return
  }
}

deletePost(1)