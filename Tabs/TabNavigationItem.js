/**
 *
 */
class TabNavigationItem extends HTMLElement {
    constructor() {
        super();

        this._target = null;
        this._name = null;
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return [
            'target',
            'name'
        ];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(oldValue !== newValue) {
            this[`_${name}`] = newValue;
            this.render();
        }
    }

    render() {
        if(!this.ownerDocument.defaultView) {
            return;
        }

        this.innerHTML = `
            <a href='#${this._target}'>${this._name}</a>
        `;
    }
}


/**
 *
 */
customElements.define('tab-nav-item', TabNavigationItem);