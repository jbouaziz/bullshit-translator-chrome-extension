document.addEventListener("DOMContentLoaded", () => {
  const processPageButton = document.getElementById("processPage");
  if (processPageButton) {
    processPageButton.addEventListener("click", () => {
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: processPageContent,
        });
      });
    });
  }
});

async function processPageContent() {
  const selection = window.getSelection().toString();

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
