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
});

window.scroll(function() {
    let hT = document.getElementById("scroll-to").offset().top,
        hH = document.getElementById("scroll-to").outerHeight(),
        wH = window.height(),
        wS = this.scrollTop();
    if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
       $('h1').classList.add("view")
    } else {
       $('h1').classList.remove("view")
    }
 });

function footer(){
    const str = document.getElementById("footer");
    const year = new Date().getFullYear();
        str.textContent = `${year}. Dailyhopeless. Batam, Indonesia.`
}

 footer()