const container = document.getElementById("container");

function displayName() {
  const name = document.createElement("h1");
  name.textContent = "Hello, this is Beka 😊";
  container.appendChild(name);
  return name;
}

function displayDescription() {
  const description = document.createElement("h4");
  description.textContent = "Fucking Renegade";
  container.appendChild(description);
  return description;
}

function displayIntro() {
  const section = document.createElement("section");
  section.classList.add("welcome-section");
  section.setAttribute("id", "welcome");
  section.appendChild(displayName());
  section.appendChild(displayDescription());
  container.appendChild(section);
}


export {
  displayIntro
}