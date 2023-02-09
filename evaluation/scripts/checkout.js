// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let moviesArr = JSON.parse(localStorage.getItem("movie")) || [];
let Walletdata = JSON.parse(localStorage.getItem("amount"))||0;

let displyMony = document.getElementById("wallet");
displyMony.innerText = Walletdata;
console.log('Walletdata:', Walletdata)

displayMoives(moviesArr);

function displayMoives(new_data) {
let movies = document.getElementById("movie");

    movies.innerHTML = null;
    console.log('new_data:', new_data)

   new_data.forEach((element, index) => {
  


    let box = document.createElement("div");
    box.setAttribute("class", "moive_tab");

    let title = document.createElement("p");
    title.innerText = element.Title;
    

    let year = document.createElement("p");
    year.innerText = element.Year;

    let image = document.createElement("img");
    image.src = element.Poster;

 
    
    box.append(image, title, year);
    movies.append(box);
  });
}




let confirmTicket=()=>{

    let number = document.getElementById("number_of_seats").value;
    let total = (+number) * 100;
    if(total>(+Walletdata)){

        alert("Insufficient Balance");
    }else{
        Walletdata= (+Walletdata)- total;
        localStorage.setItem("amount", JSON.stringify(Walletdata))
        displyMony.innerText = Walletdata;
        alert("Booking Successsfull");
    }
}

document.getElementById("confirm").addEventListener("click" ,confirmTicket);