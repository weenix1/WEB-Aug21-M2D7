/*
        JS Exercises
        EX11) Write a function to add a new link into the navbar
        EX12) Write a function to change the color of the main title
        EX13) Write a function to change the background of the jumbotron
        EX14) Write a function to remove all the links under "Elsewhere"
        EX15) Write a function to change the column size for heading in jumbotron
        EX16) Write a function to remove the "Search" magnifying glass icon
        EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
        EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
        EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
        EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
    */

/*    EX11) Write a function to add a new link into the navbar */
function addNewLink() {
  let link = document.querySelector(".nav");
  let newLink = document.createElement("a");
  newLink.innerHTML = "Education";
  newLink.classList.add("p-2");
  newLink.classList.add("text-muted");

  link.appendChild(newLink);
  console.log(link);
}
addNewLink();

/* const addLinkToNav = function (content) {
  const parent = document.querySelector(".nav");

  const a = `<a class="p-2 text-muted" href="#">${content}</a>`;
  parent.innerHTML += a;
};
addLinkToNav("new link"); */

window.onload = function () {
  addNewLink();
  changeTitleColor();
  changeBgColorJumbotron();
  removeAllLinks();
  changeColSize();
  removeSearch();
};

/* EX12) Write a function to change the color of the main title */
function changeTitleColor() {
  let title = document.querySelector(".jumbotron h1");
  title.style.color = "blue";
}
changeTitleColor();

/* EX13) Write a function to change the background of the jumbotron */
function changeBgColorJumbotron() {
  let jumbotronCol = document.querySelector(".jumbotron");
  jumbotronCol.classList.remove("bg-dark");
  jumbotronCol.classList.remove("text-white");
}
changeBgColorJumbotron();

/* EX14) Write a function to remove all the links under "Elsewhere" */
function removeAllLinks() {
  let linkElseWhere = document.querySelector(
    ".blog-sidebar > div:last-of-type ol"
  );
  linkElseWhere.innerHTML = "";
}

removeAllLinks();

/* EX15) Write a function to change the column size for heading in jumbotron */
function changeColSize() {
  let columnSize = document.querySelectorAll(".jumbotron + div .col-md-6");
  console.log(columnSize);
  columnSize.forEach((col) => {
    col.className = "col-md-4";
  });
}
changeColSize();

/* EX16) Write a function to remove the "Search" magnifying glass icon */

function removeSearch() {
  let searchIcon = document.querySelector(
    ".blog-header .row > div:last-of-type > a"
  );
  searchIcon.innerHTML = "";
}
removeSearch();

/* const removeSearch = function () {
  const div = document.querySelector(
    ".blog-header .row div:last-of-type"
  );
  console.log(div);
  div.children[0].remove();
};
removeSearch(); */

/* EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post */
function trimPost() {
  const posts = document.querySelectorAll(".blog-post p:nth-child(3)");
  console.log(posts);
  posts.forEach((post) => {
    post.innerText = post.innerText.substring(150);
  });
}
/* trimPost() */

/* EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title) */
function addNewPost(title = "New Post") {
  const parentElement = document.querySelector(".blog-main");
  const nextSibling = document.querySelector(".blog-pagination");

  const newPostDiv = document.createElement("div");
  newPostDiv.classList.add("blog-post");

  const newPostTitle = document.createElement("h2");
  newPostTitle.classList.add("blog-post-title");
  newPostTitle.innerText = title;

  newPostDiv.appendChild(newPostTitle);
  parentElement.insertBefore(newPostDiv, nextSibling);
}
addNewPost();

/* EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post */
function removeLastBlog() {
  const btn = document.querySelectorAll(".blog-pagination a")[0];
  btn.removeAttribute("href");
  btn.addEventListener("click", function () {
    const blogs = document.querySelectorAll(".blog-post");
    blogs[blogs.length - 1].remove();
  });
}
removeLastBlog();

/* EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name */
function alertAuthors() {
  const authors = document.querySelectorAll(
    " main .blog-main .blog-post > h2 + p > a"
  );
  authors.forEach((a) => {
    a.addEventListener("mouseenter", function (e) {
      alert(e.target.innerText);
    });
  });
}
alertAuthors();
