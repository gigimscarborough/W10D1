class DOMNodeCollection{
    constructor(nodes) {
        this.nodes = nodes
    }

    html(str) {
        if (typeof str === "string") {
            this.each((node) => {
                node.innerHTML = html; 
            });
        } else if (this.nodes.length > 0) {
            return this.nodes[0].innerHTML;
        }
    }

    empty() {
        this.html('')
    }

    append(children) {
        if (!this.nodes.length) return;

        if (typeof children === 'object' &&
            !(children instanceof DOMNodeCollection)) {
            children = $l(children);
        }

        if (typeof children === "string") {
            this.each((node) => {
                node.innerHTML += children;
            });
        } else if (children instanceof DOMNodeCollection) {
            this.each((node) => {
                children.each((childNode) => {
                    node.appendChild(childNode.cloneNode(true));
                });
            });
        }
    }

    attr(attr, val) {
        if (typeof val === 'undefined') {
            return this.nodes[0].getAttribute(attr);
        } else {
            this.each((node) => {
                node.setAttribute(attr, val)
            })
        }
    }
 
    addClass(className) {
        this.each((node) => {
            node.classList.add(className);
        })
    }

    removeClass(className) {
        this.each((node) => {
            node.classList.remove(className);
        })
    }

    children() {
        this.nodes.map(node => {
            return node.children 
        })
    }

    parent() {

    }

    find() {

    }
}


module.exports = DOMNodeCollection;