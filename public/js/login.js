const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
    // Add this code to handle property click event
const handlePropertyClick = async () => {
  // Your property click event handling logic here
};

// Attach event listener to handle property click event
document.addEventListener('click', async (event) => {
  if (event.target.classList.contains('property-image')) {
    const propertyId = event.target.dataset.propertyId;
    try {
      const response = await fetch(`/api/properties/${propertyId}`);
      if (response.ok) {
        const propertyData = await response.json();
        // Display property information
        console.log(propertyData);
      } else {
        throw new Error('Failed to fetch property information');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to fetch property information');
    }
  }
});

// Add this line to trigger property click event handler
handlePropertyClick();
  