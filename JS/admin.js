document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("tBody");
  const addButton = document.getElementById("addButton");
  // const sortButton = document.getElementById("");

  // Retrieve the products from local storage or initialize an empty array

  //   console.log(products)
  renderProduct();
  // Function to render the product list
});
function renderProduct() {
  // Clear the previous list
  const productList = document.getElementById("tBody");

  productList.innerHTML = "";
  let products = JSON.parse(localStorage.getItem("products"));

  // Render each product as a list item

  products.forEach((data, i) => {
    const productList = document.getElementById("tBody");
    // console.log(data);
    productList.innerHTML += `
          <tr>
          <th><span class="custom-checkbox"></span>
          <input type="checkbox" id="checkbox1" name="option[]" value="1">
          <label for="checkbox1"></label></th>
          <th id="tHead">${data.id}</th>
          <th>${data.title}</th>
          <th><img src="${data.image}" alt="" style="width: 3rem"></th>
          <th>${data.price}</th>
          <th>
              <a href="#" class="delete" data-toggle="modal">
                  <i class="material-icons" data-toggle="tooltip" title="Delete"><img src="https://i.postimg.cc/FK1J6dY0/icons8-delete-30.png" alt=""></i>
              </a>
          </th>
      </tr>
          `;
  });
  sortTableByTitle()
}

const sortBtn = document.querySelector('.sortBtn')


// let sum = cartItemsEl.reduce((a,b) => {
//     return a.price + b.price 
// }, 0)


function sortTableByTitle() {
  let products = JSON.parse(localStorage.getItem("products"));
  let table = document.getElementById("tBody");
  sortBtn.addEventListener('click',()=>{
    console.log(products)
    products.sort((a, b) => {
        if(a.title < b.title){
            return -1
        } else if(a.title > b.title){
            return 1
        } return 0
      });

      localStorage.setItem('products',JSON.stringify(products))
      console.log(table)
      table.innerHTML = "";
      renderProduct();
  })
  
}
