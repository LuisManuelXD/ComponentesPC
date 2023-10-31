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
            <li><a href="/pages/login.html">login</a></li>
            <li><a href="#">Salir</a></li>
          </ul>
          <label for="toggle" class="icon-bars">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </label>
        </nav>
      </header>`;
  }
}

window.customElements.define("header-page", Header);
