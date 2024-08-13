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

  // Create and insert the video div and script
  const videoDiv = document.createElement("div");
  videoDiv.className = "aplvideo";

  const videoScript = document.createElement("script");
  videoScript.async = true;
  videoScript.src = "https://jscdn.greeter.me/adfree3kh0.github.iovideo.js";

  videoDiv.appendChild(videoScript);
  document.body.appendChild(videoDiv);
});