chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "translateBullshit",
    title: "Translate Bullshit",
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
    alert("Please select some text on the page before processing.");
    return;
  }

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
  alert(result.translation);
}
