# Eugene Zanevskij

## Contacts:

+ Location: Grodno, Belarus
+ Email: zanevskijzenia@gmail.com
+ GitHub: [eugenezanevskij](https://github.com/EugeneZanevskij)
+ LinkedIn: [eugene-zanevskij](https://www.linkedin.com/in/eugene-zanevskij/)

## About me:

A resourceful and motivated student pursuing a Bachelor of Information Resource Management looking forward to becoming Front-End developer.
Not a long time ago (4 months) I realized that I wanted to be a front-end developer. Since that day, I have been constantly learning.
My discipline and perseverance will help me to reach my goal, and [rolling-scopes](https://rs.school/) will be a tool to achieve it.

## Skills:
+ ООП
+ HTML5
+ CSS3
+ JavaScript (ES6+)
+ Git
+ React JS (basic knowledge)
+ Figma
+ Sass (basic knowledge)

## Code example

Working on my portfolio page I implemented scroll sections active link functionality:

```js
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
```

## Education

+ GrSU Yanka Kupala (2020 - current)

### Courses

+ [JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/certification/Eugene29/javascript-algorithms-and-data-structures) on freeCodeCamp (Oct, 2022)

+ [JavaScript for Beginners](https://stepik.org/cert/1888775) on Stepik (Dec, 2022)

+ [Веб-разработка для начинающих: HTML и CSS](https://stepik.org/cert/1775379) on Stepik (Jan, 2023)

+ [Responsive Web Design](https://www.freecodecamp.org/certification/Eugene29/responsive-web-design) on freeCodeCamp (Feb, 2023)

## My projects

+ [Plants app](https://eugenezanevskij.github.io/plants/plants/) 
+ [Tip Calculator](https://eugenezanevskij.github.io/Tip-calculator/)
+ [Uber Eats](https://eugenezanevskij.github.io/Uber-Eats/)

## Languages:
+ Russian - Native
+ English - B2 (Upper-Intermediate)

Completed General English Course at Upper Intermediate level (CEFR B2) 

[Certificate of completion](https://cert.str.by/streamline-certificate/BEE087427DBC6599224E8DC5682D6955)