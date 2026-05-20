// Meet Karnik Mentor session
// querySelector(): querySelectorAll():
//javascript looks for first Element. all searches for all

//

// const newItem = document.createElement("li");
// newItem.textContent = "A brand new item!";
// const itemList = document.querySelector("#list");
// itemList.appendChild(newItem);

// const links = document.querySelectorAll("a");
// console.log(links);

//event listener
// let button = document.querySelector("#myButton");

// button.addEventListener("click", function () {
//   alert("Button Clicked!");
// });

// //button id="" in html
// put this in index html

//skills.push("music");

//automatic update date copyright - Christian Chourio mentor session

let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = `&copy; ${thisYear} Apeh Clary`;
footer.appendChild(copyright);

//put this in .html
{
  /* <button id="myButton">Click Me!</button> */
}
