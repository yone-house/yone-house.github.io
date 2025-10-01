function resizeIframe() {
  const iframe = document.getElementById("iframe");
  if (iframe.contentWindow && iframe.contentWindow.document.body) {
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
  }
}

document.getElementById("iframe").addEventListener("load", resizeIframe);
