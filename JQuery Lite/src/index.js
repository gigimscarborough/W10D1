const DNC = require("./dom_node_collection")

window.$l = (arg) => {
    if (typeof arg === "string"){
        return getNodesFromDom(arg)
    }
}

getNodesFromDom = (selector) => {
    const nodes = document.querySelectorAll(selector)
    const nodeArray = Array.from(nodes)
    return new DomNodeCollection(nodeArray)
}

