'use strict';

import KWM_Component from '../core/kwm-component.js';

export default class NotFoundComponent extends KWM_Component {
    constructor() {
        super();

        // Any component data goes here in the constructor
        this.text = "Verlaufen? ";
    }

    // Template function = shape of the component
    template() {
        return /*html*/`
        <section id="main_content">
        <image src="/images/outdoor/schafe1.jpg" alt="Schafe am Berg" style="width: 100%; height: 70vh;"></image>
        <div class="specialSites">
            <h2>${this.text}</h2>
            <p>Hier gibt's nichts zu sehen. Außer Schafe vielleicht.</p>
        
            <button class="btn btn-primary" onclick="window.location.href='#/'">Zurück zur Startseite</button>
            
        </div>
        </section>
        
        `;
    }
}

customElements.define('not-found-component', NotFoundComponent);