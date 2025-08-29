// console.log("Hello BDSSSS");

// function getElement(id) {
//   const element = document.getElementById(id);
//   return element;
// }

// -----------traditional way--------------------
// document.getElementById("item-one-btn").addEventListener("click", function () {
//   const title = getElement("item-one-btn").innerText;
//   const price = getElement("item-one-price").innerText;
//   console.log(title, price);

//   // // total price k dhoro (price update)
//   const totalPrice = getElement("total-price").innerText;

//   // // Calaculate
//   const currentTotal = Number(price) + Number(totalPrice);
//   // // update price
//   getElement("total-price").innerText = currentTotal.toFixed(2);

//   // -------------------Card update----------------------
//   const cartContainer = getElement("cart-container");
//   // make a div
//   const newCart = document.createElement("div");
//   newCart.innerHTML = `
//             <div class="bg-gray-200 rounded-xl flex justify-between">
//                 <img src="./assets/kitchen-1.png" alt="" class= w-15 p-4" />
//                 <div class="class">
//                   <h2 class="font-bold">${title}</h2>
//                   <h2>${price}</h2>
//                 </div>
//             </div>
//     `;
//   // add to cart container
//   cartContainer.append(newCart);
// });

// ------------------Traverse Method------------------

function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

const cartbtns = document.getElementsByClassName("cart-btn");
console.log(cartbtns);
for (let cartButton of cartbtns) {
  cartButton.addEventListener("click", function () {
    // console.log("Button Cliked");
    const productImg =
      cartButton.parentNode.parentNode.parentNode.children[0].children[0].src;
    // console.log(productImg);
    const productTitle = cartButton.parentNode.parentNode.children[0].innerText;
    // console.log(productTitle);
    const productPrice = cartButton.parentNode.parentNode.children[2].innerText;
    // console.log(productPrice);

    const totalPrice = getElement("total-price").innerText;
    const currentTotal = Number(productPrice) + Number(totalPrice);
    getElement("total-price").innerText = currentTotal;
    // console.log(currentTotal);
  });
}
