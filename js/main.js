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
  style.innerHTML = `.floating {
    position: fixed;
    bottom: 90px;
    left: 0;
    width: 300px
    height: 250px;
    z-index: 100;

  }`;
  document.head.appendChild(style);

  const videoDiv = document.createElement("div");
  videoDiv.className = "aplvideo floating";

  const videoScript = document.createElement("script");
  videoScript.async = true;
  videoScript.src = "https://jscdn.greeter.me/adfree3kh0.github.iovideo.js";

  videoDiv.appendChild(videoScript);
  document.body.appendChild(videoDiv);
});