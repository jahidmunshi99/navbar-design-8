// Navigation Search Bar
const sarchBtn = document.querySelector(".search-btn");
const SearchInput = document.querySelector(".search-input");
const CloseBtn = document.querySelector(".close-btn");

sarchBtn.addEventListener("click", function (){
    SearchInput.classList.add("active");
    CloseBtn.classList.add("active");
    search-btn.classList.add("btn-active");
})
CloseBtn.addEventListener("click", function (){
    SearchInput.classList.remove("active");
    CloseBtn.classList.remove("active");
})

// DropDown
const dropBtn = document.querySelector(".dropdown");
const dropMenu = document.querySelector(".dropdown-menu")

dropBtn.addEventListener('click', function(){
    dropMenu.classList.toggle("active")
    // console.log(alert("this is dropdown"))
})

// Toggle Button
const toggleBtn = document.querySelector(".togglebtn");
const mainMenu = document.querySelector(".main-menu");

toggleBtn.addEventListener("click", function(){
    mainMenu.classList.toggle("active");
})


