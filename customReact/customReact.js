
function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children
    domElement.setAttribute("href", reactElement.props.href)
    domElement.setAttribute("href", reactElement.props.target)
    container.appendChild(domElement)
}



const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "click here to visit to google"
}




const mainContainer = document.getElementById("#root")

customRender(reactElement, mainContainer)