// Function to fetch and display images
const displayImages = async () => {
    try {
      const response = await fetch('/path/to/your/image/file'); // Replace with your image file path
      if (response.ok) {
        const images = await response.json(); // Assuming your image file is in JSON format
        const imageContainer = document.querySelector('.image-container');
        images.forEach(image => {
          const img = document.createElement('img');
          img.src = image.url; // Assuming each image object has a 'url' property
          img.alt = image.alt; // Assuming each image object has an 'alt' property
          imageContainer.appendChild(img);
        });
      } else {
        throw new Error('Failed to fetch images');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to fetch images');
    }
  };
  
  // Call the function to display images when the page loads
  window.addEventListener('load', displayImages);
  