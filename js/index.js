let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = `\u00A9 ${thisYear} August Apeh Clary`;
footer.appendChild(copyright);

let skills = ["JavaScript", "HTML", "CSS", "GitHub"];
let skillsSection = document.querySelector("#Skills");
let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.textContent = skills[i];
  skillsList.appendChild(skill);
}
// cursor change on h1
let heading = document.querySelector("h1");
heading.style.cursor = "pointer";

//color changes on click
heading.addEventListener("click", function () {
  if (heading.style.color === "green") {
    heading.style.color = "black";
  } else {
    heading.style.color = "green";
  }
});

//Form
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  console.log(event);
  event.preventDefault();

  let name = event.target.usersName.value;
  let email = event.target.usersEmail.value;
  let message = event.target.usersMessage.value;
  form.reset();

  let messageList = document.querySelector("#messages ul");
  let newMessage = document.createElement("li");

  newMessage.innerHTML = `<a href="mailto:${email}">${email}</a><span>${message}</span> `;

  messageList.appendChild(newMessage);

  let removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove"; //can put emoji

  removeButton.addEventListener("click", function () {
    let entry = this.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);

  console.log(`${name} ${email} ${message}`);
  console.log(event);
});

//
