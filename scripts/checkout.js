// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let tot=JSON.parse(localStorage.getItem("amount"))||0;
let booking=JSON.parse(localStorage.getItem("movie"))||[];
let len= booking.length;
 document.getElementById("wallet").innerText=tot;
 function book(){
     let seat=document.getElementById("number_of_seats").value;
     let temp =tot-(len*100*seat);
     console.log(temp)
     if(temp<0)
     alert("Insufficient Balance!");
     else{

       localStorage.setItem("amount",temp);
       alert("Booking successful!")
     }
   
   }

  let result=JSON.parse(localStorage.getItem("movie"))||[];
  console.log(result)
   result.forEach(function (ele,index){
     var bag=document.createElement("div");
     bag.style.textAlign="center";
     var img=document.createElement("img");
     img.src=ele[0].Poster;
     var name=document.createElement("h2");
     name.innerText=ele[0].Title;
     bag.append(img,name);
     bag.style.border="1px solid black"
     document.getElementById("movie").append(bag)
     
   });