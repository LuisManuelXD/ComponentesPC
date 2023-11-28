let btnEmail = document.getElementById("btnEmail");

btnEmail.addEventListener('click', function(e) {
    let ajax = new XMLHttpRequest();
    ajax.open("get", "/php/library/pdf.php", true);
    ajax.onload = function () {
    };

    ajax.send();
    e.preventDefault();
});