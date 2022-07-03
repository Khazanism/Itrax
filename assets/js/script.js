//color guessing game

// ACTIVE ADDING TASK / ALERT MESSAGE

document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("PLease Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
    <div class="task">
    <span id="taskname">
      ${document.querySelector("#newtask input").value}
    </span>
      <button class="delete">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
    `;

    // NOW ACTIVE CANCEL BUTTON

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};

/*
function cleartext() {
  var itemText = document.querySelector("#newtask input").value;
  itemText.innerHTML = "";
}

cleartext();
*/