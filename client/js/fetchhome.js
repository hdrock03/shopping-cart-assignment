const category = document.querySelector('.category__list')
const corousel = document.querySelector('.corousel')
const fetchCategory = async () => {
    let jsonData = await fetch("../server/categories/index.get.json");
    const data = await jsonData.json();

    let html =``;
let switchSide = false;
    data.forEach(item => {
      switchSide = !switchSide;
      let classToAdd = switchSide?"one":"two";
        html += `<div class='${classToAdd}'>
        <div class="img__container">
          <img src=${item.imageUrl} alt="" />
        </div>
        <div class="category__desc">
            <span class="category__desc_1">${item.name}</span>
            <p>${item.description}</p>
            <a href="http://127.0.0.1:5502/client/product.html?product=${item.key}" class="btn-one">${item.key}</a>
            
        </div>
      </div>
      `;
        
    });
    category.innerHTML = html;
    
}
{/* <button class="btn-one">${item.key}</button> */}
// const fetchCorousel = async () => {
//     let jsonData = await fetch("../server/banners/index.get.json");
//     const data = await jsonData.json();

//     let html =``;

//     data.forEach(item => {
//         html += `<button class="carousel-button prev" data-carousel-button="prev">&#8656;</button>
//         <button class="carousel-button next" data-carousel-button="next">&#8658;</button>
//         <ul data-slides>
//           <li class="slide" data-active>
//             <img src=${bannerImageUrl} alt=${bannerImageAlt}>
//           </li>
//         </ul>
//       `;
        
//     });
//     corousel.innerHTML = html;
    
// }
fetchCategory();
// fetchCorousel();