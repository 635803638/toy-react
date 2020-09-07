class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type);
    }
    //属性
    setAttribute(name, value) {
        this.root.setAttribute(name, value)
    }
    appendChild(component) {
        this.root.appendChild(component.root)
    }
}
// 文本节点
class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content);
    }

}
export class Component {
    constructor() {
        this.props = Object.create(null);
        this.children = [];
        this._root = null;
    }
    setAttribute(name, value) {
        this.props[name] = value;
    }
    appendChild(component) {
        this.children.push(component)
    }
    get root() {
        if (!this._root) {
            this._root = this.render().root;
        }
        return this._root;

    }
}


export function createElement(type, atrributes, ...children) {
    let e;
    if (typeof type === 'string') {
        // e = document.createElement(type);
        e = new ElementWrapper(type);
    } else {
        e = new type;
    }

    for (let p in atrributes) {
        e.setAttribute(p, atrributes[p]);
    }
    let instanceChilden = (children) => {
        for (let child of children) {
            if (typeof child === 'string') {
                child = new TextWrapper(child)
                // child = document.createTextNode(child)
            }
            if ((typeof child === 'object') && (child instanceof Array)) {
                instanceChilden(child)
            } else {
                e.appendChild(child)
            }


        }
    }
    instanceChilden(children);


    return e;

}

export function render(component, parenetElement) {
    parenetElement.appendChild(component.root);
}