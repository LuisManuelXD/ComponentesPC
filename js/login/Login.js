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
                let validateUser = JSON.parse(ajax.response).code === 200 ? true : false; 

                if (validateUser) {
                    alert(JSON.parse(ajax.response).message);
                    window.location.href = "/";
                } else {
                    alert(JSON.parse(ajax.response).message);
                }
            }
        
        ajax.send(login);
    }
}