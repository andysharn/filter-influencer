const axios = require('axios');

// Replace with your actual API Gateway URL and resource path
const apiUrl = 'your_api';

// Function to fetch filtered data from API
async function fetchFilteredData(queryParams) {
    try {
        const response = await axios.get(apiUrl, {
            params: queryParams,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log('Filtered Data:', response.data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Example query parameters (modify as needed)
const queryParams = {
    country: 'india', 
};

fetchFilteredData(queryParams);
