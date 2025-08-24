class Book{
    constructor(title, author, readStatus, Pages, userId){
        this.title = title;
        this.author = author;
        this.readStatus = readStatus;
        this.Pages = Pages;
        this.userId = userId;
    };
};

const userLibrary = [
    new Book("Dune", "Frank Herbet", true, 658, 1),
    new Book("The Three Body Problem","Cixin Liu", false, 472, 20),
];

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
    const hasRead = readStatus;

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

   const deletebtn = document.createElement("button");
    deletebtn.append("Delete");
    deletebtn.id = "delete";
    btns.appendChild(deletebtn);

    let val = hasRead;
    console.log(val);

    const statusbtn = document.createElement("button");
    statusbtn.id = "status";
    btns.appendChild(statusbtn);


    if(val === true){
        statusbtn.className = "read";
        statusbtn.innerText = "Read"
        console.log(card.id);
    } else if(val === false){
        statusbtn.className = "unRead";
        statusbtn.innerText = "Unread"
    };

    deletebtn.addEventListener(("click"), () =>{
        userLibrary.forEach((ele) =>{
            if(ele.userId == card.id){
                deleteBook(ele);
                card.remove();
            }
        })
    })
    function deleteBook(element){
        for(let i = userLibrary.length -1; i >= 0; i--){
            if(userLibrary[i] === element){
                userLibrary.splice(i, 1);
            };
        };

    };

    statusbtn.addEventListener(("click"), () =>{

        if(statusbtn.className === "read"){
            statusbtn.className = "unRead";
            statusbtn.innerText = "Unread";
            userLibrary.forEach((ele) =>{
                if(ele.userId == card.id){
                    ele.readStatus = false;
                };
            });

        } else if(statusbtn.className === "unRead"){
            statusbtn.className = "read";
            statusbtn.innerText = "Read";
            userLibrary.forEach((ele) =>{
                if(ele.userId == card.id)
                    ele.readStatus = true
            });
        };
    });
};



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
   let ifRead = null;
   if(read.checked){
    read.value = true;
    ifRead = true;
   } else {
    read.value = false;
    ifRead = false;
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
    console.log(read.value);
    modal.close();
    const id = crypto.randomUUID();
    userLibrary.push(new Book(title, authorName, ifRead, PageAmnt, id));
    createBookElement(title, authorName, PageAmnt, ifRead, id);
    form.reset();
    };
});