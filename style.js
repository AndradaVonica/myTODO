// function createListMenu(name) {
//   let li = document.createElement("li");
//   li.textContent = name;
//   return li;
// }

// const list = document.querySelector("#list");
// list.appendChild(createListMenu("home"));
// list.appendChild(createListMenu("about"));
// list.appendChild(createListMenu("services"));

// const arrayList[
//     {
//         'id':home

//     }
// ]

// const addButtonItem = document.getElementById("addButton");
// const listContainer = document.getElementById("list-container");
// const inputField = document.getElementById("inputTextField");

// addButtonItem.addEventListener("click", function () {
//   const lala = document.createElement("d");
//   listContainer.appendChild(lala);
// });

const addButtonItem = document.getElementById("addButton");
const listContainer = document.getElementById("todoContainer");
const inputField = document.getElementById("inputTextField");

addButtonItem.addEventListener("click", function () {
  const paragraph = document.createElement("p");
  paragraph.classList.add("paragraph");
  paragraph.innerText = inputField.value;
  listContainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    listContainer.removeChild(paragraph);
  });
});
