const HOST = "http://127.0.0.1:8080";

export const headerComponent = () => {
  const homeLink = document.createElement("a");
  homeLink.innerText = "Home";
  homeLink.href = HOST;

  const detailLink = document.createElement("a");
  detailLink.innerText = "Details";
  detailLink.href = `${HOST}/details.html`;

  const header = document.createElement("header");
  header.appendChild(homeLink);
  header.appendChild(detailLink);
  header.style.cssText = `display: flex;gap: 20px;background-color: #d1d1d1;padding: 20px;`;

  return header;
};
