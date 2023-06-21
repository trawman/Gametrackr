ScrollReveal().reveal('.container', {
    duration: 1000,
    distance: '50px',
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: true
  });
  
function scrollToSection(target) {
  const element = document.querySelector(target);
  window.scrollTo({
    top: element.offsetTop,
    behavior: 'smooth'
  });
}

const setaImagem = document.querySelector('.seta');
setaImagem.addEventListener('click', function() {
  scrollToSection('#bottom');
});


document.addEventListener("DOMContentLoaded", function() {

  var setaImg = document.getElementById("seta-img");

 
  setaImg.addEventListener("click", function(event) {
   
    event.preventDefault();

   
    var bottomElement = document.getElementById("bottom");
    bottomElement.scrollIntoView({ behavior: "smooth" });
  });
});
