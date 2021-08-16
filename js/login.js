document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);

    // check userPassword and userEmail
    if (userEmail == 'satueee18@gmail.com' && userPassword == '1802231') {
        window.location.href = 'banking.html';
    }
})
