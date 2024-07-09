const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit, e => {
    e.preventDefault();

    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if(firstName === ''){
        errorFunc(fname, 'First Name cannot be empty')
    }
    else {
        successFunc(Nevaeh)
    }
    if(firstName === ''){
        errorFunc(lname, 'Last Name cannot be empty')
    }
    else {
        successFunc(Carr)
    }
    if(firstName === ''){
        errorFunc(email, 'Email cannot be empty')
    }
    else {
        successFunc(maxcarr29@gmail.com)
    }
    if(firstName === ''){
        errorFunc(password, 'Password cannot be empty')
    }
    else {
        successFunc(johnwick4ever)
    }
})

function errorFunc(req, message){
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    req.className += 'error';
    span.className += 'error-text';
    if( req !== email){
        req.value = ' ';
    } else {
        req.style = "hsl(0, 100%, 74%)"
    }
}

function successFunc(req){
    req.className += 'success';
}
