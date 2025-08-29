// document
//   .getElementById("emergency-copy-id")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("first ");
//   });
// console.log("hello Bangladesh");

function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
getElement("product-box").addEventListener("click", function (e) {
  const cartButton = e.target;
  const productImg =
    cartButton.parentNode.parentNode.children[0].children[0].src;
  // console.log("productImg");
