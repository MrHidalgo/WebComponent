    
    constructor() is called when the element is created.
    
    connectedCallback() is called when (after) the element is attached to the DOM.
    
    observedAttributes() getter inside the constructor, including inside it a return statement that returns an array containing the names of the attributes you want to observe.
    
    attributeChangedCallback() callback is run whenever one of the element's attributes is changed in some way.