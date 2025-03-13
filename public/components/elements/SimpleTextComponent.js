'use strict';
import KWM_Component from '../../core/kwm-component.js';

export default class SimpleTextComponent extends KWM_Component {
    constructor() {
        super();
        const btnText = this.getAttribute('btn-text') ?? '';
    }

    template() {
        const heading = this.getAttribute('heading') ?? '';
        const text = this.getAttribute('text') ?? '';
        const link = this.getAttribute('link') ?? '#/';
        const btnText = this.getAttribute('btn-text') ?? '';

        let buttonHtml = '';
        if (btnText && link) {
            buttonHtml = `<a class="btn btn-primary" href="${link}">${btnText}</a>`;
        }

        return /*html*/`
        <section class="simpleText">
            <div class="content">
                <h1>${heading}</h1>
                <p>${text}</p>
                ${buttonHtml}
            </div>
        </section>
    `;
    }

}

customElements.define('simple-text-component', SimpleTextComponent);