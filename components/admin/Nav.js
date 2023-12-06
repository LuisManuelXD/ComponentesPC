class Nav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav class="nav-admin">
        <ul class="list">
        <li class="list__item">
            <div class="list__button">
                <i class="fa-solid fa-house" style="color: #fff;"></i>
                <a href="/pages/admin/" class="nav-admin__link">Inicio</a>
            </div>
        </li>
        <li class="list__item list__item--click">
            <div class="list__button list__button--click">
                <i class="fa-solid fa-shirt" style="color: #fff;"></i>
                <a href="#" class="nav-admin__link">Productos</a>
                <i class="fa-solid fa-chevron-right" style="color: #fff;"></i>
            </div>
            <ul class="list__show">
                <li class="list__inside">
                    <a href="/pages/admin/products/" class="nav-admin__link nav-admin__link--inside">Productos</a>
                </li>
                <li class="list__inside">
                    <a href="/pages/admin/products/register.html" class="nav-admin__link nav-admin__link--inside">Registrar producto</a>
                </li>
            </ul>
        </li>
        <li class="list__item list__item--click">
            <div class="list__button list__button--click">
                <i class="fa-solid fa-user" style="color: #fff;"></i>
                <a href="#" class="nav-admin__link">Usuarios</a>
                <i class="fa-solid fa-chevron-right" style="color: #fff;"></i>
            </div>
            <ul class="list__show">
            <li class="list__inside">
                <a href="/pages/admin/users/" class="nav-admin__link nav-admin__link--inside">Usuarios</a>
            </li>
            <li class="list__inside">
                <a href="/pages/admin/users/register.html" class="nav-admin__link nav-admin__link--inside">Registrar usuario</a>
            </li>
            </ul>
        </li>
        <li class="list__item">
            <div class="list__button">
            <i class="fa-solid fa-basket-shopping" style="color: #fff;"></i>
            <a href="/pages/admin/orders/" class="nav-admin__link">Pedidos</a>
            </div>
        </li>
        <li class="list__item list__item--click">
            <div class="list__button list__button--click">
                <i class="fa-solid fa-users" style="color: #fff;"></i>
                <a href="#" class="nav-admin__link">Provedores</a>
                <i class="fa-solid fa-chevron-right" style="color: #fff;"></i>
            </div>
            <ul class="list__show">
                <li class="list__inside">
                    <a href="/pages/admin/providers/" class="nav-admin__link nav-admin__link--inside">Provedores</a>
                </li>
                <li class="list__inside">
                    <a href="/pages/admin/providers/register.html" class="nav-admin__link nav-admin__link--inside">Registrar provedores</a>
                </li>
            </ul>
        </li>
        </ul>
    </nav>`;
  }
}

window.customElements.define("nav-page", Nav);
