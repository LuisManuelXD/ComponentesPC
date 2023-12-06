const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");
const openModal = document.querySelector("#tableProviders");
const providerForm = document.querySelector("#providerForm");

getProviders();

providerForm.onsubmit = function (e) {
  let id = document.querySelector("#txtId").value;
  let name = document.querySelector("#txtName").value;
  let email = document.querySelector("#txtEmail").value;
  let zipCode = document.querySelector("#txtZipCode").value;
  let address = document.querySelector("#txtAddress").value;
  let description = document.querySelector("#txtDescription").value;
  console.log(id)

  if (
    name == "" ||
    email == "" ||
    zipCode == "" ||
    address == "" ||
    description == ""
  ) {
    alert("Rellene los campos faltantes.");
    e.preventDefault();
  } else {
    let provider = new FormData();
    provider.append("id", id);
    provider.append("name", name);
    provider.append("email", email);
    provider.append("zipCode", zipCode);
    provider.append("address", address);
    provider.append("description", description);
    e.preventDefault();

    let ajax = new XMLHttpRequest();
    ajax.open("post", "/php/admin/providers/Edit.php", true);
    ajax.onload = function () {
      getEditProvider(id);
      getProviders();
      alert("Se a registrado con exito.");
    };
    ajax.send(provider);
  }
  e.preventDefault();
};

function getProviders() {
  let table = document.querySelector("#tableProviders");

  let ajax = new XMLHttpRequest();
  ajax.open("get", "/php/admin/providers/GetAll.php", true);
  ajax.onload = function () {
    let providers = JSON.parse(ajax.response);
    let templateCards = "";

    providers.forEach((provider) => {
      templateCards += `<tr id="${provider.id}">
                  <td>${provider.id}</td>
                  <td>${provider.name}</td>
                  <td>${provider.email}</td>
                  <td class="btnOption">
                    <div id="btnEditar" class="provider__modal__edit" data-id="${provider.id}">
                      <a href="#" class="provider__modal__edit" title="Presiona este botón para comenzar a modificar este producto." data-id="${provider.id}"><i data-id="${provider.id}" class="fa fa-edit fa-1 provider__modal__edit" style="color: blue;"></i></a>
                    </div>
                    <button id="btnBorrar" onclick="deleteProvider(${provider.id})" href="#" class="product__modal__delete" title="Presiona este botón para eliminar este producto."><i class="fa fa-trash fa-1" style="color: red;"></i></button>
                  </td>
                </tr>`;
    });
    table.innerHTML = templateCards;
  };
  ajax.send();
}

openModal.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("provider__modal__edit")) {
    const providertId = e.target.getAttribute("data-id");
    getEditProvider(providertId);
    modal.classList.add("modal--show");
  }
  e.preventDefault();
});

closeModal.addEventListener("click", (e) => {
  modal.classList.remove("modal--show");
  e.preventDefault();
});

function getEditProvider(id) {
  let name = document.querySelector("#txtName");
  let email = document.querySelector("#txtEmail");
  let zipCode = document.querySelector("#txtZipCode");
  let address = document.querySelector("#txtAddress");
  let description = document.querySelector("#txtDescription");

  let providerId = new FormData();
  providerId.append("id", id);

  let ajax = new XMLHttpRequest();
  ajax.open("post", "/php/admin/providers/Get.php", true);
  ajax.onload = function () {
    let providers = JSON.parse(ajax.response);
    providers.forEach((provider) => {
      document.querySelector("#txtId").value = provider.id;
      name.value = provider.name;
      email.value = provider.email;
      zipCode.value = provider.zipCode;
      address.value = provider.address;
      description.value = provider.description;
    });
  };
  ajax.send(providerId);
}

function deleteProvider(id) {
  if (confirm("¿Estas seguro de eliminar al provedor?")) {
    let productId = new FormData();
    productId.append("id", id);

    let ajax = new XMLHttpRequest();
    ajax.open("POST", "/php/admin/providers/Delete.php", true);
    ajax.onload = function () {
      getProviders();
    };
    ajax.send(productId);
  }
}