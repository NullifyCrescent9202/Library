const userLibrary = [];

function Book(title, author, readStatus, userId){
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
    this.userId = userId;
};

function createBook(title, author, readStatus){
    book = new Book(title, author, readStatus, crypto.randomUUID());
    userLibrary.push(book);
}