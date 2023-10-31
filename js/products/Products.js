let search = '';
let products;
let inputSearch = document.querySelector("#txtSearch");

getProducts();

function getProducts(searchTerm = '') {
    let cards = document.querySelector("#cards");

    let ajax = new XMLHttpRequest();
        ajax.open( 'get', '/php/product/GetAll.php', true );
        ajax.onload = function() {
            products = JSON.parse( ajax.response );
            let templateCards = '';

            products.forEach(product => {
              if(product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                if(parseInt(product.available) > 0) {
                    templateCards += `<div id="${product.id}" class="product">
                    <div class="product-image">
                      <a title="${product.name}" href="/pages/products/item/${product.id}">
                        <img src="/assets/img/llamaTactica.png" alt="" />
                      </a>
                    </div>
                    <div class="product-info">
                      <h4>
                        <a href="/pages/products/item/${product.id}">${product.name}</a>
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
                      <a title="${product.name}" href="/pages/products/item/${product.id}">
                        <img src="/assets/img/llamaTactica.png" alt="" />
                      </a>
                    </div>
                    <div class="product-info">
                      <h4>
                        <a href="/pages/products/item/${product.id}">${product.name}</a>
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
              } else {
                templateCards = `<div class="card-search">
                <img
                  src="/assets/svg/illustrations/oc-lost.svg"
                  alt="Image Description"
                />
                <h3>Por el momento no tenemos resultados para esta búsqueda.</h3>
              </div>`;
              }
            });
            cards.innerHTML = templateCards;
        }
        ajax.send();
}

inputSearch.addEventListener('keyup', (e) => {
  search = e.target.value;
  getProducts(search);
});