


function myFunc(event){
    event.preventDefault();

    let email =document.getElementById("email").value;
    let password =document.getElementById("password").value;



    // add items value : to local Storage.
    localStorage.setItem('Your email :',email );
    localStorage.setItem('Your password:',password);

     // For agar data submit hojai , alert the user
    //  alert('Email and password saved to local storage.');

     // form submit hone k bad : clear the form
    //  document.getElementById('loginForm').reset();

};