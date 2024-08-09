const notescontainer = document.querySelector(".container");
const createBtn = document.querySelector(".btn");  
let notes =  document.querySelector(".input-box");

createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    notescontainer.appendChild(inputBox).appendChild(img);
})