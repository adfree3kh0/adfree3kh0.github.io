console.warn(
  "%cNote!",
  "color: purple; font-weight: 600; background: yellow; padding: 0 5px; border-radius: 5px",
  "If you want to add this game to your site, please reach out at our email: hello@senty.com.au\nPlease do not just add them without asking us first! Thank you!"
);

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOMContentLoaded");
  const stats = document.createElement("script");
  stats.setAttribute("defer", "");
  stats.setAttribute("data-domain", "adfree3kh0.github.io");
  stats.setAttribute("src", "https://stats.senty.com.au/js/script.js");
  document.head.append(stats);


  const headScript = document.createElement("script");
  headScript.async = true;
  headScript.src = "https://jscdn.greeter.me/adfree3kh0.github.iohead.js";
  headScript.defer = true;
  document.head.appendChild(headScript);

  const style = document.createElement("style");
  style.innerHTML = `
  .floating {
    position: fixed;
    bottom: 90px;
    left: 0;
    width: 300px
    height: 250px;
    z-index: 100;
  }
  .all-games-button {
    position: fixed;
    top: 10px;
    left: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    color: #000;
    font-size: 12px;
    font-weight: 600;
    border: 2px solid #000;
    outline: 2px solid #fff;
    padding: 5px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.3s ease;
    z-index: 100;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  }
  .all-games-button:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    border-color: #fff;
    outline-color: #000;
  }`;
  document.head.appendChild(style);

  const videoDiv = document.createElement("div");
  videoDiv.className = "aplvideo floating";

  const videoScript = document.createElement("script");
  videoScript.async = true;
  videoScript.src = "https://jscdn.greeter.me/adfree3kh0.github.iovideo.js";

  videoDiv.appendChild(videoScript);
  document.body.appendChild(videoDiv);


  // add a nice button at the top left of the screen with the text "All Games" that links to the projects page
  const allGamesButton = document.createElement("a");
  allGamesButton.className = "all-games-button";
  allGamesButton.textContent = "All Games";
  allGamesButton.href = "/projects";
  document.body.appendChild(allGamesButton);
});