// Store the wallet amount to your local storage with key "amount"
let tot=JSON.parse(localStorage.getItem("amount"))||0;
function addfun(){
  let val=Number(document.getElementById("amount").value);
  tot+=val;
  localStorage.setItem("amount",JSON.stringify(tot))
  document.getElementById("wallet").innerText=tot;
}
document.getElementById("wallet").innerText=tot;
function bookfun(){
  window.location.href="movies.html"
}