const axios = require('axios');

// Replace with your actual API Gateway URL and resource path
const apiUrl = 'https://70p5uilkq2.execute-api.us-east-1.amazonaws.com/prod';

// Function to fetch filtered data from API
async function fetchFilteredData(queryParams) {
    try {
        const response = await axios.get(apiUrl, {
            params: queryParams,
            headers: {
                // If your API requires headers, add them here
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer your-token',  // If using Bearer token
            },
        });

        // Log the JSON response from the API
        console.log('Filtered Data:', response.data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Example query parameters (modify as needed)
const queryParams = {
    country: 'india', // Replace with your actual query params
};

// Call the function to fetch data
fetchFilteredData(queryParams);
