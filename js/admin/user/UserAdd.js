let form = document.querySelector('#userForm');
form.onsubmit = function(e) {
    let firstName = document.querySelector('#txtFirstName').value;
    let lastName = document.querySelector('#txtLastName').value;
    let email = document.querySelector('#txtEmail').value;
    let password = document.querySelector('#txtPassword').value;
    let passwordRepeat = document.querySelector('#txtPasswordRepeat').value;

    if(firstName == '' || lastName == '' || email == '' || password == '' || passwordRepeat == '') {
        alert('Rellene los campos faltantes.');
        e.preventDefault();
        return;
    }

    if(password === passwordRepeat) {
        let user = new FormData();
        user.append('firstName', firstName);
        user.append('lastName', lastName);
        user.append('email', email);
        user.append('password', password);
        e.preventDefault();

        let ajax = new XMLHttpRequest();  
            ajax.open('post', '/php/admin/user/Add.php', true);
            ajax.onload = function() {              
                firstName = document.querySelector('#txtFirstName').value = null;
                lastName = document.querySelector('#txtLastName').value = null;
                email = document.querySelector('#txtEmail').value = null;
                password = document.querySelector('#txtPassword').value = null;
                passwordRepeat = document.querySelector('#txtPasswordRepeat').value = null;
                alert('Se a registrado con exito.');
            }
        
        ajax.send(user);
    } else {
        alert("Las contraseñas son diferentes.");
    }
    e.preventDefault();
}