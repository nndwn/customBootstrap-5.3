// $("#lang").click(function() {
//     $(".lang-menu").toggle()
// })


const elementClicked = document.querySelector("#lang");
const x = document.querySelector(".lang-menu");

elementClicked.addEventListener("click", ()=>{
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
});

const pop = document.querySelectorAll(".pop");
for (let i = 0; pop.length > i; i++){
  pop[i].addEventListener("click", ()=>{
    const nopage = document.querySelectorAll("#Nopages")[0]
    const nopage1 = document.querySelectorAll("#Nopages")[1]
      if (nopage.style.opacity==="0"){
        nopage.style.opacity==="0"
      } else {
        nopage.style.opacity = "0";
      }
      if (nopage1.style.opacity==="0"){
        nopage1c
      } else {
        nopage1.style.opacity = "0";
      }

  })
}


// window.scroll(function() {
//     let hT = document.getElementById("scroll-to").offset().top,
//         hH = document.getElementById("scroll-to").outerHeight(),
//         wH = window.height(),
//         wS = this.scrollTop();
//     if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
//        $('h1').classList.add("view")
//     } else {
//        $('h1').classList.remove("view")
//     }
//  });

function footer(){
    const str = document.getElementById("footer");
    const year = new Date().getFullYear();
        str.textContent = `${year}. Dailyhopeless. Batam, Indonesia.`
}

 footer()

const service = document.querySelector('#mainTitleArea');
const serviceTop = service.offsetTop;
const contact = document.querySelector('#contact');
const contactTop = contact.offsetTop - 100;


const navAbout = document.querySelectorAll('.currentLine')[0].style.cssText = 'left: 40px; width: 50px';
const navAboutMobile = document.querySelectorAll('.currentLine')[1].style.cssText = 'left: 16px; width: 50px;';

function navigationPC() {
const navAktiv = document.querySelectorAll('.navigationPC li');
const navAktivMobile = document.querySelectorAll('.navMobile li');
if(window.outerWidth >= 992) {
  if (window.scrollY >= serviceTop && window.scrollY <= contactTop  ) {
    document.querySelector('.currentLine').style.cssText = 'left:172px; width: 60px';
    navAktiv[0].classList.remove('active');
    navAktiv[1].classList.add('active');
    navAktiv[2].classList.remove('active');
  } else if (window.scrollY >= contactTop ){
    document.querySelector('.currentLine').style.cssText = 'left: 317px; width: 62px';
    navAktiv[0].classList.remove('active');
    navAktiv[1].classList.remove('active');
    navAktiv[2].classList.add('active');
  } else {
    document.querySelector('.currentLine').style.cssText = 'left: 40px; width: 50px';
    navAktiv[0].classList.add('active');
    navAktiv[1].classList.remove('active');
    navAktiv[2].classList.remove('active');
  }
}else{
    if (window.scrollY >= serviceTop && window.scrollY <= contactTop  ) {
        document.querySelector('.navMobile .currentLine').style.cssText = 'left:108px; width: 60px';
        navAktivMobile[0].classList.remove('active');
        navAktivMobile[1].classList.add('active');
        navAktivMobile[2].classList.remove('active');
      } else if (window.scrollY >= contactTop ){
        document.querySelector('.navMobile .currentLine').style.cssText = 'left: 215px; width: 62px';
        navAktivMobile[0].classList.remove('active');
        navAktivMobile[1].classList.remove('active');
        navAktivMobile[2].classList.add('active');
      } else {
        document.querySelector('.navMobile .currentLine').style.cssText = 'left: 16px; width: 50px';
        navAktivMobile[0].classList.add('active');
        navAktivMobile[1].classList.remove('active');
        navAktivMobile[2].classList.remove('active');
      }
}}




const resize = document.getElementById('mvArea');
window.addEventListener('scroll', ()=>{ 
    if ( window.scrollY > 0) {
        resize.classList.add("resize");
    } else {
        resize.classList.remove("resize");
    }
    navigationPC()
});

