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