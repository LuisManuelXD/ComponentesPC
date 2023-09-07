let form = document.querySelector('#userForm');
form.onsubmit = function(e) {
    let firstName = document.querySelector('#txtFirstName').value;
    let lastName = document.querySelector('#txtLastName').value;
    let numberPhone = document.querySelector('#txtNumberPhone').value;
    let email = document.querySelector('#txtEmail').value;
    let password = document.querySelector('#txtPassword').value;
    let passwordRepeat = document.querySelector('#txtPasswordRepeat').value;

    if(firstName == '' || lastName == '' || numberPhone == '' || email == '' || password == '' || passwordRepeat == '') {
        alert('Rellene los campos faltantes.');
        e.preventDefault();
    } else {
        let user = new FormData();
        user.append('firstName', firstName);
        user.append('lastName', lastName);
        user.append('numberPhone', numberPhone);
        user.append('email', email);
        user.append('password', password);
        e.preventDefault();

        let ajax = new XMLHttpRequest();  
            ajax.open('post', '/php/addUser.php', true);
            ajax.onload = function() {              
                firstName = document.querySelector('#txtFirstName').value = null;
                lastName = document.querySelector('#txtLastName').value = null;
                numberPhone = document.querySelector('#txtNumberPhone').value = null;
                email = document.querySelector('#txtEmail').value = null;
                password = document.querySelector('#txtPassword').value = null;

                console.log(ajax.response);
            }
        
        ajax.send(user);
    }
}