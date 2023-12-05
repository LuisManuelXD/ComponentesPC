let btnEmail = document.getElementById("btnEmail");

btnEmail.addEventListener('click', function(e) {
    let email = sessionStorage.getItem("email");

    let login = new FormData();
    login.append('email', email);
    e.preventDefault();

    let ajax = new XMLHttpRequest();
    ajax.open("post", "/php/library/pdf.php", true);
    ajax.onload = function () {
    };

    ajax.send(login);
});

function getProducts() {
    let table = document.querySelector("#tableBitacoraProducts");
  
    let ajax = new XMLHttpRequest();
    ajax.open("get", "/php/admin/product/GetAll.php", true);
    ajax.onload = function () {
      let products = JSON.parse(ajax.response);
      console.log(products);
      let templateCards = "";
  
      products.forEach((product) => {
        templateCards += `<tr id="${product.id}">
                  <td>${product.id}</td>
                  <td>${product.sentencia}</td>
                  <td>${product.contrasentencia}</td>`;
      });
      table.innerHTML = templateCards;
    };
    ajax.send();
  }