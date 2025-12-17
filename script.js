/* Typing Effect */
const text = "Frontend Developer";
let i = 0;
const typing = document.getElementById("typing");

function type(){
  if(i < text.length){
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
type();

/* Scroll Reveal & Active Nav */
const reveals = document.querySelectorAll('.reveal');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {

  reveals.forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add('active');
    }
  });

  let current = '';
  sections.forEach(section => {
    if(pageYOffset >= section.offsetTop - 150){
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === '#' + current){
      link.classList.add('active');
    }
  });

});
