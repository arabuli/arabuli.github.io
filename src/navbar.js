const content = document.getElementById("container");



function createNavigation() {
  const navigation = document.createElement("NAV");
  navigation.classList.add("navbar");
  const list = document.createElement("ul");

  const homeItem = document.createElement("li");
  const homea = document.createElement("a");
  homea.textContent = "Home";
  homea.setAttribute("href", "#welcome");
  homeItem.appendChild(homea);

  const projectsItem = document.createElement("li");
  const projectsa = document.createElement("a");
  projectsa.textContent = "Projects";
  projectsa.setAttribute("href", "#projects");
  projectsItem.appendChild(projectsa);

  const contactItem = document.createElement("li");
  const contacta = document.createElement("a");
  contacta.textContent = "Contact";
  contacta.setAttribute("href", "#contact");
  contactItem.appendChild(contacta);


  list.appendChild(homeItem);
  list.appendChild(projectsItem);
  list.appendChild(contactItem);

  navigation.appendChild(list);



  //Add Home Button
  // let homepageButton = document.createElement("button");
  // homepageButton.textContent = "Home";
  // navigationDiv.appendChild(homepageButton);
  // homepageButton.addEventListener("click", function () {
  //   singleSection.innerHTML = "";
  //   singleSection.appendChild(homePage());
  //   content.appendChild(singleSection);
  // });




  //Add Menu Button
  // let menuButton = document.createElement("button");
  // menuButton.textContent = "Menu";
  // navigationDiv.appendChild(menuButton);
  // menuButton.addEventListener("click", function () {
  //   singleSection.innerHTML = "";
  //   singleSection.appendChild(menuPage());
  //   getConentContainer.appendChild(singleSection);
  // });

  // //Add Contact Button
  // let contactButton = document.createElement("button");
  // contactButton.textContent = "Contact";
  // navigationDiv.appendChild(contactButton);
  // contactButton.addEventListener("click", function () {
  //   singleSection.innerHTML = "";
  //   singleSection.appendChild(contact());
  //   getConentContainer.appendChild(singleSection);
  // });
  content.appendChild(navigation);
  return navigation;
}


export default createNavigation;