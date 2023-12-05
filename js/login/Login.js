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
                let validateUser = JSON.parse(ajax.response); 

                validateUser.forEach(user => {
                    if(user.code != '404' && user.admin == 1) {
                        alert(user.message);
                        sessionStorage.setItem("email", user.email);
                        window.location.href = "/pages/admin";
                    } else if(user.code != '404' && user.admin == 0) {
                        alert(user.message);
                        sessionStorage.setItem("email", user.email);
                        window.location.href = "/";
                    } else if(user.code == '404') {
                        alert(user.message);
                    }
                });
            }
        
        ajax.send(login);
    }
}