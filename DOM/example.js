const newCard = document.createElement("div");
const anotherCard = document.createElement("div");
newCard.classList.add("card");
anotherCard.classList.add("card");

//or set html content of the new card
newCard.innerHTML = `
    <h2>New Card</h2>
    <p>This is a new card created using JavaScript.</p>
`;

anotherCard.innerHTML = `
    <h2>Another Card</h2>
    <p>This is another card created using JavaScript.</p>
`;

const container = document.querySelector(".container");
container.append(newCard);
container.append(newCard);

container.prepend(anotherCard);

//remove the new card after 3 seconds
// container.removeChild(newCard);

const clone = newCard.cloneNode(true);
container.append(clone);

// =============================================
//styling with javascript
// ==============================================
const btn = document.querySelector(".btn");

btn.classList.add("highlighted");

const handleClick = () => {
  //   btn.classList.remove("highlighted");
  //   btn.classList.add("active")
  btn.classList.replace("highlighted", "active");
  //   btn.classList.toggle("active");
};

btn.addEventListener("click", handleClick);
// btn.addEventListener("mouseenter", () => {
//   console.log("mouse entering");
// });
// btn.addEventListener("mouseleave", () => {
//     console.log("mouse leave")
// })

// btn.removeEventListener("click", handleClick);

// btn.classList.add("active", "highlighted")

//========================
//Event object
// ===========
const form = document.querySelector("form");
const submitbtn = document.querySelector(".submitform");
const firstName = document.querySelector("#firstName");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.tagName);
  console.log(event.target.classList);
  console.log(event.target.textContent);
  console.log(event.target.dataset.id);

  //   console.log("Submit my form");
});

document.addEventListener("keydown", (e) => {
  // e.key - to know the key pressed
  e.code;
  e.ctrlKey;
  e.shiftKey;
  e.altKey;

  if (e.key === "Enter") {
    console.log("Enter is pressed");
    console.log(e.code);
  }
  console.log(e.code);
});

const buttons = document.querySelectorAll(".btn-container button");
const btnContainer = document.querySelector(".btn-container");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "btn 1") {
      console.log("clicked");
    }

    if (btn.classList.contains("delete")) {
      console.log("Print");
    }
  });
});

// btnContainer.addEventListener("click", (e) => {
//     if(e.target.classList.contains("delete")){
//         console.log("delete btn is clicked")
//     }
// })