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