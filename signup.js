// Function to handle signup form submission
function signup(event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Retrieve existing user data from localStorage or initialize an empty array
    var userData = JSON.parse(localStorage.getItem('userData')) || [];

    // Check if the username already exists
    var existingUser = userData.find(function (user) {
        return user.username === username;
    });

    if (existingUser) {
        alert("Username already exists. Please choose a different username.");
        return; // Exit the function
    }

    // Add the new user to the userData array
    userData.push({ username: username, password: password });

    try {
        // Save the updated userData array back to localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Redirect to login page
        window.location.href = "Login.html";
    } catch (error) {
        // Handle any errors that may occur during localStorage operation
        console.error("Error saving user data to localStorage:", error);
        alert("An error occurred. Please try again later.");
    }
}

// Event listener for signup form submission
document.getElementById('signupForm').addEventListener('submit', signup);
