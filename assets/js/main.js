const navLinks = document.querySelectorAll(".nav__link");
const toggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
const tabs = document.querySelectorAll("[data-target");
const tabContents = document.querySelectorAll("[data-content");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    navLinks.forEach((navLinkItem) => {
      navLinkItem.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  toggle.classList.toggle("active");
  navMenu.addEventListener("click", () => {
    navMenu.classList.remove("active");
    toggle.classList.remove("active");
  });
});

/*Experience tabs*/
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach(tabContent => {
      tabContent.classList.remove("active");
    });
    target.classList.add("active");

    tabs.forEach(tab => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
  })
})

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 72;
        const sectionId = current.getAttribute('id');
        if(scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    })
}
window.addEventListener('scroll', scrollActive);

/* HEADER ON SCROLL */ 
function scrollHeader(){
  const nav = document.getElementById('header');
  if(this.scrollY >= 72) 
    nav.classList.add('scroll'); 
  else nav.classList.remove('scroll');
}
window.addEventListener('scroll', scrollHeader);

/* SCROLL UP */ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 300) {
    scrollUp.classList.add('scrollup__show');
  } else {
    scrollUp.classList.remove('scrollup__show');
  }
  scrollUp.addEventListener("click", () => {
    scrollTo(0, 0);
  })
}
window.addEventListener('scroll', scrollUp);

