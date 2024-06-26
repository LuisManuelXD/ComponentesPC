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
                    if(user.code != '404') {
                        let userData = {
                            id: user.id,
                            email: user.email,
                            admin: user.admin
                        };
                        sessionStorage.setItem("user", JSON.stringify(userData));
                        alert(user.message);

                        if(user.admin == 1) {
                            window.location.href = "/pages/admin";
                        } else {
                            window.location.href = "/";
                        }
                    } else {
                        alert(user.message);
                    }
                });
            }
        
        ajax.send(login);
    }
}