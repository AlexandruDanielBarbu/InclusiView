// const site = window.location.hostname;

// const Add_Custom_Style = (css) =>
// 	(document.head.appendChild(document.createElement("style")).innerHTML = css);

// function Create_Custom_Element(tag, attr_tag, attr_name, value) {
// 	const custom_element = document.createElement(tag);
// 	custom_element.setAttribute(attr_tag, attr_name);
// 	custom_element.innerHTML = value;
// 	document.body.append(custom_element);
// }

// Add_Custom_Style(`
// 	* {
// 		font-size: 28px !important;
// 		line-height: 1.6 !important;
// 	}

// 	p {
// 		padding-left: 20px !important;
// 		padding-right: 20px !important;
// 	}

// 	img {
// 		max-width: 50% !important;
// 		margin-left: 30%;
// 		margin-right: 30%;
// 	}
// `);


let isCSSApplied = false;
let customStyleElement;

// Handle messages from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "toggleCSS") {
    toggleCSS(message.state);
  } else if (message.action === "activateReader") {
    activateScreenReader();
  } else if (message.action === "deactivateReader") {
    deactivateScreenReader();
  }
});

// Function to toggle CSS application
function toggleCSS(state) {
  if (state) {
    if (!isCSSApplied) {
      applyCustomCSS();
      isCSSApplied = true;
    }
  } else {
    if (isCSSApplied) {
      removeCustomCSS();
      isCSSApplied = false;
    }
  }
}

// Apply custom CSS to the page
function applyCustomCSS() {
  customStyleElement = document.createElement("style");
  customStyleElement.textContent = `
 	* {
 		font-size: 28px !important;
 		line-height: 1.6 !important;
 	}
 	p {
 		padding-left: 20px !important;
 		padding-right: 20px !important;
 	}
 	img {
 		max-width: 50% !important;
 		margin-left: 30%;
 		margin-right: 30%;
 	}
  `;
  document.head.appendChild(customStyleElement);
}

// Remove custom CSS from the page
function removeCustomCSS() {
  if (customStyleElement) {
    document.head.removeChild(customStyleElement);
  }
}

// Activate screen reader functionality
function activateScreenReader() {
  // Example: Highlight elements for accessibility
  document.body.querySelectorAll("*").forEach((el) => {
    el.setAttribute("tabindex", "0");
    el.setAttribute("role", "button");
  });
  console.log("Screen reader enabled");
}

// Deactivate screen reader functionality
function deactivateScreenReader() {
  document.body.querySelectorAll("*").forEach((el) => {
    el.removeAttribute("tabindex");
    el.removeAttribute("role");
  });
  console.log("Screen reader disabled");
}