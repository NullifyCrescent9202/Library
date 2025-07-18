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
    const con = document.querySelector(".con");
    const card = document.createElement("div");

    card.className = "Card";
    card.id = UUID;
    con.appendChild(card);

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

const modalbtn = document.querySelector(".openModal");

const modal = document.querySelector(".modal");

modalbtn.addEventListener(("click"), ()=>{
    modal.showModal();
});

const addbtn = document.querySelector("#addbtn");

 addbtn.addEventListener(("click"), (event) =>{
   const title = document.getElementById("title").value;
   const authorName = document.getElementById("author-name").value;
   const PageAmnt = document.getElementById("PageAmnt").value;
   const read = document.getElementById("read-book");
   const form = document.querySelector("form");
   
   if(read.checked){
    read.value = true;
   } else {
    read.value = false;
   }

   let isTitleEmpty;
   if(title.length > 0){
    isTitleEmpty = false
   };
   
   let isAuthorEmpty;
   if(authorName.length > 0){
    isAuthorEmpty = false;
   };

   if(isTitleEmpty === false && isAuthorEmpty === false){
    isAuthorEmpty = false;
    isTitleEmpty = false;
    alert(read.value);
    modal.close();
    createBookElement(title, authorName, PageAmnt, read, crypto.randomUUID())
    form.reset();
    };
});