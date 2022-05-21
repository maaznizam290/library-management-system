console.log("This is the library of maaz");

// To Do Activities:
// 1. Store the data to the local storage
// 2. Give another column as an option to delete the column
// 3. Add a scroll bar to the view

// constructor
// var book;
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

// Display constructor
function Display() {}

// Add methods to display prototype
Display.prototype.add = function (book) {
  console.log("Adding to UI");
  let tablebody = document.getElementById("tablebody");
  let UIString = ` <tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                  </tr>`;
  tablebody.innerHTML += UIString;
};

Display.prototype.clear = function () {
  let libraryform = document.getElementById("libraryForm");
  libraryform.reset();
};
Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.name.length < 2) {
    return false;
  } else {
    return true;
  }
};
Display.prototype.show = function (type, displayMessage) {
  let message = document.getElementById("message");
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                              <strong>Holy Message: </strong> ${displayMessage}
                              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                              </button>
                              </div>`;

  setTimeout(function () {
    message.innerHTML = "";
  }, 2000);
};
// reset method resets the form fields
// Add submit event listener to libraryform
let libraryform = document.getElementById("libraryForm");
libraryform.addEventListener("submit", libraryformSubmit);

function libraryformSubmit(e) {
  console.log("You have submitted the library form");
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let type;

  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");

  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }
  e.preventDefault();

  let book = new Book(name, author, type);
  console.log(book);
  console.log("You have submitted the library form");
  let display = new Display();
  // console.log(display.validate);
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Your book has been successfully been added");
  } else {
    display.show("danger", "Sorry the book has not been added");
  }
}
