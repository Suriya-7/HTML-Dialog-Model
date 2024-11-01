const openbtn = document.querySelector('#open-btn');
const closebtn = document.querySelector('#close-btn');
const dialog = document.querySelector("dialog"); 

openbtn.addEventListener("click", () => dialog.showModal());
closebtn.addEventListener("click", () => dialog.close());
