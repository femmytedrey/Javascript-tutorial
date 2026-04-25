// function sayHello() {
//   console.log("Hello");
// }

// sayHello();

// const title = document.getElementById("title")
// const title = document.querySelector(".classTitle");
// const btn = document.querySelector("#changeName");

// function changeTitle() {
//   title.innerHTML = "Hello, Michael";
// }

// btn.addEventListener("click", changeTitle)

const selectItem = document.querySelectorAll(".item");
const changeItemBtn = document.querySelector("#change-item");

changeItemBtn.addEventListener("click", () => {
  selectItem.forEach((item) => {
    const textContent = item.textContent;
    if (textContent === "Item 1") {
      item.textContent = `${item.textContent} is item 1`;
    } else if (textContent === "Item 2") {
      item.textContent = `${item.textContent} is item 2`;
    } else if (textContent === "Item 3") {
      item.textContent = `${item.textContent} is item 3`;
    }
  });
});

// assignment:  the forEach above, put it in a click event listener, so that the text only changes when you click a button.

// function changeText() {
// }

// changeText();
// console.log(selectItem)

// const user = {
//     name: "Michael",
//     age: 30,
//     city: "New York"
// }

// console.log(user.name)

// const users = [
//     {
//         name: "Alice",
//         age: 25,
//         city: "Los Angeles"
//     },
//     {
//         name: "Bob",
//         age: 35,
//         city: "Chicago"
//     }
// ];

// const getUsers = users.forEach(user => {
//     console.log(user)
// })
