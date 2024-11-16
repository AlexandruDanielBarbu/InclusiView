const toggleButton = document.getElementById("toggle-btn");

// Check the saved toggle state when the popup is opened
chrome.storage.sync.get("extensionState", (data) => {
  toggleButton.checked = data.extensionState || false; // Default to 'false' if no data is saved
});

// Update the extension state when the toggle is changed
toggleButton.addEventListener("change", () => {
  const isActive = toggleButton.checked;
  
  chrome.storage.sync.set({ extensionState: isActive });

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "toggleCSS", state: isActive });
  });

});

document.getElementById("toggle-screen-reader").addEventListener("change", (event) => {
  const isChecked = event.target.checked;

  chrome.storage.local.set({ screenReaderEnabled: isChecked }, () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const action = isChecked ? "activateReader" : "deactivateReader";
      chrome.tabs.sendMessage(tabs[0].id, { action });
    });
  });
});

  // Function to update content script when the state changes
  function toggleScreenReader(enabled) {
    // You could implement logic to disable/enable the content script
    if (enabled) {
      // Inject or activate the screen reader if enabled
      chrome.runtime.sendMessage({ action: 'activateReader' });
    } else {
      // Stop the screen reader if disabled
      chrome.runtime.sendMessage({ action: 'deactivateReader' });
    }
  }

