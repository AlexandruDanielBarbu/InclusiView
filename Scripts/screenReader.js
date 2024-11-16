// Function to start reading text aloud
function readAloud(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';  // Language set to English
    window.speechSynthesis.speak(utterance);  // Start speaking
  }
  
  // Function to stop reading
  function stopReading() {
    window.speechSynthesis.cancel();  // Stop any ongoing speech
  }
  
  // Add a toggle to enable/disable screen reader
  let screenReaderEnabled = false;
  
  // Listen for the toggle state from the popup and set the screenReaderEnabled variable
  chrome.storage.local.get('screenReaderEnabled', function (data) {
    screenReaderEnabled = data.screenReaderEnabled || false;  // Default to true if not set
    if (screenReaderEnabled) {
      activateScreenReader();
    }
  });

  // Activate screen reader functionality by attaching event listeners
  function activateScreenReader() {
    const divElements = document.querySelectorAll('div');

    divElements.forEach(div => {
      div.addEventListener('mouseenter', (event) => {
        const text = event.target.innerText.trim();  // Get text of the hovered element
        if (text) {
          readAloud(text);  // Read the text aloud when hovered
        }
      });

      div.addEventListener('mouseleave', () => {
        stopReading();  // Stop reading when mouse leaves the div
      });
    });
  }
  
  // Listen for changes in the DOM (dynamic content added to the page)
  const observer = new MutationObserver(() => {
    if (screenReaderEnabled) {
      activateScreenReader();  // Reapply event listeners if screen reader is enabled
    }
  });

  // Start observing the document body for added elements
  observer.observe(document.body, { childList: true, subtree: true });
  