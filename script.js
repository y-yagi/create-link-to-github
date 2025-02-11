chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request == "createLink") {
    createLink();
  }
});

async function createLink() {
  const url = document.URL;
  var title = '';

  if (url.includes('/commit/')) {
    title = document.getElementsByTagName("title")[0].textContent.trim();
  } else if (url.includes('issues')) {
    title = document.querySelectorAll('[data-testid="issue-title"]')[0].textContent.trim();
  } else if (url.includes('pull') || url.includes('discussions')) {
    title = document.getElementsByClassName('js-issue-title')[0].textContent.trim();
  } else {
    title = url.replace("https://github.com/", "")
  }

  await navigator.clipboard.writeText(`[${title}](${url})`);
}
