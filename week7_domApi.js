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

// let today = new Date();
// let thisYear = today.getFullYear();
// let footer = document.querySelector("footer");
// let copyright = document.createElement("p");
// copyright.innerHTML = `&copy; ${thisYear} Apeh Clary`;
// footer.appendChild(copyright);

// //put this in .html
// {
//   /* <button id="myButton">Click Me!</button> */
// }

//Scrimba JavaScriopt Deep Div DOM Week 7 Dynamically Add CSS Styles

const post = document.querySelector(".post");
//camelCase and value as a string, numbers too
// post.style.display = "flex"; //"none";
// post.style.background = "orange";
// post.style.backgroundColor = 'orange';
// post.style.margin = '30px';

//working with classes and modifying them
// console.log(post.className);
//remove post class
// post.classList.remove("post"); //string = post first one
// post.classList.add("post");
// post.classList.toggle("post"); //add a class and remove it immediately afterwards

//Event listener and Call back function. Set up this event on very first post only
// const post = document.querySelector(“.post”);
// post.addEventListener(‘click’, event => {
// console.log(‘Do you want to edit this post?’)
// });

//Scrimba JavaScriopt Deep Div DOM Week 7 Understand and work with events
//Event listener on all of them
// const posts = document.querySelectorAll(".post");
// posts.forEach(post => {
//   post.addEventListener('click', event => {
//     console.log('Do you want to edit this post?')

//   });

// document.body.addEventListener('click', event => {
//   // if (!event.target.matches('.post')) return;
//    if (!event.target.closest('.post')) return;

//   console.log('Do you want to edit this psot?')
// })

// we need to select a specific post, not entire body section click and console.log. select a div with a class of post. how to get closest to parent element?

// click
// mouseover
// mouseout
// exit
// keyup
//keydown
//keypress
