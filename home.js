// const validPin = 1234;

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Add money button ok");
    //     const bank = document.getElementById("bank").value;
    //     const accountNumber = document.getElementById("account-number").value;
    //     const amount = parseInt(document.getElementById("add-amount").value);
    //     const pin = parseInt(document.getElementById("add-pin").value);
    //     // console.log(bank, accountNumber, amount, pin);
    //     const availableBalance = parseInt(
    //       document.getElementById("available-balance").innetText
    //     );
    //     // console.log("available balance");

    //     const totalNewAvaliableBalance = amount + availableBalance;
    //     document.getElementById("available-balance").innerText =
    //       totalNewAvaliableBalance;
    //   });

    // if (accountNumber.length < 11) {
    //   alert("Please provide a valid account number");
    //   return;
    // }

    // if (pin != validPin) {
    //   alert("Please enter a valid pin number");
    //   return;
  });
//     const totalNewAvailableBanalce = amount + availableBalance;
//     document.getElementById("available-balance").innerText =
//       totalNewAvailableBanalce;
//     console.log(totalNewAvailableBanalce);
//   });

// // Cashout money feature

// document.getElementById("withdraw-btn").addEventListener("clicd", function (e) {
//   e.preventDefault();
//   console.log("Withdraw money");
// });

// // toggling feature // ------------------------------------------

// document.getElementById("add-money-btn").addEventListener("click", function () {
//   document.getElementById("cash-out-parent").style.display = "none";
//   document.getElementById("add-money-parent").style.display = "block";
// });

// document.getElementById("cash-out-btn").addEventListener("click", function () {
//   document.getElementById("add-money-parent").style.display = "none";
//   document.getElementById("cash-out-parent").style.display = "block";
// });
