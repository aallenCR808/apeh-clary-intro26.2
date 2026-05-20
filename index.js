let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = `&copy; ${thisYear} Apeh Clary`;
footer.appendChild(copyright);

let skills = ["Javascript", "HTML", "CSS", "Github"];
let skillsSection = document.querySelector("#Skills");
let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.textContent = skills[i];
  skillsList.appendChild(skill);
}

let heading = document.querySelector("h1");
heading.style.cursor = "pointer";

heading.addEventListener("click", function () {
  if (heading.style.color === "green") {
    heading.style.color = "black";
  } else {
    heading.style.color = "green";
  }
});
