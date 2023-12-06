let btnBuy = document.getElementById("btnBuy");

getCarts();

function getCarts() {
    let tableBodyCard = document.getElementById("tableCardProducts");
    let tableAdmin = document.querySelector('.table-admin');
    let userJson = JSON.parse(sessionStorage.getItem("user"));
    let userId = userJson ? userJson.id : null;
  
    let cart = new FormData();
    cart.append("user_id", userId);
  
    let ajax = new XMLHttpRequest();
    ajax.open("post", "/php/product/cart/GetAll.php", true);
    ajax.onload = function () {
      let carts = JSON.parse(ajax.response);
      let templateCart = '';
  
      if (carts.length === 0) {
        templateCart = `<div class="card-search">
            <img
              src="/assets/svg/illustrations/oc-lost.svg"
              alt="Image Description"
            />
            <h3>Por el momento el carrito está vacío.</h3>
          </div>`;
          tableAdmin.innerHTML = templateCart;
      } else {
        carts.forEach((cartItem) => {
          templateCart += `<tr>
                  <td>${cartItem.id}</td>
                  <td>${cartItem.items}</td>
                  <td>${cartItem.product_name}</td>
                  <td>$${cartItem.total}</td>
                  <td>
                  <button id="btnBorrar" onclick="deleteProductCart(${cartItem.id})" href="#" title="Presiona este botón para eliminar este producto del carrito."><i class="fa fa-trash fa-1" style="color: red; padding: 1em;"></i></button>
                  </td>
              </tr>`;
          tableBodyCard.innerHTML = templateCart;
        });
      }
    };
    ajax.send(cart);
}

function deleteProductCart(id) {
    if (confirm("¿Estas seguro de eliminar el producto del carrito?")) {
      let productCartId = new FormData();
      productCartId.append("id", id);
  
      let ajax = new XMLHttpRequest();
      ajax.open("POST", "/php/product/cart/Delete.php", true);
      ajax.onload = function () {
        getCarts();
      };
      ajax.send(productCartId);
    }
}

btnBuy.addEventListener('click', function(e) {
    if (confirm("¿Estas seguro de adquirir estos productos del carrito?")) {
        let userJson = JSON.parse(sessionStorage.getItem("user"));
        let id = userJson ? userJson.id : null;
        let email = userJson ? userJson.email : null;
        
        let cartBuy = new FormData();
        cartBuy.append('user_id', id);
        cartBuy.append('email', email);
        e.preventDefault();
    
        let ajax = new XMLHttpRequest();
        ajax.open("post", "/php/library/pdf.php", true);
        ajax.onload = function () {
            alert("Gracias por tu compra.");
            window.location.href = "/";
        };
    
        ajax.send(cartBuy);
    }
});