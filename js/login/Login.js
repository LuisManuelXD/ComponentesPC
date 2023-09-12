let form = document.querySelector('#loginForm');
form.onsubmit = function(e) {
    let email = document.querySelector('#txtEmail').value;
    let password =  document.querySelector('#txtPassword').value;

    if(email == '' || password == '') {
        alert('Rellene los campos faltantes.');
        e.preventDefault();
    } else {
        let login = new FormData();
        login.append('email', email);
        login.append('password', password);
        e.preventDefault();

        let ajax = new XMLHttpRequest();
            ajax.open('post', '/php/Login.php', true);
            ajax.onload = function() {
                let validateUser = ajax.response === false ? true : false; 
                console.log(validateUser);
                // window.location.href = "/";
            }
        
        ajax.send(login);
    }
}