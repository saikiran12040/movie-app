// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let Walletdata = JSON.parse(localStorage.getItem("amount"))||0;
let displyMony = document.getElementById("wallet");
displyMony.innerText = Walletdata;

let KEY = "9ab415b4";
let url = "http://www.omdbapi.com/?apikey=9ab415b4";
let temp = "";


async function main() {
  let search = document.getElementById("search").value;

  try {
    let res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=9ab415b4&s=${search}`);

    let data = await res.json();

    let new_data = data.Search;
  
    if (new_data !== undefined) {
      displayMoives(new_data);
    }
  } catch (error) {
    console.log("error:", error);
  }
}
let movies = document.getElementById("movies");

function displayMoives(new_data) {
  movies.innerHTML = null;
  console.log("new_data:", new_data);

  new_data.forEach((element, index) => {
    let box = document.createElement("div");
    box.setAttribute("class", "moive_tab");

    let title = document.createElement("p");
    title.innerText = element.Title;

    let year = document.createElement("p");
    year.innerText = element.Year;

    let image = document.createElement("img");
    image.src = element.Poster;

    let btn = document.createElement("button");
    btn.setAttribute("class", "book_now");
    btn.innerText = "Book Now";
    btn.addEventListener("click", () => {
      Booknow(element, index);
    });

    box.append(image, title, year, btn);
    movies.append(box);
  });
}

let moviesArr = JSON.parse(localStorage.getItem("movie")) || [];

function Booknow(ele, indx) {
  moviesArr.push(ele);
  localStorage.setItem("movie", JSON.stringify(moviesArr));
  window.location.href = "./checkout.html";
}
let id;

let debouncingSearchFunc = ( delay) => {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(() => {
    main();
  }, delay);
};
