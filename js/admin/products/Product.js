// getProducts();
let form = document.querySelector('#productForm');
const btnImage = document.querySelector('#btnImage');
const imgView = document.querySelector('#imgView');

form.onsubmit = function(e) {
    let name = document.querySelector('#txtName').value;
    let price = document.querySelector('#txtPrice').value;
    let available = document.querySelector('#txtAvailable').value;
    let description = document.querySelector('#txtDescription').value;

    if(name == '' || price == '' || available == '' || description == '') {
        alert('Rellene los campos faltantes.');
        e.preventDefault();
    } else {
        let product = new FormData();
        product.append('name', name);
        product.append('price', price);
        product.append('available', available);
        product.append('description', description);
        e.preventDefault();

        let ajax = new XMLHttpRequest();
            ajax.open('post', '/php/product/Add.php', true);
            ajax.onload = function() {
                alert('Se a registrado con exito.');
            }

        ajax.send(product);
    }
}

btnImage.addEventListener("change", function (e) {
  let file = e.target.files[0];
  let reader = new FileReader();

  if(file && (file.type == "image/jpeg" || file.type == "image/png")) {
    reader.onload = function() {
      document.getElementById('imgView').src = reader.result;
    }

    document.getElementById('imgView').style.display = 'block';
    reader.readAsDataURL(file);
  } else {
    e.target.value = "";
    document.getElementById('imgView').src = "";
    document.getElementById('imgView').style.display = 'none';
    alert("Por favor, selecciona una imagen .jpg o .png");
  }
});

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