var popupbutton=document.getElementById("popup-button");
var popupoverlay=document.querySelector(".popup-overlay");
var popupbox=document.querySelector(".popup-box");
popupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
})

//selecting book-title-input,book-author-input,book-description-input
var booktitle=document.getElementById("book-title-input");
var bookauthor=document.getElementById("book-author-input");
var bookdecription=document.getElementById("book-description-input");
var addbook=document.getElementById("add-book");
var container=document.querySelector(".container");
addbook.addEventListener("click",function(event){
    event.preventDefault();
    var div=document.createElement("div");
    div.setAttribute("class","box-container");
    div.innerHTML=` <h2>${booktitle.value}</h2>
            <h5>${bookauthor.value}</h5>
            <p>${bookdecription.value}</p>
            <button onclick="deletebook(event)">Delete</button>`;
    container.append(div);
    popupoverlay.style.display="none";
    popupbox.style.display="none";


})
var cancelpopup=document.getElementById("cancel-popup");
cancelpopup.addEventListener("click",function(event){
    event.preventDefault();
    popupoverlay.style.display="none";
    popupbox.style.display="none";

})
//selectind deletebook
function deletebook(event){
    event.target.parentElement.remove();

}

