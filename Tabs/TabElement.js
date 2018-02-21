/**
 *
 */
class TabElement extends HTMLElement {
    constructor() {
        // console.log(`constructor`);

        super();

        this.listener = null;
    }

    connectedCallback() {
        // console.log(`connectedCallback`);

        this.listener = this.showTab.bind(this);
        this.init();
    }

    disconnectedCallback() {
        // console.log(`connectedCallback`);

        this.navs.forEach(nav => nav.removeEventListener("click", this.listener));
    }

    showTab(e) {
        e.preventDefault();
        e.stopPropagation();

        const target = e.target.closest('tab-nav-item')._target;

        [...this.tabs, ...this.navs].forEach(el => {
            if (el._target === target) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    }

    init() {
        // console.log(`init`);

        this.navs = this.querySelectorAll('tab-nav-item');
        this.tabs = this.querySelectorAll('tab-content-item');

        this.navs.forEach(nav => nav.addEventListener('click', this.listener));
    }
}


/**
 *
 */
customElements.define('tab-element', TabElement);