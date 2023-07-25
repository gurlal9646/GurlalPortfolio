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


//Project cards

  function createProjectCard(project) {
      return `
        <div class="project-card">
          <img src="${project.imageSrc}" alt="" />
          <div class="card-overlay">
            <a href="${project.link}" target="_blank">
              <i class="bx bx-link-alt"></i>
            </a>
          </div>
        </div>
      `;
    }

    // Function to render the project cards
    function renderProjectCards(projectsData) {
      const container = document.getElementById("project-container");

      // Loop through the JSON data and generate project cards
      for (const project of projectsData) {
        const cardHtml = createProjectCard(project);
        container.innerHTML += cardHtml;
      }
    }

    // Fetch the JSON data and render the project cards
    fetch('projects.json')
      .then(response => response.json())
      .then(data => renderProjectCards(data))
      .catch(error => console.error('Error fetching JSON:', error));
