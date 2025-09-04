function Book(title,author,pages,read){
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
  this.id=crypto.randomUUID();
}
Book.prototype.info=function(){
    return this.title+" by "+this.author+", "+this.pages+" pages, "+(this.read ? "already read" : "not read yet");
}
const myLibrary=[];
function addBookToLibrary(title,author,pages,read){
  const book = new Book(title,author,pages,read);
  myLibrary.push(book);
  renderBooks();
}
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
function renderBooks() {
  const container=document.querySelector('#container');
  container.innerhtml="";
  myLibrary.forEach(book => {
  const bookCard = document.createElement("div")
  bookCard.className = "Books";
  
  const list = document.createElement("p")
  const text=(book.info());
  list.innerText = `${text}`
  bookCard.appendChild(list)
  
  container.appendChild(bookCard);
  })
}
//dialogs and stuff
const dialogElem = document.getElementById("dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");

showBtn.addEventListener("click", () => {
  dialogElem.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});
//form submission
const form = document.getElementById("form");
form.addEventListener("submit",(event)=>{
  event.preventDefault();
  const title=document.getElementById("title").value;
  const author=document.getElementById("author").value;
  const pages=document.getElementById("pages").value;
  const read=document.getElementById("read").checked;
  addBookToLibrary(title,author,pages,read);
  form.reset();
  dialogElem.close();
});
