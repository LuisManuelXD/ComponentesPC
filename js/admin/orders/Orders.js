getProducts();
function getProducts() {
  let table = document.querySelector("#tableOrders");

  let ajax = new XMLHttpRequest();
  ajax.open("get", "/php/admin/orders/GetAll.php", true);
  ajax.onload = function () {
    let orders = JSON.parse(ajax.response);
    let templateCards = "";

    orders.forEach((order) => {
      let paymentStatusDefault = parseInt(order.paymentStatus) != 0 ? "Pago realizado" : "Sin pago";
      let orderStatusDefault = parseInt(order.orderStatus) != 0 ? "Entregado" : "Sin entregar";

      templateCards += `<tr id="${order.id}">
                  <td>${order.id}</td>
                  <td>${order.user_email}</td>
                  <td>${paymentStatusDefault}</td>
                  <td>${orderStatusDefault}</td>
                  <td>${order.product_name}</td>
                  <td>${order.items}</td>
                  <td class="btnOption">
                    <button id="btnBorrar" onclick="deleteOrder(${order.id})" href="#" class="product__modal__delete" title="Presiona este botón para eliminar este producto."><i class="fa fa-trash fa-1" style="color: red;"></i></button>
                  </td>
                </tr>`;
    });
    table.innerHTML = templateCards;
  };
  ajax.send();
}

function deleteOrder(id) {
  if (confirm("¿Estas seguro de eliminar el pedido?")) {
    let orderId = new FormData();
    orderId.append("id", id);

    let ajax = new XMLHttpRequest();
    ajax.open("POST", "/php/admin/orders/Delete.php", true);
    ajax.onload = function () {
      getProducts();
    };
    ajax.send(orderId);
  }
}
