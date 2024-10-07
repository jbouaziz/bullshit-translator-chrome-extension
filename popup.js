import Analytics from "./google-analytics.js";

document.addEventListener("DOMContentLoaded", () => {
  const processPageButton = document.getElementById("processPage");
  if (processPageButton) {
    processPageButton.addEventListener("click", () => {
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: processPageContent,
        });
        // Close the popup after initiating the script
        window.close();
      });
    });
  }

  document.getElementById("popupTitle").textContent = chrome.i18n.getMessage("popupTitle");
  document.getElementById("popupInstructions").innerHTML =
    chrome.i18n.getMessage("popupInstructions");
  document.getElementById("processPage").textContent = chrome.i18n.getMessage("popupButton");
  document.getElementById("popupChooseMethod").textContent =
    chrome.i18n.getMessage("popupChooseMethod");
});

async function processPageContent() {
  const selection = window.getSelection().toString();
  window.processBullshitContent(selection);
  Analytics.fireEvent("popup_translate_button_click");
}
