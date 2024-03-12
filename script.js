// let input1 = document.querySelector("#input");
// let input2 = document.querySelector("#input123");
// let plus = document.querySelector("#buttonPlus");
// let h1 = document.querySelector("#otvets");

// plus.addEventListener("click", () => {
//   // let value1 = +input1.value; //2
//   let value2 = +input2.value; //5
//   h1.innerHTML = value1 + value2;

// let input = document.querySelector(".input");
// let btn = document.querySelector(".btn");
// let wrapper_right = document.querySelector(".wrap_left");

// btn.addEventListener("click", (event) => {
//   event.preventDefault();
//   wrap_left.innerHTML = `
//   <div class="block">
//   <p>${input.value}</p>
// </div>
//   `;
// });

document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTask");
  const listforTask = document.getElementById("listforTask");
  const listName = document.getElementById("nameList");

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const creating = document.createElement("li");
      creating.classList.add("taskItem");
      creating.innerHTML = `
              <span>${taskText}</span>
              <button class="deleteBtn">Delete</button>
          `;

      listforTask.appendChild(creating);

      taskInput.value = "";

      const deleteBtn = creating.querySelector(".deleteBtn");
      deleteBtn.addEventListener("click", function () {
        listforTask.removeChild(creating);
      });
    }
  }

  addTaskBtn.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});

taskInput.style.padding = "12px";
taskInput.style.borderRadius = "30px";
taskInput.style.border = "2px solid red";
listName.style.fontSize = "64px";
(listName.style.fontFamily = "Anta"), "sans-serif";
listName.style.textAlign = "center";
taskInput.style.marginLeft = "650px";
addTask.style.backgroundColor = "red";
addTask.style.color = "white";
addTask.style.padding = "12px";
addTask.style.borderRadius = "15px";
addTask.style.border = "3px solid black";
addTask.style.cursor = "pointer";
