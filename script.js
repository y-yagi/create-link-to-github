chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request == "createLink") {
    createLink();
  }
});

function createLink() {
  const title = document.getElementsByClassName('js-issue-title')[0].textContent.trim();
  const url = document.URL;

  saveToClipboard(`[${title}](${url})`);
}

function saveToClipboard(str) {
    var textArea = document.createElement("textarea");
    textArea.style.cssText = "position:absolute;left:-100%";

    document.body.appendChild(textArea);

    textArea.value = str;
    textArea.select();
    document.execCommand("copy");

    document.body.removeChild(textArea);
}
