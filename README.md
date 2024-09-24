![App Icon](icons/icon128.png)

# Bullshit Translator

Bullshit Translator is a Chrome extension that helps you translate jargon, buzzwords, and other confusing text into plain language. This tool is perfect for anyone who wants to cut through the noise and understand the true meaning behind complex or misleading text.

> This project is heavily inspired by [Bullshit Remover](https://www.bullshitremover.com/) but was created out of a need to do that on all web pages.

## Features

- **Context Menu Integration**: Right-click on any selected text and choose "Translate Bullshit" to get an instant translation.
- **Popup Interface**: Use the popup interface to process the entire page or selected text.
- **Simple and Clean UI**: The extension features a user-friendly interface with clear instructions.

## Installation

1. Clone the repository or download the ZIP file.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the directory containing the extension files.

## Usage

### Context Menu

1. Select the text you want to translate.
2. Right-click on the selected text.
3. Click on "Translate Bullshit" from the context menu.
4. A translation alert will appear with the plain language version of the selected text.

### Popup Interface

1. Click on the extension icon in the Chrome toolbar to open the popup.
2. Follow the instructions in the popup to process the page or selected text.

## Files

### `manifest.json`

Defines the extension's metadata, permissions, and scripts.

### `content.js`

A placeholder script for future content processing features.

### `popup.html`

The HTML structure and styling for the popup interface.

### `popup.js`

Handles the logic for the popup interface, including processing the selected text.

### `background.js`

Manages the context menu and handles the translation logic when the context menu item is clicked.

## API

The extension uses the [Bullshit Translator API](https://bullshit-translator-api.vercel.app/) to translate text. The API expects a POST request with a JSON body containing the text to be translated.

The API is open source and available on GitHub: [Bullshit Translator API](https://github.com/jbouaziz/bullshit-translator-api).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/)
- [Bullshit Translator API](https://bullshit-translator-api.vercel.app/)

---

Happy translating!