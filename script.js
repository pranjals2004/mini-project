document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      document.getElementById('responseMessage').textContent = `Thank you, ${name}! Your message has been sent. We'll get back to you soon.`;
      document.getElementById('responseMessage').style.color = 'white';
    } else {
      document.getElementById('responseMessage').textContent = 'Please fill in all fields before submitting.';
      document.getElementById('responseMessage').style.color = 'red';
    }
    document.getElementById('contactForm').reset();
  });
  