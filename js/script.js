let navCloseBtn = document.querySelector("#closeBtn");
let navList = document.querySelector("#navList");
let navigation = document.getElementById("navigation");


navCloseBtn.addEventListener("click",()=>{
    navList.classList.toggle('show');
})

window.addEventListener("scroll", ()=>{
    navigation.classList.toggle("sticky", window.scrollY > 0 )
})








