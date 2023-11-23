getUsers();
let form = document.querySelector("#userForm");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");
const openModal = document.querySelector("#tableUsersAdmin");

form.onsubmit = function (e) {
  let id = document.querySelector("#txtId").value;
  let firstName = document.querySelector("#txtFirstName").value;
  let lastName = document.querySelector("#txtLastName").value;
  let email = document.querySelector("#txtEmail").value;
  let userName = document.querySelector("#txtUserName").value;
  let password = document.querySelector("#txtPassword").value;
  let passwordRepeat = document.querySelector("#txtPasswordRepeat").value;

  if (
    firstName == "" ||
    lastName == "" ||
    email == "" ||
    password == "" ||
    passwordRepeat == "" ||
    userName == ""
  ) {
    alert("Rellene los campos faltantes.");
    e.preventDefault();
    return;
  }

  if (password === passwordRepeat) {
    let user = new FormData();
    user.append("id", id);
    user.append("firstName", firstName);
    user.append("lastName", lastName);
    user.append("email", email);
    user.append("userName", userName);
    user.append("password", password);
    e.preventDefault();

    let ajax = new XMLHttpRequest();
    ajax.open("post", "/php/admin/user/Edit.php", true);
    ajax.onload = function () {
      getUsers();
      alert("Se edito con exito.");
    };

    ajax.send(user);
  } else {
    alert("Las contraseñas son diferentes.");
  }
  e.preventDefault();
};

function getUsers() {
  let table = document.querySelector("#tableUsersAdmin");

  let ajax = new XMLHttpRequest();
  ajax.open("get", "/php/admin/user/GetAll.php", true);
  ajax.onload = function () {
    let users = JSON.parse(ajax.response);
    let template = "";

    users.forEach((user) => {
      let userNameDefault = user.userName != null ? user.userName : "N. E.";
      template += `<tr id="${user.id}">
                  <td>${user.id}</td>
                  <td>${user.firstName}</td>
                  <td>${user.lastName}</td>
                  <td>${user.email}</td>
                  <td>${userNameDefault}</td>
                  <td class="btnOption">
                    <div id="btnEditar" class="user__modal__edit" data-id="${user.id}">
                      <a href="#" class="user__modal__edit" title="Presiona este botón para comenzar a modificar este producto." data-id="${user.id}"><i data-id="${user.id}" class="fa fa-edit fa-1 user__modal__edit" style="color: blue;"></i></a>
                    </div>
                    <button id="btnBorrar" onclick="deleteUser(${user.id})" href="#" class="user__modal__delete" title="Presiona este botón para eliminar este producto."><i class="fa fa-trash fa-1" style="color: red;"></i></button>
                  </td>
                </tr>`;
    });
    table.innerHTML = template;
  };
  ajax.send();
}

openModal.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("user__modal__edit")) {
    const userId = e.target.getAttribute("data-id");
    getEditUser(userId);
    modal.classList.add("modal--show");
  }
  e.preventDefault();
});

closeModal.addEventListener("click", (e) => {
  modal.classList.remove("modal--show");
  e.preventDefault();
});

function getEditUser(id) {
  let firstName = document.querySelector("#txtFirstName");
  let lastName = document.querySelector("#txtLastName");
  let email = document.querySelector("#txtEmail");
  let userName = document.querySelector("#txtUserName");
  let password = document.querySelector("#txtPassword");
  let passwordRepeat = document.querySelector("#txtPasswordRepeat");

  let productId = new FormData();
  productId.append("id", id);

  let ajax = new XMLHttpRequest();
  ajax.open("post", "/php/admin/user/Get.php", true);
  ajax.onload = function () {
    let users = JSON.parse(ajax.response);
    users.forEach((user) => {
      document.querySelector("#txtId").value = user.id;
      firstName.value = user.firstName;
      lastName.value = user.lastName;
      email.value = user.email;
      userName.value = user.userName;
      password.value = user.password;
      passwordRepeat.value = user.password;
    });
  };
  ajax.send(productId);
}

function deleteUser(id) {
  if (confirm("¿Estas seguro de eliminar el usuario?")) {
    let userId = new FormData();
    userId.append("id", id);

    let ajax = new XMLHttpRequest();
    ajax.open("POST", "/php/admin/user/Delete.php", true);
    ajax.onload = function () {
      getProducts();
    };
    ajax.send(productId);
  }
}
