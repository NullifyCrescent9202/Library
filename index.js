const userLibrary = [
    new Book("Dune", "Frank Herbet", false, 658, 1),
    new Book("The Three Body Problem","Cixin Liu", false, 472, 20),
];

function Book(title, author, readStatus, Pages, userId){
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
    this.Pages = Pages;
    this.userId = userId;
};

function populateDisplay(lib){
    lib.forEach(element => {
        title = element.title;
        author = element.author;
        read = element.readStatus;
        page = element.Pages;
        id = element.userId;
        createBookElement(title, author, page, read, id);
    });
};

populateDisplay(userLibrary);
function createBook(title, author, Pages, readStatus){
    let uuid = crypto.randomUUID();
    book = new Book(title, author, readStatus, Pages, uuid);
    userLibrary.push(book);
}


function createBookElement(title, author, Pages, readStatus, UUID){
    const body = document.querySelector("body");
    const card = document.createElement("div");

    card.className = "Card";
    card.id = UUID;
    body.appendChild(card);

    const titleHeader = document.createElement("h4");
    titleHeader.innerText = "Title";
    card.appendChild(titleHeader);

    const titleContent = document.createElement("div");
    titleContent.className = "title";
    titleContent.append(title);
    card.appendChild(titleContent);

    const authorHeader = document.createElement("h4");
    authorHeader.innerText = "Author";
    card.appendChild(authorHeader);

    const authorContent = document.createElement("div");
    authorContent.className = "author";
    authorContent.append(author);
    card.appendChild(authorContent);

    const pageHeader = document.createElement("h4");
    pageHeader.innerText = "Pages";
    card.appendChild(pageHeader);

    const pageContent = document.createElement("div");
    pageContent.className = "pages";
    pageContent.append(Pages);
    card.appendChild(pageContent);

    const btns = document.createElement("div");
    btns.className = "Buttons";
    card.appendChild(btns);

    statusbtn = document.createElement("button");
    statusbtn.append("Not Read");
    statusbtn.id = "status";
    btns.appendChild(statusbtn);

    deletebtn = document.createElement("button");
    deletebtn.append("Delete");
    deletebtn.id = "delete";
    btns.appendChild(deletebtn);
    
}