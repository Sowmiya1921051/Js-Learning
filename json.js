// Function to make a GET request using Fetch
function fetchData() {
    // URL of the API endpoint
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  
    // Make a GET request using Fetch
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response body as JSON
      })
      .then(data => {
        console.log('Response data:', data); // Handle the JSON data
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  
  // Call the fetchData function to make the GET request
  fetchData();
  