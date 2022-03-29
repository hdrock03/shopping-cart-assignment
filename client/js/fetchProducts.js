// Target your container div
const divLeft = document.querySelector(".container-left");
const divRight = document.querySelector(".container-right");

// Fetch all products from JSON
const fetchAllProducts = async () => {
  let jsonData = await fetch("../server/products/index.get.json");
  const data = await jsonData.json(); // Array of objects - [{}, {}, {}]

  // initialize emtpy string
  let html = ``;

  // map over data fetched from JSON file and add HTML content to above variable
  data.forEach(item => {
    html += `<div class="carts">
                <div class="cart-up">
                    <p class="cart-heading">${item.name}</p>
                    <div class="img-container">
                        <img src=${item.imageURL} alt="" />
                    </div>
                    <p class="cart-desc">
                    ${item.description}
                    </p>
                </div>
          <div class="cart-down">
            <span>MRP Rs. ${item.price}</span>
            <button class="cart-btn">Buy Now</button>
          </div>
        </div>
`;
  });

  // inject HTML inside targeted div
  divRight.innerHTML = html;
};

// Fetch all category from JSON
const fetchCategory = async () => {
  let jsonData = await fetch("../server/categories/index.get.json");
  const data = await jsonData.json(); // Array of objects - [{}, {}, {}]

  // initialize emtpy string
  let html = ``;

  // const handleclick = () => console.log("ok");

  // map over data fetched from JSON file and add HTML content to above variable
  data.map((item, index) => {
    let htmlString = `<div class="item ${index + 1}" id=${item.id} >${item.name}</div>`;

    html += htmlString;
  });

  // inject HTML inside targeted div
  divLeft.innerHTML = html;

  // const nodeList = divLeft.childNodes;
  const nodeList = document.querySelectorAll(".item"); // always returns a nodelist

  console.log(nodeList, "XXX");

  nodeList.forEach((item, index) => {
    item.addEventListener("click", e => {
      filterCategory(e.target.id); // e.target.id - categoryID
    });
  });
};

// function that filters products based on ID
const filterCategory = async categoryID => {
  let jsonData = await fetch("../server/products/index.get.json");
  const data = await jsonData.json(); // Array of objects - [{}, {}, {}]

  // run filter logic
  const filteredData = data.filter(ele => ele.category === categoryID); // array

  // initialize emtpy string
  let html = ``;

  // map over data fetched from JSON file and add HTML content to above variable
  filteredData.forEach(item => {
    html += `<div class="carts">
                <div class="cart-up">
                    <p class="cart-heading">${item.name}</p>
                    <div class="img-container">
                        <img src=${item.imageURL} alt="" />
                    </div>
                    <p class="cart-desc">
                    ${item.description}
                    </p>
                </div>
          <div class="cart-down">
            <span>MRP Rs. ${item.price}</span>
            <button class="cart-btn">Buy Now</button>
          </div>
        </div>
`;
  });

  // inject HTML inside targeted div
  divRight.innerHTML = html;
};

// call functions
fetchAllProducts();
fetchCategory();