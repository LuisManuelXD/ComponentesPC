class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<footer class="footer">
        <div class="container">
          <div class="footer-row">
            <div class="footer-links">
              <h4>Datos</h4>
              <h5>Nombre:</h5>
              <p>Luis Manuel Rios Torres - 4 P</p>
              <h5>Materias:</h5>
              <p>Desarrollo web I,</p>
              <p>Base de datos I</p>
            </div>
            <div class="footer-links">
              <h4>Navegacion</h4>
              <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/pages/products/">Productos</a></li>
                <li><a href="/pages/user/registro.html">Registro</a></li>
                <li><a href="/pages/login.html">Login</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>`;
  }
}

window.customElements.define("footer-page", Footer);
