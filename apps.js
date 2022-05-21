console.log("This is the ES6 version of this project");

class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}
class Display {
  add(book) {
    console.log("Adding to UI");
    let tablebody = document.getElementById("tablebody");
    let UIString = ` <tr>
                      <td>${book.name}</td>
                      <td>${book.author}</td>
                      <td>${book.type}</td>
                    </tr>`;
    tablebody.innerHTML += UIString;
  }
  clear() {
    let libraryform = document.getElementById("libraryForm");
    libraryform.reset();
  }
  validate(book) {
    if (book.name.length < 2 || book.name.length < 2) {
      return false;
    } else {
      return true;
    }
  }
  show(type, displayMessage) {
    let message = document.getElementById("message");
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>Holy Message: </strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="close" role= "alert ">
                                <span aria-hidden="true">&times;</span>
                                </button>
                                </div>`;

    setTimeout(function () {
      message.innerHTML = "";
    }, 5000);
  }
}
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
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Your book has been successfully been added");
  } else {
    display.show("danger", "Sorry the book has not been added");
  }
}
