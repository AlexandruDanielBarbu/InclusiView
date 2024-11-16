// Listen for messages from popup to activate/deactivate the screen reader
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'activateReader') {
      chrome.scripting.executeScript({
        target: { tabId: sender.tab.id },
        func: activateScreenReader
      });
    } else if (message.action === 'deactivateReader') {
      chrome.scripting.executeScript({
        target: { tabId: sender.tab.id },
        func: stopReading
      });
    }
  });
  