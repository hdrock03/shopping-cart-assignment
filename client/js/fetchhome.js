const category = document.querySelector('.category__list')
const corousel = document.querySelector('.corousel')
const fetchCategory = async () => {
    let jsonData = await fetch("../server/categories/index.get.json");
    const data = await jsonData.json();

    let html =``;

    data.forEach(item => {
        html += `<div class="category one">
        <div class="img__container">
          <img src=${item.imageUrl} alt="" />
        </div>
        <div class="category__desc">
            <span class="category__desc_1">${item.name}</span>
            <p>${item.description}</p>
            <button class="btn-one">${item.key}</button>
        </div>
      </div>
      `;
        
    });
    category.innerHTML = html;
    
}

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