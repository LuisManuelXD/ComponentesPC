getProducts();
let form = document.querySelector('#productForm');
const btnImage = document.querySelector('#btnImage');
const imgView = document.querySelector('#imgView');
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");
const openModal = document.querySelector("#tableProducts");
let edit = false;
let imageFile;

form.onsubmit = function(e) {
  let id = document.querySelector('#txtId').value;
    let name = document.querySelector('#txtName').value;
    let price = document.querySelector('#txtPrice').value;
    let available = document.querySelector('#txtAvailable').value;
    let description = document.querySelector('#txtDescription').value;
    let imageId = document.querySelector('#hiddenImageId').value;

    if(name == '' || price == '' || available == '' || description == '' || !imageFile) {
        alert('Rellene los campos faltantes.');
        e.preventDefault();
    } else {
        let product = new FormData();
        product.append('id', id);
        product.append('name', name);
        product.append('price', price);
        product.append('available', available);
        product.append('description', description);
        product.append('image_id', imageId);
        e.preventDefault();

        let url = edit === false ? '../../php/admin/product/Add.php' : '../../php/admin/product/Edit.php';
        console.log(url);

        let ajax = new XMLHttpRequest();
            ajax.open('post', url, true);
            ajax.onload = function() {
              if(edit === true) {
                getProducts();
              }
              // alert('Se a registrado con exito.');
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
      imageFile = file;

      let imageData = new FormData();
      imageData.append('image', imageFile);

      let ajaxImage = new XMLHttpRequest();
      ajaxImage.open('post', '/php/image/Add.php', true);
      ajaxImage.onload = function() {
        let imageId = JSON.parse(this.responseText).id;
        document.querySelector('#hiddenImageId').value = imageId;
      }
      ajaxImage.send(imageData);
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
    let table = document.querySelector("#tableProducts");

    let ajax = new XMLHttpRequest();
        ajax.open( 'get', '/php/admin/product/GetAll.php', true );
        ajax.onload = function() {
            let products = JSON.parse( ajax.response );
            console.log(products);
            let templateCards = '';

            products.forEach(product => {
              templateCards += `<tr id="${product.id}">
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.available}</td>
                <td>${product.description}</td>
                <td class="btnOption">
                  <div id="btnEditar" class="product__modal__edit" data-id="${product.id}">
                    <a href="#" class="product__modal__edit" title="Presiona este botón para comenzar a modificar este producto." data-id="${product.id}"><i data-id="${product.id}" class="fa fa-edit fa-1 product__modal__edit" style="color: blue;"></i></a>
                  </div>
                  <button id="btnBorrar" onclick="deleteProduct(${product.id})" href="#" class="product__modal__delete" title="Presiona este botón para eliminar este producto."><i class="fa fa-trash fa-1" style="color: red;"></i></button>
                </td>
              </tr>`;
            });
            table.innerHTML = templateCards;
        }
        ajax.send();
}

openModal.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("product__modal__edit")) {
    const productId = e.target.getAttribute("data-id");
    getEditProduct(productId);
    modal.classList.add("modal--show");
    edit = true;
  }
  e.preventDefault();
});

closeModal.addEventListener("click", (e) => {
  modal.classList.remove("modal--show");
  e.preventDefault();
});

function getEditProduct(id) {
  let name = document.querySelector('#txtName');
  let price = document.querySelector('#txtPrice');
  let available = document.querySelector('#txtAvailable');
  let description = document.querySelector('#txtDescription');
  let image = document.querySelector('#imgView');

  let productId = new FormData();
      productId.append('id', id);
  
      let ajax = new XMLHttpRequest();  
      ajax.open( 'post', '/php/admin/product/Get.php', true );
      ajax.onload = function() {
        let products = JSON.parse(ajax.response);
        products.forEach(product => {
          document.querySelector('#txtId').value = product.id;
          name.value = product.name;
          price.value = product.price;
          available.value = product.available;
          description.value = product.description;
          image.src = product.image;
          image.style.display = 'block';
        });
      }
      ajax.send(productId);
}

function deleteProduct(id) {
  if (confirm('¿Estas seguro de eliminar el producto?')) {
    let productId = new FormData();
      productId.append('id', id);
  
    let ajax = new XMLHttpRequest();  
        ajax.open( 'POST', '/php/admin/product/Delete.php', true );
        ajax.onload = function() {
          getProducts();
        }
        ajax.send(productId);
  }
}