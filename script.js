chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request == "createLink") {
    createLink();
  }
});

function createLink() {
  const url = document.URL;
  var title = '';

  if (url.includes('commit')) {
    title = document.getElementsByClassName('commit-title')[0].textContent.trim();
  } else {
    title = document.getElementsByClassName('js-issue-title')[0].textContent.trim();
  }

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
