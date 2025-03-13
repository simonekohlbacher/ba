'use strict';
import KWM_Component from '../../core/kwm-component.js';

export default class Gallery3Component extends KWM_Component {
    constructor() {
        super();
        this.pictures = null;
        this.overlay = null;
        this.closeButton = null;
        this.nextButton = null;
        this.prevButton = null;
        this.currentIndex = 0;
    }

    connectedCallback() {
        super.connectedCallback();
        this.initGallery();
    }

    async initGallery() {
        await new Promise(resolve => {
            if (document.readyState === 'complete') {
                resolve();
            } else {
                window.addEventListener('load', resolve);
            }
        });

        this.pictures = document.querySelectorAll('.img-gallery');
        this.overlay = document.getElementById('overlay');
        this.closeButton = document.getElementById('closeButton');
        this.nextButton = document.getElementById('nextButton');
        this.prevButton = document.getElementById('prevButton');

        // Klick-Eventlistener für jedes Bild
        this.pictures.forEach((img, index) => {
            img.addEventListener('click', () => this.openImage(index));
        });

        // Klick-Eventlistener für den Schließen-Button
        this.closeButton.addEventListener('click', () => this.closeImage());

        // Klick-Eventlistener für die nächste Schaltfläche
        this.nextButton.addEventListener('click', () => this.nextImage());

        // Klick-Eventlistener für die vorherige Schaltfläche
        this.prevButton.addEventListener('click', () => this.prevImage());
    }

    openImage(index) {
        const img = this.pictures[index];
        img.classList.add('enlarge');
        this.overlay.style.display = 'block'; // Zeige das Overlay an
        this.closeButton.style.display = 'block'; // Zeige den Schließen-Button an
        this.currentIndex = index;

    }

    closeImage() {
        const enlargedImg = document.querySelector('.pictures .img-gallery.enlarge');
        if (enlargedImg) {
            enlargedImg.classList.remove('enlarge');
            this.overlay.style.display = 'none'; // Verstecke das Overlay
            this.closeButton.style.display = 'none'; // Verstecke den Schließen-Button
        }
    }

    nextImage() {
        const nextIndex = (this.currentIndex + 1) % this.pictures.length;
        this.closeImage(); // Schließe das aktuelle Bild
        this.openImage(nextIndex); // Öffne das nächste Bild
    }

    prevImage() {
        const prevIndex = (this.currentIndex - 1 + this.pictures.length) % this.pictures.length;
        this.closeImage(); // Schließe das aktuelle Bild
        this.openImage(prevIndex); // Öffne das vorherige Bild
    }

    template() {
        return /*html*/`
            <section class="gallery">
               <div class="pictures">
                <img src="${this.getAttribute('image1')}" class="img-gallery" alt="${this.getAttribute('alt1')}">
                <img src="${this.getAttribute('image2')}" class="img-gallery"" alt="${this.getAttribute('alt2')}">                
                <img src="${this.getAttribute('image3')}" class="img-gallery"" alt="${this.getAttribute('alt3')}">                
            </div> 
            
            <div id="overlay">
                <button id="closeButton">X</button>
                <div id="btnContainer">
                    <button id="prevButton" class="galleryBtn"><</button>
                    <button id="nextButton" class="galleryBtn">></button>
                </div>
            </div>
            
            </section>
        `;
    }
}

customElements.define('gallery3-component', Gallery3Component);
