let listElements = document.querySelectorAll(".list__button--click");
let listMovil = document.querySelectorAll('.nav-admin')[0];
let expandido = false;

listElements.forEach((listElement) => {
  listElement.addEventListener("click", () => {
    listElement.classList.toggle("arrow");
    let height = 0;
    let menu = listElement.nextElementSibling;

    if (menu.clientHeight == "0") {
      height = menu.scrollHeight;
    }

    menu.style.height = `${height}px`;
  });
});

listMovil.addEventListener("click", (event) => {
  if(window.innerWidth <= 920) {
    if(!expandido && (event.target.classList.contains('list') || event.target.classList.contains('nav-admin'))) {
      listMovil.style.width = "2em";
      expandido = true;
    } else if (!event.target.classList.contains('list') && !event.target.classList.contains('nav-admin')) {
      listMovil.style.width = "15em";
      expandido = false;
    }
  }
});
