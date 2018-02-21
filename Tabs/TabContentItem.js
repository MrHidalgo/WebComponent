/**
 *
 */
class TabContentItem extends HTMLElement {
    constructor() {
        // console.log(`constructed`);

        super();

        this._target = null;
        this._content = null;
    }

    connectedCallback() {
        // console.log(`connected`);

        this.render();
    }

    static get observedAttributes() {
        // console.log(`observedAttributes`);

        return [
            'target',
            'content'
        ];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // console.log(`name: ${name} --- oldVal: ${oldValue} --- newVal: ${newValue}`);

        if(oldValue !== newValue) {
            this[`_${name}`] = newValue;
            this.render();
        }
    }

    render() {
        // console.log(`render`);

        if(!this.ownerDocument.defaultView) {
            return;
        }

        this.innerHTML = `
            <div>${this._content}</div>
        `;
    }
}

/**
 *
 */
customElements.define('tab-content-item', TabContentItem);
