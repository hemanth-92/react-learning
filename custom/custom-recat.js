function customRender(reactElement, container) {
  /*const domElememt = document.createElement(reactElement.type)
	domElememt.innerHTML = reactElement.children
	domElememt.setAttribute('href', reactElement.props.href)
	domElememt.setAttribute('target', reactElement.props.target)
	container.appendChild(domElememt)
	*/
  const domElememt = document.createElement(reactElement.type);
  domElememt.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElememt.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElememt);
}
const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "click to visit me",
};
const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
