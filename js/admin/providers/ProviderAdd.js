const providerForm = document.getElementById("providerForm");

providerForm.onsubmit = function (e) {
  let name = document.querySelector("#txtName").value;
  let email = document.querySelector("#txtEmail").value;
  let zipCode = document.querySelector("#txtZipCode").value;
  let address = document.querySelector("#txtAddress").value;
  let description = document.querySelector("#txtDescription").value;

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
    provider.append("name", name);
    provider.append("email", email);
    provider.append("zipCode", zipCode);
    provider.append("address", address);
    provider.append("description", description);
    e.preventDefault();

    let ajax = new XMLHttpRequest();
    ajax.open("post", "/php/admin/providers/Add.php", true);
    ajax.onload = function () {
      document.querySelector("#txtName").value = null;
      document.querySelector("#txtEmail").value = null;
      document.querySelector("#txtZipCode").value = null;
      document.querySelector("#txtAddress").value = null;
      document.querySelector("#txtDescription").value = null;
      alert("Se a registrado con exito.");
    };
    ajax.send(provider);
  }
  e.preventDefault();
};
