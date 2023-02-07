function addItem(e) {
  e.preventDefault();

  let newItem = document.getElementById("groceryItem").value;
  if (newItem === "") {
    return;
  }
  let itemsList = document.getElementById("itemsList");
  itemsList.appendChild(createItem(newItem));
  document.getElementById("groceryItem").value = "";
}

function createItem(item) {
  let newDiv = document.createElement("div");
  let newH5 = document.createElement("h5");
  newH5.textContent = item;

  var deleteBtn = document.createElement("button");
  deleteBtn.addEventListener("click", deleteItem);
  deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
  // var deleteText = document.createTextNode("🗑️");
  // deleteBtn.appendChild(deleteText);

  var editBtn = document.createElement("button");
  editBtn.addEventListener("click", editItem);
  editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
  // var editText = document.createTextNode("📝");
  // editBtn.appendChild(editText);

  newDiv.appendChild(newH5);
  newDiv.appendChild(deleteBtn);
  newDiv.appendChild(editBtn);

  return newDiv;
}

var input = document.getElementById("groceryItem");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("sibmitBtn").click();
  }
});

function deleteItem() {
  this.parentNode.remove();
}

function editItem() {
  let editArea = this.parentElement.querySelector("h5");
  if (this.innerHTML === '<i class="fa-solid fa-floppy-disk"></i>') {
    editArea.contentEditable = false;
    this.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    return;
  }
  editArea.contentEditable = true;
  this.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>';
}

function clearAll() {
  let targetArea = document.getElementById("itemsList");
  targetArea.innerText = "";
}
