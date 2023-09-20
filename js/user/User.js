let form = document.querySelector('#userForm');
form.onsubmit = function(e) {
    let firstName = document.querySelector('#txtFirstName').value;
    let lastName = document.querySelector('#txtLastName').value;
    // let numberPhone = document.querySelector('#txtNumberPhone').value;
    let email = document.querySelector('#txtEmail').value;
    let password = document.querySelector('#txtPassword').value;
    let passwordRepeat = document.querySelector('#txtPasswordRepeat').value;

    if(firstName.value == '' || lastName.value == '' || email.value == '' || password.value == '' || passwordRepeat.value == '') {
        alert('Rellene los campos faltantes.');
        e.preventDefault();
    } else {
        let user = new FormData();
        user.append('firstName', firstName);
        user.append('lastName', lastName);
        // user.append('numberPhone', numberPhone);
        user.append('email', email);
        user.append('password', password);
        e.preventDefault();

        let ajax = new XMLHttpRequest();  
            ajax.open('post', '/php/User/Add.php', true);
            ajax.onload = function() {              
                firstName = document.querySelector('#txtFirstName').value = null;
                lastName = document.querySelector('#txtLastName').value = null;
                // numberPhone = document.querySelector('#txtNumberPhone').value = null;
                email = document.querySelector('#txtEmail').value = null;
                password = document.querySelector('#txtPassword').value = null;
                passwordRepeat = document.querySelector('#txtPasswordRepeat').value = null;
                alert('Se a registrado con exito.');
                window.location.href = "/";
                console.log(ajax.response);
            }
        
        ajax.send(user);
    }
}