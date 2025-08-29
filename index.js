function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// const cartbtns = document.getElementsByClassName("cart-btn");
// // console.log("cartbtns");
// for (let cartButton of cartbtns) {
//   cartButton.addEventListener("click", function () {
//     const productImg = cartButton.parentNode;
//     // console.log("productImg");
//     const productTitle = cartButton.parentNode.children([0]).children([0]).src;
//     const productPrice = cartButton.parentNode.parentNode
//       .children([1])
//       .children([2])
//       .children([0]).innerText;
//     // console.log(productTitle);

//     const totalPrice = document.getElementById("total-price").innerText;
//     const currentTotal = Number(productPrice) + Number(totalPrice);
//     getElementById("total-price").innerText = currentTotal;

//     const cartContainer = getElement("cart-container");

//     const newCart = document.createElement("div");

//     newCart.innerHTML = `
//        <div class="bg-gray-200 rounded-2xl flex justify-between  p-4">
//           <img src="${productImg}" alt="" class="w-10 gap-5" />
//             <div class="">
//               <h2 class="font-bold"> "${Name} </h2>         <h2 class="font-bold">  Tk</h2>
//             </div>
//         </div>
//     `;
//     cartContainer.append(newCart);
//     const quantity = getElement("total-quantity").innerText;
//     console.log(quantity);
//     const currentQuantity = Number(quantity) + 1;
//     getElement("total-quantity").innerText = currentQuantity;
//   });
// }
// document.getElementById("btn-clear").addEventListener("click", function () {
//   const cartContainer = getElement("cart-container");
//   cartContainer.innerHTML = "";
//   getElement("total-quantity").innerText = 0;
//   getElement("total-price").innerText = 0;
// });

// -----------------------Delegation PRocess Starts here-------------------------------

getElement("product-box").addEventListener("click", function (e) {
  const cartButton = e.target;
  const productImg =
    cartButton.parentNode.parentNode.children[0].children[0].src;

  const productTitle =
    cartButton.parentNode.parentNode.children[1].children[0].innerText;

  const productPrice =
    cartButton.parentNode.parentNode.children[1].children[0].innerText;

  const totalPrice2 = getElement("total-price").innerText;
  const currentTotal = number(productPrice) + Number(totalPrice);
  getElement("total-price").innerText.innerText = "currentTotal";

  document
    .getElementById("item-one-btn")
    .addEventListener("click", function () {
      const title = getElement("item-one-title").innerText;
      const price = getElement("item-one-price").innerText;
      console.log(title, price);
    });

  // take total price

  const totalPrice = getElement("total-price").innerText;
  // calculate
  currentTotal = Number(price) + Number(totalPrice);
  // update price
  getElement("total-price").innerText = currentTotal.toFixed(2);

  // cart container k dhoro
  const cartContainer = getElement("cart-container");
  // ekta div make koro
  const newCart = document.createElement("div");
  newCart.innerHTML = `
       <div class="bg-gray-200 rounded-2xl flex justify-between  p-4">
      <img src="./assets/kitchen-1.png" alt="" class="w-10 gap-5" />
      <div class="">
        <h2 class="font-bold"> "&{Name} </h2>
        <h2 class="font-bold">  Tk</h2>
      </div>
       </div>
  `;

  // add to cart-container
  cartContainer.append(newCart);
});
