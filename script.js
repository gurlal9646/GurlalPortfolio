// Activate menu btn
let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menu-bar');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('bx-x');
  menuBar.classList.toggle('active');
};

window.onscroll = () =>{
    menuBtn.classList.remove('bx-x');
  menuBar.classList.remove('active');
}

//scroll reveal

ScrollReveal({
    reset:true,
    distance:'100px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-bio h1', { origin: 'left' });
ScrollReveal().reveal('.home-bio p', { origin: 'right' });
ScrollReveal().reveal('.home-bio, heading', { origin: 'top' });
ScrollReveal().reveal('.profile-pic, .about-items, .skills-items, .projects-items, .education-items, .form, .experience-items', { origin: 'bottom' });

//Typing animation
const animText = new Typed('.animated-text',{
    strings:['Student', 'Front-End Web Developer', 'Back-End Web Developer', '.Net Developer'],
    backSpeed:100,
    typeSpeed:100,
    backDelay:600,
    loop: true
})