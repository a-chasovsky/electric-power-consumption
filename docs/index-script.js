// Button 'Наверх'
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// Scroll to element (anchor 'href' analog)
function scrollToID(id) {
    let element = document.getElementById(id);
    element.scrollIntoView({
      block: 'start',
      // behavior: 'smooth',
      inline: 'start'
    });
} 

// Increase size of pictures
function clickSize(img) {
      img.classList.toggle('change-size');
    }

// Tracking sections with menu
window.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      // if (entry.intersectionRatio > 0) {
      if (entry.intersectionRatio > 0) {
        document.querySelector(`nav li a[id="#${id}"]`).parentElement.classList.add('active');
      } else {
        document.querySelector(`nav li a[id="#${id}"]`).parentElement.classList.remove('active');
      }
    });
  });
    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
});
});