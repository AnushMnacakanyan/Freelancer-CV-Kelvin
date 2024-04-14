const nav = document.querySelector('#nav')
const navBtn = document.querySelector('#nav-btn')
const navBtnImg = document.querySelector('#nav-btn-img')

// navBtn.onClick = () => {
//     if (nav.classList.toggle('open')) {
//         navBtnImg.src = "./img/icons/nav-close.svg";
//     } else {
//         navBtnImg.src = "./img/icons/NAV.svg";
//     }
// }

navBtn.addEventListener("click",()=>{
    nav.classList.toggle("open");
});

AOS.init({
    // once:true
});