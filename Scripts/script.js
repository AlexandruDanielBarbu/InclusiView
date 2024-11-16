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
`);
