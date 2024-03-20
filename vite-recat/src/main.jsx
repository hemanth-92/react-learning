import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
	return (
		<div>
			<h1>learning from chai aur code</h1>
		</div>
	);
}
// const reactElement = {
// 	type: "a",
// 	props: {
// 		href: "https://www.google.com",
// 		target: "_blank",
// 	},
// 	children: "click to visit me",
// };
const anotherElement = (
	<a href="https://google.com" target="_blank">
		visit google
	</a>
);
const anotherUser = "sarath"
const reactElement = React.createElement(
	'a',
	{ href: 'https://google.com', target: '_blank' }, 'click here', anotherUser
);
ReactDOM.createRoot(document.getElementById("root")).render(
	reactElement
	//<App />
);
