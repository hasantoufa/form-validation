const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');



// check password march

function checkPasswordMatch(pass1,pass2){
    if(pass1.value!==pass2.value){
        showError(pass2,'password do not match')
    }
}
// show error message method
function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}

function showSuccess(input){

    const formControl=input.parentElement;
    formControl.className='form-control success';
}


// event listeners
form.addEventListener('submit',function(e){

    e.preventDefault();

    if(username.value === ''){
        showError(username,'required')
    }
    else{
        showSuccess(username);
    }
    if(email.value === ''){
        showError(email,'required')
    }
    else{
        showSuccess(email);
    }
    if(password.value === ''){
        showError(password,'required')
    }
    else{
        showSuccess(password);
    }
    if(password2.value === ''){
        showError(password2,'required')
    }
    else{
        showSuccess(password2);
    }

    checkPasswordMatch(password,password2)
})
