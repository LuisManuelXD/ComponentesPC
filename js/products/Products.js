let search = '';
let products;
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
const openModal = document.querySelector("#cards");
let inputSearch = document.querySelector("#txtSearch");

getProducts();

function getProducts(searchTerm = '') {
    let cards = document.querySelector("#cards");

    let ajax = new XMLHttpRequest();
        ajax.open( 'get', '/php/product/GetAll.php', true );
        ajax.onload = function() {
            products = JSON.parse( ajax.response );
            let templateCards = '';
            let foundMatch = false;

            products.forEach(product => {
              if(product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                foundMatch = true;
                if(parseInt(product.available) > 0) {
                  templateCards += `<div id="${product.id}" class="product">
                    <div class="product-image">
                      <a title="${product.name}">
                        <img class="product__modal" src="/assets/img/llamaTactica.png" alt="" />
                      </a>
                    </div>
                    <div class="product-info">
                      <h4>
                        <a class="product__modal">${product.name}</a>
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
                      <a title="${product.name}">
                        <img src="/assets/img/llamaTactica.png" alt="" />
                      </a>
                    </div>
                    <div class="product-info">
                      <h4>
                        <a>${product.name}</a>
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
              }
            });

            if (!foundMatch) {
              templateCards = `<div class="card-search">
                <img
                  src="/assets/svg/illustrations/oc-lost.svg"
                  alt="Image Description"
                />
                <h3>Por el momento no tenemos resultados para esta búsqueda.</h3>
              </div>`;
            }
            cards.innerHTML = templateCards;
        }
        ajax.send();
}

inputSearch.addEventListener('keyup', (e) => {
  e.preventDefault();
  search = e.target.value;
  getProducts(search);
});

openModal.addEventListener('click', function(e) {
  if(e.target && e.target.classList.contains('product__modal')) {
    e.preventDefault();
    modal.classList.add('modal--show');
  }
});

closeModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('modal--show');
});