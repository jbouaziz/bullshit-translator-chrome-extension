function showModal(before, translation) {
  // Remove existing modal if it exists
  const existingModal = document.getElementById("bullshit-translator-modal");
  if (existingModal) {
    existingModal.remove();
  }

  // Create modal
  const modal = document.createElement("div");
  modal.id = "bullshit-translator-modal";
  modal.style.position = "fixed";
  modal.style.bottom = "20px";
  modal.style.right = "20px";
  modal.style.width = "800px";
  modal.style.backgroundColor = "#fff";
  modal.style.borderRadius = "8px";
  modal.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
  modal.style.zIndex = "10000";
  modal.style.fontFamily = "Arial, sans-serif";
  modal.style.fontSize = "14px";
  modal.style.color = "#333";
  modal.style.overflow = "hidden";

  // Header
  const header = document.createElement("div");
  header.style.display = "flex";
  header.style.justifyContent = "space-between";
  header.style.alignItems = "center";
  header.style.padding = "8px 16px";
  header.style.borderBottom = "1px solid #e0e0e0";

  // Add logo
  const logo = document.createElement("div");
  logo.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M466.066 249.974C458.333 281.999 440.076 310.487 414.222 330.912C388.349 351.337 356.405 362.487 323.462 362.585H176.538C143.596 362.487 111.652 351.337 85.7777 330.912C59.9237 310.487 41.6661 281.997 33.9338 249.974C10.4818 277.039 -1.60562 312.091 0.171504 347.864C1.96797 383.617 17.4918 417.304 43.5217 441.888C69.5512 466.473 104.074 480.044 139.886 479.79H360.114C395.927 480.044 430.449 466.473 456.478 441.888C482.508 417.304 498.032 383.621 499.829 347.864C501.606 312.09 489.518 277.039 466.066 249.974Z" fill="url(#paint0_linear_193_155)"/>
      <path d="M176.538 333.297H323.462C352.694 333.179 380.87 322.205 402.47 302.502C424.086 282.799 437.579 255.754 440.372 226.638V215.938V215.957C440.352 207.6 439.454 199.262 437.736 191.099C431.995 164.933 417.486 141.52 396.65 124.708C375.795 107.895 349.824 98.6984 323.031 98.6199H229.731L195.715 69.4661L140.182 21V104.577L140.162 104.597C133.133 106.901 126.357 109.869 119.893 113.481C90.3095 129.884 69.164 158.198 61.8406 191.24C60.1222 199.421 59.2435 207.74 59.2044 216.098V226.798V226.779C62.0359 255.952 75.6269 282.997 97.3213 302.703C119.016 322.386 147.252 333.302 176.544 333.302L176.538 333.297Z" fill="url(#paint1_linear_193_155)"/>
      <defs>
        <linearGradient id="paint0_linear_193_155" x1="27.5" y1="47.5" x2="500" y2="519.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00DDFF"/>
          <stop offset="1" stop-color="#FF00D4"/>
        </linearGradient>
        <linearGradient id="paint1_linear_193_155" x1="27.5" y1="47.5" x2="500" y2="519.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00DDFF"/>
          <stop offset="1" stop-color="#FF00D4"/>
        </linearGradient>
      </defs>
    </svg>
  `;
  logo.style.width = "16px";
  logo.style.height = "16px";
  logo.style.marginRight = "8px";

  const titleContainer = document.createElement("div");
  titleContainer.style.display = "flex";
  titleContainer.style.alignItems = "center";

  const title = document.createElement("span");
  title.textContent = chrome.i18n.getMessage("popupTitle");
  title.style.fontWeight = "bold";

  titleContainer.appendChild(logo);
  titleContainer.appendChild(title);

  const closeButton = document.createElement("button");
  closeButton.textContent = "×";
  closeButton.style.background = "none";
  closeButton.style.border = "none";
  closeButton.style.cursor = "pointer";
  closeButton.style.fontSize = "20px";
  closeButton.style.color = "#5f6368";
  closeButton.onclick = () => modal.remove();

  header.appendChild(titleContainer);
  header.appendChild(closeButton);

  // Content
  const content = document.createElement("div");
  content.style.display = "flex";

  const leftPanel = createPanel(chrome.i18n.getMessage("resultModalLeftPanelTitle"), before);
  const rightPanel = createPanel(chrome.i18n.getMessage("resultModalRightPanelTitle"), translation);

  content.appendChild(leftPanel);
  content.appendChild(rightPanel);

  modal.appendChild(header);
  modal.appendChild(content);
  document.body.appendChild(modal);

  function createPanel(label, text) {
    const panel = document.createElement("div");
    panel.style.flex = "1";
    panel.style.padding = "16px";

    const labelElement = document.createElement("div");
    labelElement.textContent = label;
    labelElement.style.color = "#1a73e8"; // Bluish text color
    labelElement.style.fontSize = "14px"; // Increased font size
    labelElement.style.fontWeight = "bold";
    labelElement.style.display = "inline-block"; // Allow the element to shrink-wrap its content
    labelElement.style.borderBottom = "2px solid #1a73e8"; // Blue bottom border
    labelElement.style.padding = "0px 8px 8px";
    labelElement.style.marginLeft = "12px";

    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.width = "calc(100% - 16px)"; // Adjust width to account for padding
    textArea.style.height = "150px";
    textArea.style.border = "1px solid #e0e0e0"; // Add border to text area
    textArea.style.borderRadius = "4px"; // Rounded corners for the border
    textArea.style.padding = "8px"; // Add some padding inside the text area
    textArea.style.resize = "none";
    textArea.style.fontSize = "14px";
    textArea.style.lineHeight = "1.5";
    textArea.readOnly = true;

    // Apply grayish background to the right panel content
    if (label === chrome.i18n.getMessage("resultModalRightPanelTitle")) {
      textArea.style.backgroundColor = "#f5f5f5";
    }

    panel.appendChild(labelElement);
    panel.appendChild(textArea);

    return panel;
  }
}

// Expose the function to be callable from the background script
window.showBullshitTranslatorModal = showModal;
