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
}
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
const container=document.querySelector('#container');
myLibrary.forEach(book => {
  const bookCard = document.createElement("div")
  bookCard.className = "Books";
  
  const list = document.createElement("p")
  const text=(book.info());
  list.innerText = `${text}`
  bookCard.appendChild(list)
  
  container.appendChild(bookCard);
})

