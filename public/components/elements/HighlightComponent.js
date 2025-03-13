'use strict';
import KWM_Component from '../../core/kwm-component.js';

export default class HighlightComponent extends KWM_Component {
    constructor() {
        super();
    }

    template() {
        return /*html*/`
           <section class="highlights">
                    <div class="card highlight">
                        <div class="card-body highlight">
                            <div class="card-front">
                                <h5 class="card-title">${this.getAttribute('title') ?? ''}</h5>
                            </div>
                            <div class="card-back">
                                <p class="card-text">${this.getAttribute('text') ?? ''}</p>
                            </div>
                        </div>
                    </div>
             
            </section>
        `;
    }
}

customElements.define('highlight-component', HighlightComponent);