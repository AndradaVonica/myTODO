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
const listContainer = document.getElementById("listBody");
const inputField = document.getElementById("inputTextField");
console.log("this for window", this);
let todoText = "";

// create a todos empty array
// for every todo added, also push into array like this: { id: ...,text: ..., completed: false}
// set completed: true  when you click on todo
/*
 when filter for completed/not completed is set: 
  - delete every element you have in listBody
  - iterate through array and filter only the elements with completed status: true/false (depends on filter case)
  - call addToDo function for every left element in 'todos' array and give it the text
*/

// addToDo should accept a 'text' param from 'todos' array
// hint: add another param: 'filter: true/false' and check when you set paragraph.innerText if it comes from filter button or 'add/enter'
function addToDo() {
  const paragraph = document.createElement("p");
  const input = document.createElement("input");
  const div = document.createElement("div");
  const btn = document.createElement("button");
  const del = document.createElement("button");
  const allBtns = document.createElement("div");

  // set paragraph id to: todos.length
  paragraph.classList.add("p");
  div.classList.add("orice");
  del.classList.add("btn-style");
  btn.classList.add("btn-style");
  allBtns.classList.add("allB");
  del.innerText = "delete";

  btn.innerText = "edit";
  btn.style.fontSize = "1rem";
  btn.style.display = "flex";
  btn.style.justifyContent = "center";
  btn.style.alignItems = "center";
  btn.style.borderRadius = "50px";
  // or i can white all the style from above like this:
  // btn.style = {
  //   ...btn.style,
  //   fontSize: "3rem",
  // };
  paragraph.style.width = "100%";

  del.innerText = "delete";
  del.style.fontSize = "1rem";
  del.style.display = "flex";
  del.style.justifyContent = "center";
  del.style.borderRadius = "50px";
  del.style.alignItems = "center";

  paragraph.innerText = inputField.value;
  div.appendChild(paragraph);
  div.appendChild(btn);
  div.appendChild(del);
  div.appendChild(allBtns);
  allBtns.appendChild(del);
  allBtns.appendChild(btn);
  listContainer.appendChild(div);

  inputField.value = "";
  paragraph.addEventListener("click", function () {
    console.log("this foe paragraf", this);
    // set completed: true/false (use paragraph.id)
    const decorationType = this.style.textDecoration;
    if (decorationType === "line-through") {
      this.style.textDecoration = "none";
    } else {
      this.style.textDecoration = "line-through";
    }
  });
  del.addEventListener("click", function () {
    listContainer.removeChild(div);
  });
  btn.addEventListener("click", function () {
    if (this.innerText == "edit") {
      this.innerText = "save";
      // console.log(this.innerText);
      paragraph.parentNode.replaceChild(input, paragraph);
      return;
    }
    if (this.innerText == "save") {
      this.innerText = "edit";
      paragraph.innerText = input.value;
      input.parentNode.replaceChild(paragraph, input);
    }
  });

  // del.appendChild(paragraph);
  // paragraph.addEventListener("click", function () {
  //   del.removeChild(paragraph);
  // });

  todoText = "";
}

inputField.addEventListener("change", function (event) {
  todoText = event.target.value;
});

inputField.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    if (!event.target.value) return;
    addToDo();
  }
  // function required(inputField) {
  //   if (inputField.value.length == 0) {
  //     alert("messageFSDFSDFS");
  //     return false;
  //   }
  //   return true;
  // }
});
addButtonItem.addEventListener("click", function () {
  if (!todoText) return;
  // console.log("this for add buttn ", this);
  addToDo();
});

///////
// function isEmpty() {
//   if ((document.forms["form1"]["input1"] = "")) {
//     console.log("ALERT");
//     alert("ypu have to fill the input");
//     return false;
//   }
// }
// function add() {
//   const listContainer = document.getElementById("todoContainer");
//   item = document.createElement("li");
//   item.innerHTML = '<input type="checkbox" /> item';
//   list.appendChild(item);
// }

// function rem() {
//   var list = document.getElementById("list"),
//     items = Array.prototype.slice.call(list.childNodes),
//     item;
//   while ((item = items.pop())) {
//     if (item.firstChild && item.firstChild.checked) {
//       list.removeChild(item);
//     }
//   }
// }
