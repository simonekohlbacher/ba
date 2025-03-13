'use strict';
import KWM_Component from '../../core/kwm-component.js';

export default class ImageTextInColorComponent extends KWM_Component {
    constructor() {
        super();
    }

    template() {
        return /*html*/`
            <section class="image-and-text">
                <div class="content">
                    <div class="text">
                        <h2>${this.getAttribute('heading') ?? ''}</h2>
                        </br>
                        <p>${this.getAttribute('text') ?? ''}</p>
                        <p><a class="btn btn-secondary" target="_blank" href="${this.getAttribute('link') ?? '#/'}">${this.getAttribute('btn-text') ?? ''}</a></p>
                    </div>
                    <img src="${this.getAttribute('image')}" alt="${this.getAttribute('alt')}" />
                </div>
            </section>
        `;
    }
}

customElements.define('image-text-color-component', ImageTextInColorComponent);