document.getElementById('theme-switcher').addEventListener('click', function(){
    document.body.classList.toggle('dark-mode')
})

var scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', function(){
    if(window.scrollY > 200){
        scrollToTopButton.style.display = 'block';
    }else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', function(){
    window.scrollTo({top: 0,behavior: 'smooth'});
})

document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

     // controleer of de naam is ingevuld
     if (name === '') {
        document.getElementById('name-error').textContent = 'Vul a.u.b. je naam in.';
    } else {
        document.getElementById('name-error').textContent = '';
    }

    // controleer of de e-mail geldig is
    if (!email.includes('@')) {
        document.getElementById('email-error').textContent = 'Vul a.u.b. een geldig e-mailadres in.';
    } else {
        document.getElementById('email-error').textContent = '';
    }

    // controleer of het bericht is ingevuld
    if (message === '') {
        document.getElementById('message-error').textContent = 'Vul a.u.b. een bericht in.';
    } else {
        document.getElementById('message-error').textContent = '';
    }
});

const projecten = [
    {
        titel: 'project 1',
        beschrijving: 'Dat is project 1.',
        link:'#'
    },
    {
        titel: 'Project 2',
        beschrijving: 'Beschrijving van project 2.',
        link: '#'
    }
];

function genereerProjectHTML(project){
    return`
    <div class="project-card">
    <h3>${project.titel}</h3>
    <p>${project.beschrijving}</p>
    <a href="${project.link}">GITHUB</a>
    </div>
    `;
}

var projectenContainer = document.getElementById('projects');

projecten.forEach(function(project) {
    var projectHTML = genereerProjectHTML(project);
    projectenContainer.innerHTML += projectHTML;
});

let projecten1 = {naam: 'Project A', status: 'In uitvoering', leden: ['Lid1', 'Lid2']};
let {naam, status, leden} = projecten1;
console.log(naam); 
console.log(status); 
console.log(leden); 

let oudeLeden = ['Lid1', 'Lid2'];
let nieuweLeden = [...oudeLeden, 'Lid3'];
console.log(nieuweLeden);

let {naam: naam1, ...rest} = projecten1;
console.log(naam1); 
console.log(rest);

let projectenLijst = [
    {naam: 'Project A', status: 'In uitvoering', leden: ['Lid1', 'Lid2']},
    {naam: 'Project B', status: 'Voltooid', leden: ['Lid3', 'Lid4']},
    {naam: 'Project C', status: 'Niet gestart', leden: ['Lid5', 'Lid6']}
  ];
  
  // Gebruik de forEach()-methode om over de array te itereren
  projectenLijst.forEach(project => {
    console.log(`Naam: ${project.naam}`);
    console.log(`Status: ${project.status}`);
    console.log(`Leden: ${project.leden.join(', ')}`);
  });

  // Arrow function
const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  };
  
