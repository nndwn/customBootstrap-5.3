// $("#lang").click(function() {
//     $(".lang-menu").toggle()
// })

const elementClicked = document.querySelector("#lang");
const elementYouWantToShow = document.querySelector(".lang-menu");

elementClicked.addEventListener("click", ()=>{
  elementYouWantToShow.classList.toggle("show");
});

const resize = document.getElementById('mvArea');
window.addEventListener('scroll', ()=>{ 
    if ( window.scrollY > 0) {
        resize.classList.add("resize");
    } else {
        resize.classList.remove("resize");
    }
    console.log(scroller);
});