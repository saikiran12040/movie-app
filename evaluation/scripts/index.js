

// if(!localStorage.getItem("amount")){
//   localStorage.setItem("amount", JSON.stringify(0));
//   displyMony.innerText =0;
// }

// else{
//   let data = JSON.parse(localStorage.getItem("amount"));
//   document.getElementById("wallet").innerText = data;
// }

let displyMony = document.getElementById("wallet");
let Walletdata = JSON.parse(localStorage.getItem("amount"))||0;

displyMony.innerText = Walletdata;

function addToWallet() {
  
  let amount = document.getElementById("amount").value;

  Walletdata= (+Walletdata) + (+amount);
  console.log('data:', Walletdata)
  displyMony.innerText = Walletdata;

  localStorage.setItem("amount", JSON.stringify(Walletdata));
}
