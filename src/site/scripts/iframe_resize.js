window.addEventListener("message", (event) => {
  if (event.origin === "https://yone.house" && event.data.iframeHeight) {
    document.getElementById("iframe").style.height = event.data.iframeHeight + "px";
  }
});
