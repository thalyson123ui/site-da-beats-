/* Mobile Menu */

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){ navToggle.addEventListener('click', () => { navMenu.classList.add('show-menu') }) }
if(navClose){ navClose.addEventListener('click', () => { navMenu.classList.remove('show-menu') }) }

/* Removing Mobile Menu by clicking a link */

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* Changing Background Header */

function scrollHeader() {
    const header = document.getElementById('header');

    if(this.scrollY >= 50){
        header.classList.add('scroll-header');
    }else{
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/* Showing Scrollup */

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 200){
        scrollUp.classList.add('show-scroll');
    }else{
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);

/* Scroll Sections Active Link */

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            const navLink = document.querySelector(`.nav-menu a[href*='${sectionId}']`);
            
            if(navLink){
                navLink.classList.add('active-link');
            }
        }else{
            const navLink = document.querySelector(`.nav-menu a[href*='${sectionId}']`);

            if(navLink){
                navLink.classList.remove('active-link');
            }
        }
    })
}
window.addEventListener('scroll', scrollActive);

/*Scroll Reveal Animation*/

const sr = ScrollReveal({ distance: '60px', duration: 2500, delay: 400, })

sr.reveal(`.home-header, .section-title`, {delay: 600})
sr.reveal(`.home-footer`, {delay: 700})
sr.reveal(`.home-img`, {delay: 900, origin: 'top'})

sr.reveal(`.sponsor-img, .products-card, .footer-logo, .footer-content, .footer-copy`, {origin: 'top', interval: 100})

sr.reveal(`.specs-data, .discount-animate`, {origin: 'left', interval: 100})
sr.reveal(`.specs-img, .discount-img`, {origin: 'right'})

sr.reveal(`.case-img`, {origin: 'top'})

