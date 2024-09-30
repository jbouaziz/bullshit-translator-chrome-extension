chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "translateBullshit",
    title: chrome.i18n.getMessage("contextMenuTitle"),
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "translateBullshit") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: translateBullshit,
      args: [info.selectionText],
    });
  }
});

async function translateBullshit(selection) {
  if (!selection) {
    let message = chrome.i18n.getMessage("alertNoSelection");
    alert(message);
    // window.showBullshitTranslatorModal(message, message);
    return;
  }

  window.showBullshitTranslatorModal(selection, chrome.i18n.getMessage("alertLoading"));
  const response = await fetch("https://bullshit-translator-api.vercel.app/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: selection,
    }),
  });

  const result = await response.json();
  window.showBullshitTranslatorModal(selection, result.translation);
}
