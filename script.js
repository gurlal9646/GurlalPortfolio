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

document.addEventListener('DOMContentLoaded', function () {
        const projectsData = [
            {
                "imageSrc": "./images/Krogers_project.png",
                "link": "https://krogersapi.netlify.app/stores.html"
            },
            {
                "imageSrc": "./images/foodonwheels_project.png",
                "link": "https://foodonwhels.netlify.app/html/login"
            },
            {
                "imageSrc": "./images/Spotify_genre_project.png",
                "link": "https://spotifygenres.netlify.app/"
            },
            {
                "imageSrc": "./images/Xieo_project.png",
                "link": "https://portal.xieo.com/login"
            },
            {
                "imageSrc": "./images/Authx_project.png",
                "link": "https://admin.authx.com/login"
            },
            {
                "imageSrc": "./images/bimag_project.png",
                "link": "https://click4bima.in/"
            },
            {
                "imageSrc": "./images/codeditor.png",
                "link": "https://codemodifier.netlify.app/"
            }
        ];

        const projectContainer = document.getElementById('projects');
        const projectGrid = projectContainer.querySelector('.grid');

        projectsData.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');

            const projectImage = document.createElement('img');
            projectImage.src = project.imageSrc;
            projectImage.alt = 'Project Image';

            const projectLink = document.createElement('a');
            projectLink.href = project.link;
            projectLink.target = '_blank';

            projectLink.appendChild(projectImage);
            projectItem.appendChild(projectLink);
            projectGrid.appendChild(projectItem);
        });
    });
