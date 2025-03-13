'use strict';
import KWM_Component from '../../core/kwm-component.js';

export default class TextInColorComponent extends KWM_Component {
    constructor() {
        super();
    }

    template() {
        return /*html*/`
            <section class="text-color">
                <div class="content">
                    <div class="text">
                        <h2>${this.getAttribute('heading') ?? ''}</h2>
                        </br>
                        <p>${this.getAttribute('text') ?? ''}</p>
                        <p><a class="btn btn-secondary" target="_blank" href="${this.getAttribute('link') ?? '#/'}">${this.getAttribute('btn-text') ?? ''}</a></p>
                    </div>

                </div>
            </section>
        `;
    }
}

customElements.define('text-color-component', TextInColorComponent);