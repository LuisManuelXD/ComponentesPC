class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<header>
        <nav class="nav-menu">
          <input type="checkbox" id="toggle" />
          <div class="logo">
            <a href="/">
              <img src="/assets/img/logo.png" width="40px" />
            </a>
            <a href="/">
              <p>Componentes PC</p>
            </a>
          </div>
          <ul class="list">
            <li><a href="/">Inicio</a></li>
            <li><a href="/pages/products/">Productos</a></li>
            <li><a href="/pages/user/registro.html">Registro</a></li>
            <li><a id="btnLogin" href="/pages/login.html">login</a></li>
            <li id="adminLink"></li>
            <li id="btnCart"></li>
            <li><a id="btnExit" href="#">Salir</a></li>
          </ul>
          <label for="toggle" class="icon-bars">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </label>
        </nav>
      </header>`;

    let btnLogin = this.querySelector("#btnLogin");
    let btnExit = this.querySelector("#btnExit");
    let adminLink = this.querySelector("#adminLink");
    let btnCart = this.querySelector("#btnCart");

    let user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
      btnLogin.style.display = 'none';
      if (user.admin == 1) {
        adminLink.innerHTML = '<a href="/pages/admin">Admin</a>';
      }
      btnCart.innerHTML = '<a href="/pages/cart">Carrito</a>';
    } else {
      btnExit.style.display = 'none';
      adminLink.style.display = 'none';
    }

    btnExit.addEventListener('click', function(e) {
      e.preventDefault();
      sessionStorage.removeItem('user');
      btnLogin.style.display = '';
      btnExit.style.display = 'none';
      adminLink.style.display = 'none';
      alert("Se ha cerrado sesión.");
      window.location.href = "/";
    });
  }
}
window.customElements.define("header-page", Header);