const site = window.location.hostname;
// const { Mistral } = require('@mistralai/mistralai');

const apiKey = "y7JBDqhZyNRdL700gMI4SCHHYkkcNFKL";

// const client = new Mistral({apiKey: apiKey});

// async function getChatResponse(userInput) {
//   try {
//       const chatResponse = await client.chat.complete({
//           model: "codestral-latest",
//           messages: [{ role: 'user', content: userInput }]
//       });
//       return chatResponse;
//   } catch (error) {
//       console.error('Error generating response:', error);
//       return null;
//   }
// }

// if (window.location.protocol !== "chrome-extension:" && window.location.protocol !== "edge-extension:") {
  const chatbot = document.createElement("div");
  chatbot.innerHTML = `
	<div id="chat-wrapper" style="position: fixed; bottom: 5px; right: 30px; width: 300px; height: 50px; background: #fff; border: 1px solid #ccc; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); overflow: hidden; transition: height 0.3s ease;">
		<div id="chat-header" style="height: 50px; background: #4CAF50; color: white; text-align: center; padding: 10px; cursor: pointer;">
		Chatbot
		</div>
		<div id="chat-container" style="height: calc(100% - 50px); overflow: hidden; display: none;">
		<div id="chat-box" style="height: calc(100% - 40px); overflow-y: auto; margin: 0; padding: 10px; box-sizing: border-box;"></div>
		<div style="display: flex; border-top: 1px solid #ccc;">
			<input type="text" id="user-input" placeholder="Ask me something!" style="flex: 1; height: 40px; box-sizing: border-box; padding: 10px; border: none;" />
			<button id="send-button" style="width: 50px; background: #4CAF50; color: white; border: none; cursor: pointer;">Send</button>
		</div>
		</div>
	</div>
	`;

  document.body.appendChild(chatbot);

  // Get elements
  const chatHeader = document.getElementById("chat-header");
  const chatContainer = document.getElementById("chat-container");
  const chatbotDiv = chatbot.querySelector("div");
  const sendButton = document.getElementById("send-button");
  const userInputField = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  // Initial states
  let isCollapsed = true;

  // Event listener for collapse/expand
  chatHeader.addEventListener("click", () => {
    if (isCollapsed) {
      // Expand the chat box
      chatbotDiv.style.height = "400px"; // Reset to full height
      chatContainer.style.display = "block"; // Show chat content
      isCollapsed = false;
    } else {
      // Collapse the chat box
      chatbotDiv.style.height = "50px"; // Collapse to header height only
      chatContainer.style.display = "none"; // Hide chat content
      isCollapsed = true;
    }
  });

  // Handle sending a message
  const sendMessage = () => {
    if (isCollapsed) return; // Don't allow messages when collapsed
    const userInput = userInputField.value.trim();
    if (!userInput) return; // Ignore empty input

    // Add user's message
    const userMessage = document.createElement("div");
    userMessage.textContent = "You: " + userInput;
    userMessage.style.marginBottom = "10px";
    chatBox.appendChild(userMessage);

    // Simulate a bot response
    const botResponse = document.createElement("div");
    
    // (async () => {
    //   const response = await getChatResponse(userInput);
    //   if (response) {
    //       // Assuming botResponse is an element in your DOM
    //       botResponse.textContent = response;
    //   } else {
    //     botResponse.textContent = "Sorry, something went wrong.";
    //   }
    // })();
    botResponse.textContent = "Sorry, something went wrong";
    botResponse.style.marginBottom = "10px";
    botResponse.style.color = "#555";
    chatBox.appendChild(botResponse);

    // Clear input field and scroll to bottom
    userInputField.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  };

  // Event listener for the "Enter" key
  userInputField.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  // Event listener for the "Send" button
  sendButton.addEventListener("click", sendMessage);
// }
