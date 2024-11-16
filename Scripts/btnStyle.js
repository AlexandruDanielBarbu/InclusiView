console.log("Script loaded");
const applyStylesButton = document.getElementById('applyStyles');
const previewButton = document.getElementById('previewButton');

// 1. Access saved button style when the popup is opened
chrome.storage.sync.get("buttonStyle", (data) => {
    // If there's saved style data, apply it to the button
    if (data.buttonStyle) {
      // Apply each style from the stored object to the button
      console.log(data);
    }
  });

applyStylesButton.addEventListener('click', () => {
  const backgroundColor = document.getElementById('backgroundColor').value;
  const fontColor = document.getElementById('fontColor').value;
  const buttonSize = document.getElementById('buttonSize').value;

  console.log(backgroundColor);
  console.log(fontColor);
  console.log(buttonSize);

  previewButton.style.backgroundColor = backgroundColor;
  previewButton.style.color = fontColor;

  switch (buttonSize) {
    case 'small':
      previewButton.style.padding = '5px 10px';
      previewButton.style.fontSize = '12px';
      break;
    case 'medium':
      previewButton.style.padding = '10px 20px';
      previewButton.style.fontSize = '16px';
      break;
    case 'large':
      previewButton.style.padding = '15px 30px';
      previewButton.style.fontSize = '20px';
      break;
  }

  chrome.storage.sync.set({
    buttonStyle: {
        backgroundColor: previewButton.style.backgroundColor,
        color: previewButton.style.color,
        fontSize: previewButton.style.fontSize,
    }
  })
});
