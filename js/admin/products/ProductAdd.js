let form = document.querySelector("#productForm");
const btnImage = document.querySelector("#btnImage");
const imgView = document.querySelector("#imgView");
let imageFile;

form.onsubmit = function (e) {
  let name = document.querySelector("#txtName").value;
  let price = document.querySelector("#txtPrice").value;
  let available = document.querySelector("#txtAvailable").value;
  let description = document.querySelector("#txtDescription").value;
  let imageId = document.querySelector("#hiddenImageId").value;

  if (
    name == "" ||
    price == "" ||
    available == "" ||
    description == "" ||
    !imageFile
  ) {
    alert("Rellene los campos faltantes.");
    e.preventDefault();
  } else {
    let product = new FormData();
    product.append("name", name);
    product.append("price", price);
    product.append("available", available);
    product.append("description", description);
    product.append("image_id", imageId);
    e.preventDefault();

    let ajax = new XMLHttpRequest();
    ajax.open("post", "/php/admin/product/Add.php", true);
    ajax.onload = function () {
      document.querySelector("#txtName").value= null;
      document.querySelector("#txtPrice").value= null;
      document.querySelector("#txtAvailable").value= null;
      document.querySelector("#txtDescription").value= null;
      document.querySelector("#hiddenImageId").value= null;
      alert("Se a registrado con exito.");
    };
    ajax.send(product);
  }
  e.preventDefault();
};

btnImage.addEventListener("change", function (e) {
  let file = e.target.files[0];
  let reader = new FileReader();

  if (file && (file.type == "image/jpeg" || file.type == "image/png")) {
    reader.onload = function () {
      document.getElementById("imgView").src = reader.result;
      imageFile = file;

      let imageData = new FormData();
      imageData.append("image", imageFile);

      let ajaxImage = new XMLHttpRequest();
      ajaxImage.open("post", "/php/image/Add.php", true);
      ajaxImage.onload = function () {
        let imageId = JSON.parse(this.responseText).id;
        document.querySelector("#hiddenImageId").value = imageId;
      };
      ajaxImage.send(imageData);
    };

    document.getElementById("imgView").style.display = "block";
    reader.readAsDataURL(file);
  } else {
    e.target.value = "";
    document.getElementById("imgView").src = "";
    document.getElementById("imgView").style.display = "none";
    alert("Por favor, selecciona una imagen .jpg o .png");
  }
});
