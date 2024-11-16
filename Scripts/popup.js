const toggleButton = document.getElementById("toggle-btn");

// Check the saved toggle state when the popup is opened
chrome.storage.sync.get("extensionState", (data) => {
  toggleButton.checked = data.extensionState || false; // Default to 'false' if no data is saved
});

// Update the extension state when the toggle is changed
toggleButton.addEventListener("change", () => {
  const isActive = toggleButton.checked;
  
  // Save the toggle state to Chrome storage
  chrome.storage.sync.set({ extensionState: isActive });

  // You can add more logic here to enable or disable features based on the toggle
  if (isActive) {
    console.log("Extension is ON");
    // Add logic to activate extension features
  } else {
    console.log("Extension is OFF");
    // Add logic to deactivate extension features
  }
});

document.getElementById('toggle-screen-reader').addEventListener('change', function(event) {
    const isChecked = event.target.checked;

    // Save the toggle state in local storage
    chrome.storage.local.set({ 'screenReaderEnabled': isChecked }, function() {
      // Trigger a message to update content script accordingly
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: toggleScreenReader,
          args: [isChecked]  // Pass the toggle state to content script
        });
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

