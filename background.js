function onClickHandler(info, tab) {
  chrome.tabs.sendMessage(tab.id, "createLink");
}

chrome.contextMenus.onClicked.addListener(onClickHandler);
chrome.contextMenus.create({title: "Create a link to GitHub", id: "createLinktoGitHub"});
