const DOMNodeCollection = require("./dom_node_collection")

window.$l = (arg) => {
    if (typeof arg === "string"){
        return getNodesFromDom(arg)
    } else if (typeof arg === "object" && arg instanceof HTMLElement) {
        return new DOMNodeCollection([arg])
    }
}

getNodesFromDom = (selector) => {
    const nodes = document.querySelectorAll(selector)
    const nodeArray = Array.from(nodes)
    return new DomNodeCollection(nodeArray)
}

