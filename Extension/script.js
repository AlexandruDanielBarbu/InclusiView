/* const style = `
  body {
    font-size: 20px;
    line-height: 1.5;
    background-color: grey;
  }
`;

// Create a style element
const styleElement = document.createElement("style");
styleElement.textContent = style;

const body = document.querySelector("body");

// Append the style element to the head
document.head.appendChild(styleElement); */

const site = window.location.hostname;

const Add_Custom_Style = (css) =>
  (document.head.appendChild(document.createElement("style")).innerHTML = css);

function Create_Custom_Element(tag, attr_tag, attr_name, value) {
  const custom_element = document.createElement(tag);
  custom_element.setAttribute(attr_tag, attr_name);
  custom_element.innerHTML = value;
  document.body.append(custom_element);
}

Add_Custom_Style(`
    * {
        font-size: 30px !important;
        line-height: 1.5 !important;
        padding: 0px 5px 0px 5px;
        margin: 5px !important;
    }
`);
