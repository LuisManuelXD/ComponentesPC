getProducts();
function getProducts() {
    let cards = document.querySelector("#cards");

    let ajax = new XMLHttpRequest();
        ajax.open( 'get', '/php/product/GetAll.php', true );
        ajax.onload = function() {
            let products = JSON.parse( ajax.response );
            console.log(products);
            let templateCards = '';

            products.forEach(product => {
                if(parseInt(product.available) > 0) {
                    templateCards += `<div id="${product.id}" class="product">
                    <div class="product-image">
                      <a title="${product.name}" href="#">
                        <img src="/assets/img/llamaTactica.png" alt="" />
                      </a>
                    </div>
                    <div class="product-info">
                      <h4>
                        <a href="#">${product.name}</a>
                      </h4>
                      <div class="product-price">
                        <span class="price">$${product.price}</span>
                      </div>
                      <div class="stock stock__available">
                        <span class="label label-icon with-stock">
                          <i class="fa fa-check" aria-hidden="true"></i>
                          CON EXISTENCIA
                        </span>
                      </div>
                    </div>
                  </div>`;
                } else {
                    templateCards += `<div id="${product.id}" class="product">
                    <div class="product-image">
                      <a title="${product.name}" href="#">
                        <img src="/assets/img/llamaTactica.png" alt="" />
                      </a>
                    </div>
                    <div class="product-info">
                      <h4>
                        <a href="#">${product.name}</a>
                      </h4>
                      <div class="product-price">
                        <span class="price">$${product.price}</span>
                      </div>
                      <div class="stock stock__without-existence">
                        <span class="label label-icon with-stock">
                          <i class="fa fa-times" aria-hidden="true"></i>
                          SIN EXISTENCIA
                        </span>
                      </div>
                    </div>
                  </div>`;
                }
            });
            cards.innerHTML = templateCards;
        }
        ajax.send();
}