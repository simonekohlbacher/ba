'use strict';
import KWM_Component from '../../core/kwm-component.js';

export default class CardComponent extends KWM_Component {
    constructor() {
        super();
    }

    template() {
        return /*html*/`
            <section class="card">
               <div class="card">
                  <img src="${this.getAttribute('image')}" class="card-img-top" alt="${this.getAttribute('alt')}">
                <div class="card-body">
                    <h4 class="card-title">${this.getAttribute('title') ?? ''}</h4>
                    <p class="card-text">${this.getAttribute('text') ?? ''}</p>
                    <a class="btn btn-primary" href="${this.getAttribute('link') ?? ''}">${this.getAttribute('btn-text') ?? ''}</a>
                 </div>
               </div>
            </section>
        `;
    }
}

customElements.define('card-component', CardComponent);