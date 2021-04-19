const container = document.getElementById("container");

function displayProjects() {
  const section = document.createElement("section");
  section.setAttribute("id", "projects");

  const header = document.createElement("h3");
  header.textContent = "Here are some of my projects";

  const projectsContainer = document.createElement("div");
  projectsContainer.setAttribute("id", "projects-container");

  const projectOne = document.createElement("div");
  projectOne.setAttribute("id", "project-one");
  projectOne.setAttribute("onclick", "window.open('https://arabuli.github.io/library/')");
  projectOne.textContent = "Library";


  const projectTwo = document.createElement("div");
  projectTwo.setAttribute("id", "project-two");
  projectTwo.setAttribute("onclick", "window.open('https://arabuli.github.io/calculator/')");
  projectTwo.textContent = "Calculator";

  const projectThree = document.createElement("div");
  projectThree.setAttribute("id", "project-three");
  projectThree.setAttribute("onclick", "window.open('https://arabuli.github.io/calculator/')");
  projectThree.textContent = "Calculator";

  const projectFour = document.createElement("div");
  projectFour.setAttribute("id", "project-four");
  projectFour.setAttribute("onclick", "window.open('https://arabuli.github.io/calculator/')");
  projectFour.textContent = "Calculator";

  projectsContainer.appendChild(projectOne);
  projectsContainer.appendChild(projectTwo);
  projectsContainer.appendChild(projectThree);
  projectsContainer.appendChild(projectFour);



  section.appendChild(header);
  section.appendChild(projectsContainer);

  container.appendChild(section);
}







export {
  displayProjects
}