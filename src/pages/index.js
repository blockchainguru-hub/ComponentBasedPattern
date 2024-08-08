import { headerComponent } from "../components/Header.js";

const rootDiv = document.getElementById("root");

const header = headerComponent();

const bodyContainer = document.createElement("div");
const pageTitle = document.createElement("h1");
pageTitle.innerHTML = "This is a Home page";
bodyContainer.appendChild(pageTitle);
bodyContainer.style.cssText = `display:flex;justify-content:center;height: 60vh;align-item:center`;

rootDiv.appendChild(header);
rootDiv.appendChild(bodyContainer);
