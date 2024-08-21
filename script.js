// Add event listener to navigation menu items
document.querySelectorAll('nav ul li a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = document.querySelector(`#${link.getAttribute('href').substring(1)}`);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Add animation to animated image
  const animatedImage = document.querySelector('.animated-image');
  animatedImage.addEventListener('mouseover', () => {
    animatedImage.classList.add('animate');
  });
  
  animatedImage.addEventListener('mouseout', () => {
    animatedImage.classList.remove('animate');
  });
  
  // Add form validation to contact form
  const contactForm = document.querySelector('.contact form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
  
    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
      alert('Please fill out all fields!');
    } else {
      // Send form data to server or perform other action
      console.log('Form submitted!');
    }
  });