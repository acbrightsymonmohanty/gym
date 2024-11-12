document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way
    
    const passwordInput = document.getElementById('password').value;
    const correctPassword = 'sonu@123';
  
    if (passwordInput === correctPassword) {
      window.location.href = 'data.html';
    } else {
      document.getElementById('error-message').textContent = 'Incorrect password. Please try again.';
    }
  });
  