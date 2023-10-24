let form = document.querySelector('#productForm');

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