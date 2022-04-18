const createNav = () => {
  let nav = document.querySelector(".navbar");
  let data = JSON.parse(localStorage.getItem("userdata"));
  // console.log(data.userCart)
  let cartLength = data.userCart.length;
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
        <a href="http://127.0.0.1:5502/client/cart.html"><img src="../static/images/cart.svg" alt="" /></a>
          
        </div>
        <span class="cart__count">${cartLength} items</span>
      </div>
    </div>
  </div>
    `;
};
createNav();
