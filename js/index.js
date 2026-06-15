// cursor change on h1
let heading = document.querySelector("h1");
heading.style.cursor = "pointer";

//color changes on click h1
heading.addEventListener("click", function () {
  if (heading.style.color === "green") {
    heading.style.color = "black";
  } else {
    heading.style.color = "green";
  }
});

// projects section
//fetch API my gitHub repos
fetch("https://api.github.com/users/aallenCR808/repos")
  .then((response) => {
    if (!response.ok) {
      //turn off internet to test this
      throw new Error("Request failed", response.status);
    }
    return response.json(); //Parse the response as JSON
  })
  //Get the data and add it to the html - once you have to data, use DOM to show it
  .then((data) => {
    console.log("json data = ", data);
    // Do something with the data. It's an array with objects
    repositories = [...data];
    console.log("repositories array =", repositories);
    //add to HTML in Projects section under ul
    let projectList = document.querySelector("#Projects ul");
    // //for each: add each element to project list
    // data.forEach((element) => {
    //   let project = document.createElement("li");
    //   project.innerHTML = element.name;
    //   projectList.appendChild(project);
    // });
    for (let i = 0; i < data.length; i++) {
      let project = document.createElement("li");
      //can add anchor to click and open page
      project.innerHTML = data[i].name;
      //project.innerHTML = `<a target="_blank" href=`${data[i].html_url}`>${data[i].name}</a>` go to HTML and delete <a href
      // later can add data[i].html_url => click to bring to github project link
      projectList.appendChild(project);
    }
  })
  .catch((error) => console.error(error));

// skills section
let skills = ["JavaScript", "HTML", "CSS", "GitHub"];
let skillsSection = document.querySelector("#Skills");
let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.textContent = skills[i];
  skillsList.appendChild(skill);
}

// contact message form
const messageForm = document.querySelector('[name="leave_message"]');
messageForm.addEventListener("submit", function (event) {
  //prevent page from refreshing
  event.preventDefault();

  let name = event.target.usersName.value;
  let email = event.target.usersEmail.value;
  let message = event.target.usersMessage.value;
  console.log(`${email} ${name} ${message}`);
  console.log(event);

  //message list
  messageSection = document.getElementById("messages"); //"messages"
  messageList = messageSection.querySelector("ul");
  let newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${email}">${name}</a><span>${message}</span>`;
  messageList.appendChild(newMessage);

  //remove button from message list
  let removeButton = document.createElement("button");
  removeButton.setAttribute("type", "button"); //airhub reccomendation
  removeButton.innerHTML = "Remove"; //can put emoji

  removeButton.addEventListener("click", function () {
    let entry = this.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageForm.reset();
});

// copyright tag
let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = `\u00A9 ${thisYear} August Apeh Clary`;
footer.appendChild(copyright);
