function remToPx(rem) {
  let rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
  return rem * rootFontSize;
}



/* --------------------------------------*/
/* --------   Nav Button    -------------*/
/* --------------------------------------*/

// about button moving

let aboutSectionMove = document.querySelector("#About");
let aboutSection = document.querySelector(".container-about");

aboutSectionMove.addEventListener("click", function (event) {
  event.preventDefault();
  aboutSection.scrollIntoView({
    behavior: "smooth", // حركة سلسة
    block: "center" 
  });
  about.classList.remove("section-hidden");
})
//---------------------------------------------------
// home button move
let heroSectionMove = document.querySelector("#Home");
let heroSection = document.querySelector(".Hero-container");

heroSectionMove.addEventListener("click", function (event) {
  event.preventDefault();
  heroSection.scrollIntoView({
    behavior: "smooth", // حركة سلسة
    block: "center" 
  });
  about.classList.remove("section-hidden");
})

// coffee button move
let coffeeSectionMove = document.querySelector("#coffee");
let coffeeSection = document.querySelector(".menuCoffee");

coffeeSectionMove.addEventListener("click", function (event) {
  event.preventDefault();
  coffeeSection.scrollIntoView({
    behavior: "smooth", // حركة سلسة
    block: "center" 
  });
  about.classList.remove("section-hidden");
})

// bakery button move
let bakerySectionMove = document.querySelector("#bakery");
let bakerySection = document.querySelector(".menuBakery");

bakerySectionMove.addEventListener("click", function (event) {
  event.preventDefault();
  bakerySection.scrollIntoView({
    behavior: "smooth", // حركة سلسة
    block: "center" 
  });
  about.classList.remove("section-hidden");
})

// coffee button move
let contactSectionMove = document.querySelector("#contact");
let contactSection = document.querySelector(".contact-container");

contactSectionMove.addEventListener("click", function (event) {
  event.preventDefault();
  contactSection.scrollIntoView({
    behavior: "smooth", // حركة سلسة
    block: "center" 
  });
  about.classList.remove("section-hidden");
})






/* --------------------------------------*/
/* ----------   Header   ----------------*/
/* --------------------------------------*/

let nav = document.querySelector("header");
let navSearch = document.querySelector('.search-icon');
let navBar = document.querySelector("nav");


let navOpacity = function(e){

let link = e.target;
let currentLink = link.closest('header').querySelectorAll('.nav-link');
currentLink.forEach(element => {
    if(link === element ){
        element.style.opacity = this;
    }
    if(link === navSearch){
    navSearch.style.opacity = this;
  }

})
}


nav.addEventListener('mouseover',navOpacity.bind(1));
nav.addEventListener('mouseout',navOpacity.bind(.5));


/* --------------------------------------*/
/* -----  sticky for header   -----------*/
/* --------------------------------------*/

//  let headerSticky = document.querySelector("header");
//  let headerHeight = headerSticky.getBoundingClientRect().height;

// let headerSticky = document.querySelector(".HeroSection");
// let navHeight = nav.getBoundingClientRect().height;

// window.addEventListener("scroll", () => {
//   if (window.scrollY > headerHeight + 100) {
//     headerSticky.classList.add("sticky");
//   } else {
//     headerSticky.classList.remove("sticky");
//   }
// });

let headerSticky = document.querySelector(".setpoint"); // have problem with herosection
let navHeight = navBar.getBoundingClientRect().height;
let setpoint = document.querySelector(".Hero-container"); // have problem with herosection


let headerObserverSticky = function(entiers){
  let [entry] = entiers;
  if(!entry.isIntersecting){
    navBar.classList.add("sticky");
    setpoint.classList.add("activeSticky");
  }else{
    navBar.classList.remove("sticky");
    setpoint.classList.remove("activeSticky");

  }
}

let headerObserver = new IntersectionObserver(headerObserverSticky,{
  root:null,
  threshold:0,
  // rootMargin: `-${100}px`
});

headerObserver.observe(headerSticky);




/* --------------------------------------*/
/* --   Hero section Button order now   --*/
/* --------------------------------------*/
const heroOrderNow = document.querySelector('.hero-orderNow');



heroOrderNow.addEventListener('mouseout',function(){
  heroOrderNow.style.backgroundColor = "#ffd097";
  heroOrderNow.style.color="#000";
});
heroOrderNow.addEventListener('mouseover',function(){
  heroOrderNow.style.backgroundColor = "#b47931";
  heroOrderNow.style.color="#fff";
});

/* --------------------------------------*/
/* -------   backgroundCover  -----------*/
/* --------------------------------------*/

const backgroundCover = document.querySelector(".backgroundCover");
let checkBackgroundCover = true;
const HeroSection = document.querySelector(".HeroSection")
backgroundCover.addEventListener('click',function(){
  if(checkBackgroundCover === true){
    backgroundCover.textContent = "Light"
    checkBackgroundCover = false;
    HeroSection.style.backgroundImage =
    "linear-gradient(to right bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('./img/cover-3.jpeg')";

  }
  else{
    backgroundCover.textContent = "Dark"
    checkBackgroundCover = true;
    HeroSection.style.backgroundImage =
    "linear-gradient(to right bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('./img/cover-2.jpeg')";
  }
})

/* --------------------------------------*/
/* ------------   About  ----------------*/
/* --------------------------------------*/

let about = document.querySelector(".about-card");
let aboutContainer = document.querySelector(".container-about");
let h = aboutContainer.getBoundingClientRect().height;
let aboutsection = function(entiers){
  let [entry] = entiers;
  console.log(entry.isIntersecting);
console.log(h);

  if(entry.isIntersecting){  
    about.classList.remove("section-hidden");  // عندما يصبح العنصر مرئيًا، قم بإظهاره
    aboutloopPhotos();
    console.log("1");
  } 

}

let aboutObserver = new IntersectionObserver(aboutsection,{
  root:null,
  threshold:0.3,
})

aboutObserver.observe(aboutContainer);

//--------------
// let aboutImage = document.querySelector(".ImageAbout")
// async function aboutloopPhotos() {
//   for (let i = 1; i < 8; i++) {
//     await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 1 second
//     // console.log(`about image ${i}`);
//     aboutImage.src = `img/about image ${i}.jpg`; // Assuming an <img id="photo">
//   }
// }
// console.log("2");


/* --------------------------------------*/
/* ------   Menu coffee sectin  ---------*/
/* --------------------------------------*/

let menuCoffee = document.querySelectorAll(".cardCoffee");
console.log(menuCoffee);

let maxMenuCoffee = menuCoffee.length;
let constMenuView = 5;
let currentSilde = 0;

console.log(maxMenuCoffee);

let btnCoffeeRight = document.querySelector(".btn__right");
let btnCoffeeLeft = document.querySelector(".btn__left");


let btnCoffeeMenuOpacity__R = document.querySelector(".btn__right");
let btnCoffeeMenuOpacity__L = document.querySelector(".btn__left");


let btnRightMenuCoffee = function(){
  if(currentSilde < (maxMenuCoffee - constMenuView)){
    currentSilde++;
  }
  if(currentSilde === (maxMenuCoffee - constMenuView) ){
    btnCoffeeMenuOpacity__R.style.opacity = 0;
  }

  goToSide(-currentSilde);


  
}

let btnLeftMenuCoffee = function(){
  if(currentSilde > 0){
    currentSilde--;
  }
  if(currentSilde < (maxMenuCoffee - constMenuView) ){
    btnCoffeeMenuOpacity__R.style.opacity = 1;
  }


  goToSide(-currentSilde);
}
let goToSide = function(side){
  menuCoffee.forEach((e,i)=>{
      
    e.style.transform = `translateX(${remToPx(36.1)*(side)}px)`;
    })
}

goToSide(currentSilde);
btnCoffeeLeft.addEventListener('click',btnLeftMenuCoffee);
btnCoffeeRight.addEventListener('click',btnRightMenuCoffee);


/* --------------------------------------*/
/* ------   Menu coffee sectin  ---------*/
/* --------------------------------------*/

let menuBakery = document.querySelectorAll(".cardBakery");


let maxMenuBakery = menuBakery.length;

let constMenuViewBakery = 5;
let currentSildeBakery = 0;



let btnBakeryRight = document.querySelector(".btn_Bakery_right");
let btnBakeryLeft = document.querySelector(".btn_Bakery_left");


let btnBakeryMenuOpacity__R = document.querySelector(".btn_Bakery_right");
let btnBakeryMenuOpacity__L = document.querySelector(".btn_Bakery_left");

let chechWidth = function(){
  if(document.querySelector('body').getBoundingClientRect().width > 1800){
    constMenuViewBakery = 5;
  }
  else if(document.querySelector('body').getBoundingClientRect().width > 1600){
    constMenuViewBakery = 4;
  }
  else if(document.querySelector('body').getBoundingClientRect().width > 1400){
    constMenuViewBakery = 3;
  }
  else if(document.querySelector('body').getBoundingClientRect().width > 1100){
    constMenuViewBakery = 2;
  }
  else {
    constMenuViewBakery = 1;
  }
  console.log(document.querySelector('body').getBoundingClientRect().width)
  console.log(constMenuViewBakery);
}

let btnRightMenuBakery = function(){
  chechWidth();
  if(currentSildeBakery < (maxMenuBakery - constMenuViewBakery)){
    currentSildeBakery++;
  }
  if(currentSildeBakery === (maxMenuBakery - constMenuViewBakery) ){
    btnBakeryMenuOpacity__R.style.opacity = 0;
  }

  goToSideBakery(-currentSildeBakery);


  
}

let btnLeftMenuBakery = function(){
  chechWidth();
  if(currentSildeBakery > 0){
    currentSildeBakery--;
  }
  if(currentSildeBakery < (maxMenuBakery - constMenuViewBakery) ){
    btnBakeryMenuOpacity__R.style.opacity = 1;
  }


  goToSideBakery(-currentSildeBakery);
}
let goToSideBakery = function(side){
  menuBakery.forEach((e,i)=>{
      
    e.style.transform = `translateX(${remToPx(36.1)*(side)}px)`;
    })
}


let startX, endX; 

menuBakery.forEach((e) => {
    e.addEventListener("touchstart", function (event) {
        startX = event.touches[0].clientX; // حفظ موقع بدء اللمس
    });

    e.addEventListener("touchend", function (event) {
        endX = event.changedTouches[0].clientX; // حفظ موقع نهاية اللمس

        let diffX = endX - startX; // حساب الفرق بين البدء والنهاية

        if (diffX > 50) {
            // سحب لليمين
            btnLeftMenuBakery();
        } else if (diffX < -50) {
            // سحب لليسار
            btnRightMenuBakery();
        }
    });
});

goToSide(currentSilde);
btnBakeryLeft.addEventListener('click',btnLeftMenuBakery);
btnBakeryRight.addEventListener('click',btnRightMenuBakery);



/* --------------------------------------*/
/* ------   Heart  sectin swap  ---------*/
/* --------------------------------------*/

let heart = document.querySelectorAll(".menuHeart");

let swapHeart = function(e){
  let card = e.currentTarget; // الكارت الذي يحتوي على القلوب
    let whiteHeart = card.querySelector(".wHeart"); // القلب الفارغ
    let redHeart = card.querySelector(".heartred"); // القلب الممتلئ

    // تبديل الكلاسات لإظهار الأحمر وإخفاء الأبيض
    whiteHeart.classList.toggle("heartOpicty0"); // إخفاء/إظهار القلب الأبيض
    redHeart.classList.toggle("heartOpicty0"); 

}

heart.forEach((h) => {
  h.addEventListener("click", swapHeart);
});




