const createNav = () => {
  let nav = document.querySelector(".navbar");
  nav.innerHTML = `
    <div class="center">
    <div class="left">
      <div class="img__container">
        <img src="../static/images/logo.png" alt="" />
      </div>
      <div class="left__links">
        <div class="link__collection">
          <a href="http://127.0.0.1:5502/client/index.html#index.html">Home</a>
          <a href="http://127.0.0.1:5502/client/product.html">Products</a>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="one">
        <a href="http://127.0.0.1:5502/client/login.html">Signin</a>
        <a href="http://127.0.0.1:5502/client/register.html">Register</a>
      </div>
      <div class="two">
        <div class="img__container">
          <img src="../static/images/cart.svg" alt="" />
        </div>
        <span class="cart__count">0 items</span>
      </div>
    </div>
  </div>
    `;
};
createNav();
