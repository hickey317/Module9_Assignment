document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let formIsValid = true;
    let messages = [];

    // Name validation
    const name = document.getElementById('name').value;
    if (name.length < 3) {
        messages.push('Name must be at least 3 characters long.');
        formIsValid = false;
    }

    // Year of birth validation
    const yearOfBirth = parseInt(document.getElementById('yearOfBirth').value, 10);
    if (yearOfBirth < 1901 || yearOfBirth > 2099) {
        messages.push('Year of birth must be between 1901 and 2099.');
        formIsValid = false;
    }

    // US resident and zipcode validation
    const usResident = document.getElementById('usResident').checked;
    const zipcode = document.getElementById('zipcode').value;
    if (usResident && zipcode.length !== 5) {
        messages.push('Zipcode must be 5 digits long.');
        formIsValid = false;
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        messages.push('Password must be at least 8 characters long.');
        formIsValid = false;
    }

    // Display messages or success
    const formMessages = document.getElementById('formMessages');
    if (formIsValid) {
        formMessages.innerHTML = '<p>Accepted</p>';
        formMessages.style.color = 'green';
    } else {
        formMessages.innerHTML = '<p>' + messages.join('</p><p>') + '</p>';
        formMessages.style.color = 'red';
    }
});
