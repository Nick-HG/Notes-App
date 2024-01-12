const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}


// Create new note
createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let deleteBtn = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  deleteBtn.src = "images/delete.png";

  // Display the input-box
  notesContainer.appendChild(inputBox);
  inputBox.appendChild(deleteBtn);
});


 // Delete note
 notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
  else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach(note => {
      note.onkeyup = () => {
        updateStorage();
      }
    })
  }
});


document.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
    document.execCommand("insertLineBreak");
    e.preventDefault();
  }
})
