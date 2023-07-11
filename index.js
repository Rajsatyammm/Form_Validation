const form = document.querySelector('#form');
const password1El = document.querySelector('#password1');
const password2El = document.querySelector('#password2');
const messageContainer = document.querySelector('.message-container');
const message = document.querySelector('#message');

let isValid = false;
let passwordMatch = false;

function validateForm() {
    isValid = form.checkValidity();
    console.log(isValid);
    if(!isValid) {
        message.textContent = 'Please Fill the Form';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    
    if(password1El.value === password2El.value) {
        passwordMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordMatch = false;
        message.textContent = `Password Doesn't Match`;
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }

    if(isValid && passwordMatch) {
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeFormData() {
    const user = {
        name : form.name.value,
        phone : form.phone.value,
        email : form.email.value,
        website : form.website.value,
        password : form.password.value
    };
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    // console.log(e);
    validateForm();
    if(isValid && passwordMatch) {
        storeFormData();
    }
}

form.addEventListener('submit', processFormData);

