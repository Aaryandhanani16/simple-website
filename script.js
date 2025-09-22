// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Add to Cart button
const addCartButtons = document.querySelectorAll('.add-cart');
addCartButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const shoe = btn.getAttribute('data-shoe');
    alert(`Added ${shoe} to cart!`);
  });
});

// Contact form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMsg = document.getElementById('formMsg');
    let error = '';
    if (name.length < 2) {
      error = 'Please enter a valid name.';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      error = 'Please enter a valid email.';
    } else if (message.length < 10) {
      error = 'Message should be at least 10 characters.';
    }
    if (error) {
      formMsg.textContent = error;
      formMsg.style.color = '#ff6f61';
    } else {
      formMsg.textContent = 'Message sent!';
      formMsg.style.color = 'green';
      contactForm.reset();
    }
  });
}
