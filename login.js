// Function to handle login form submission
function login(event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Retrieve user data from localStorage
    var userData = JSON.parse(localStorage.getItem('userData')) || [];

    // Find user by username
    var user = userData.find(function(user) {
        return user.username === username;
    });

    if (user && user.password === password) {
        // Authentication successful, redirect to home page
        window.location.href = "about.html";
    } else {
        // Authentication failed, show error message
        alert("Invalid username or password. Please try again.");
    }
}

// Event listener for login form submission
document.getElementById('loginForm').addEventListener('submit', login);
