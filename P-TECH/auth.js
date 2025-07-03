var username = document.getElementById('username');
var password = document.getElementById('password');
var loginButton = document.getElementById('loginButton');
var errorMessage = document.getElementById('errorMessage');
loginButton.addEventListener('click', function(event) {
    event.preventDefault();
    var user = username.value;
    var pass = password.value;

    if (user === 'admin@ptech.com' && pass === 'admin123') {
        alert('Login successful!');
        // Redirect to the homepage or dashboard
        window.location.href = 'p-structure.html';
    } else {
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.style.display = 'block';
    }
});
// Function to handle signup
function handleSignup() {
    var signupUsername = document.getElementById('signupUsername').value;
    var signupPassword = document.getElementById('signupPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (signupPassword === confirmPassword) {
        alert('Signup successful! You can now log in.');
        // Redirect to the login page
        window.location.href = 'login.html';
    } else {
        alert('Passwords do not match. Please try again.');
    }
}