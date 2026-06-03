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
