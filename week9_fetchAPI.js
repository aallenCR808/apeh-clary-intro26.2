// put in section id projects ul

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(data => console.log(data.title)) or (data.body)
// //titulo o body de esa json
// .catch(error => console.error(error))

// //inspect - developer tools - console - network

// //fetch API

// fetch("URL")
// get request to URL
// .then(response => response.json())
// converts the response to usable JSON data
// .then(data => console.log(data))
// do something with the data (log it, display it, etc)
// .catch(error => console.error(error))
// errors

// //async/await - a cleaner way to write the same thing

// function name(params) {

// }

// async function fetchRepos() {
// try {
//     let response = await fetch(URL)
//     let data = await response.json()
//     console.log(data)
// } catch(error) {
//     console.error('An error occurred', error)
//     }
// }

// fetchRepos()

// let projectList = document.querySelector("#projoects ul")
// data.forEach(function(repo) {

// });

//Scrimba https://scrimba.com/javascript-deep-dive-c0a/~02p

//jsonplaceholder.typicode.com
//Get /poats/1 - single blog post
// POST /posts

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//   //remember to call it .json()
//     .then((data) => console.log(data));
//can get porperties off of it. ex) the title property by (data.title)
//the only thing we've provided to fetch is the end point.

// let hello = "Hello World";
// console.log(hello);

//javaScript Object - convert to json
// const blogPost = {
//   title: "Cool post",
//   body: "gbgsg sg ",
//   userId: 1,
// };

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(blogPost),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//misspelled domain. still consoles as fetch promise, even if failed status code. the catch callback wont run. console error the error - detect the error. Use ok, true if status code is successful/failure in 200 range. if not response.ok is false - request failed.

// fetch("https://jsonplaceholder.typicode.com/pots/1")
//   .then((response) => {
//     if (!response.ok) {
//       // throw new Error('Oops!'); //include status code instead use: throw new Error(response.status);
//       throw new Error(response.status);
//     }
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// Challenge
// fetch("https://jsonplaceholder.typicode.com/users/3")
// .then(response => {
//     //console.log(response)
//      if (!response.ok) { //handling errors
//         throw new Error(response.status);
//     }
//     return response.json();
//    return response.json();
// })
// .then(person => {
//     console.log(person.name);
//     console.log(person.company.name);
//      console.log(`${person.name} works for ${person.company.name}`);
// })
// .catch(err => console.log(err));

//Async -

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => response.json())
// .then(data => console.log(data));

// Dead-Simple Promises with async-await
// 1. always returns a promise
// async function getBlogPost() {} //always returns a promise
// getBlogPost().then(() => console.log('works as a promise'));

// 2. another way to write
// async function getBlogPost() {
//     return 'works here too!';
// }
// getBlogPost().then(() => console.log('works as a promise'));

//----------

// //const getBlogPost = asyncBlogPost() {}

// getBlogPost().then(() => console.log('works as a promise'));

// Resolving or rejecting a promise. Create new promise

// function getBlogPost() {
//     new Promise((resolve, reject) => {
//         setTimeout(() => resolve('blog post'), 1000);
//     });
// }
//     Promise.then(value => console.log(value))
//     .finally(() => console.log('done'));
// }

// getBlogPost()

//three functions getting called here. a lot of code.
// function getBlogPost() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('blog post'), 1000);
//     });

//     promise
//     .then(value => console.log(value))
//     .finally(() => console.log('done'));
// }
// getBlogPost()

//Tell to pause until the promise is resolved. put resolved in variable. use async and await
// async function getBlogPost() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('blog post'), 1000);
//     });

//    const result = await promise;
//    console.log(result);
//    console.log('done');
//     // .then(value => console.log(value))
//     // .finally(() => console.log('done'));
// }

// getBlogPost()

// //await must have prepended async

// const response = fetch('https://jsonplaceholder.typicode.com/posts/1');
//   .then(response => response.json())
//   .then(data => console.log(data));

// async function getPost() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const data = await response.json();
//   console.log(data);
// }
// getPost();

// // projects section
// fetch(https://jsonplaceholder.typicode.com/posts/1)
//   .then(response => response.json())
//   .then(data => console.log(data.title))
//   .catch(error => console.error(error))

async function fetchRepos() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) {
      throw new Error("Request error");
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("An error occured", error);
  }
}
fetchRepos();

let projectList = document.querySelector("#projects ul");

Date.forEach(function (repo) {
  let project = document.createElement("li");
  project.textContent = repo.name;
  projectList.appendChild(project);
});

// async function fetchRepos() {
//   try {
//     let response = await fetch("https://api.github.com/users/aallenCR808/repos")
//       .then(response => response.json())
//       .then(name => {
//         const repositories = JSON.parse(name);
//         console.log(response);
//       })
//    .catch (error => console.error("An error occured", error));
// }
// fetchRepos();

//find project section and ul
//   const projectSection = document.querySelector("#Projects"); //or document.getElementById("Projects");
//   const projectList = projectSection.querySelector("#ul"); //or projectSection.getElementsByTagName("ul");

//Alternative option - for and for each
//   //create repositories list by adding to HTML
//   for (let i = 0; i < repositories.length; i++) {
//     let project = document.createElement("li");
//     project.className = "repo-list";
//   }
// });

for (let i = 0; i < data.length; i++) {
  let project = document.createElement("li");
  project.innerHTML = date[i];
  projectList.appendChild(project);
}

// //for each: add each element to project list
// data.forEach((element) => {
//   let project = document.createElement("li");
//   project.innerHTML = element.name;
//   projectList.appendChild(project);
// });

//about ideas  Hi, I'm Apeh! I am a multifaceted, Afro-Costarican, Austrian and German, first generation,
//         bilingual, animal lover and advocate, AND a software developer...to name a few!
