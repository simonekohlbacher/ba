'use strict';

import KWM_Component from '../core/kwm-component.js';

/**
 * This is the page home component and will be rendered when the user navigates to the '/' home route.
 *
 * You need to create the base class 'KWM_Component' first before using me!
 **/
export default class HomeComponent extends KWM_Component {
    constructor() {
        super();
        // Any component data goes here in the constructor
        this.mainHeading = 'Klein & Fein';
        this.mainText = 'Unser Selbstversorger-Häuschen befindet sich im Winter direkt an der Ski-Piste Reiteralm. Im Sommer bietet das Haus den optimalen Ausgangspunkt für zahlreiche Erlebnisse.';

    }

    // Template function = shape of the component
    template() {
        return /*html*/`
        <section id="main_content">
            <hero-teaser-component
                heading="Ankommen & Abschalten.." 
                text= "im Ferienhaus Pürstl - direkt an der Reiteralm." 
                btn-text="" 
                link="#/" 
                background-image="/images/outdoor/berge10.JPG" 
                alt="Berglandschaft">
            </hero-teaser-component>
            
              
            <simple-text-component
                heading= "${this.mainHeading}"
                text= "${this.mainText}">
            </simple-text-component>
               
            <div class="cardsContainer">
                <card-component 
                    image="/images/haus/sommer_test.JPG"
                    alt="Ferienhaus Sommer"
                    title= "Das Häuschen"
                    text="Abseits vom Trubel & direkt neben der Piste"
                    btn-text="Mehr"
                    link="#/ferienhaus"
                    >
                </card-component>
                
                <card-component
                    title= "Die Region"
                    text="Sommer wie Winter - immer ein Erlebnis"
                    btn-text="Mehr"
                    link="#/erleben"
                    image="/images/outdoor/gipfelkreuz.JPG"
                    alt="Berge mit Gipfelkreuz">
                </card-component>

                <card-component 
                title= "Hier findest du uns"
                    text="Schreib uns oder ruf uns an - wir helfen dir gerne weiter"
                    btn-text="Mehr"
                    link="#/kontakt"
                    image="/images/outdoor/gastgeber.JPG"
                    alt="Skifahrer auf der Piste">
                </card-component>
            </div>
            
            
             <image-text-color-component
                    heading= "Vielseitige Erlebnisse" 
                    text= "Unser Ferienhaus liegt zentral, eingebettet zwischen den imposanten Schladminger Tauern im Osten und dem angrenzenden Salzburger Land im Westen. Dank der guten Verkehrsanbindung, genau zwischen Radstadt und Schladming gelegen, können Sie die gesamte Region bequem erkunden. Das ganze Jahr über erwarten dich zahlreiche Events und Attraktionen in der Umgebung."
                    btn-text="Aktuelle Events" 
                    link="https://www.schladming-dachstein.at/de/Alle-Veranstaltungen"
                    image="/images/outdoor/berge.JPG"
                    alt="Berglandschaft">
             </image-text-color-component>
              
              
             <simple-text-component
                heading = "Bilder sagen mehr als Worte..">
             </simple-text-component>
                        
             <gallery-component
                image1="/images/haus/aussen_sommer_main.JPG"  
                    alt1="Außenansicht Ferienhaus im Sommer"
                image2="/images/haus/aussen_winter_main.JPG"
                    alt2="Außenansicht Ferienhaus im Winter"
                image3="/images/haus/Wohnkueche.JPG"
                    alt3="Wohnkueche mit Bett"
                image4="/images/haus/Kueche.JPG"
                    alt4="Wohnküche"
                image5="/images/haus/Schlafzimmer_oben_gross.JPG"
                    alt5="Schlafzimmer"    
               image6="/images/haus/Bad.JPG"
                    alt6="Badezimmer"
               image7="/images/outdoor/berge4.JPG"
                    alt7="Berglandschaft Bischofsmütze"
                image8="/images/outdoor/berge6.JPG"
                    alt8="Berglandschaft"
                image9="/images/haus/Ausblick_Schlafzimmer.JPG"
                    alt9="Ausblick Schlafzimmer">
            </gallery-component>
            
        </section>
        
        `;


    }







}

// usage in HTML like: <home-component></home-component>
// usage in JS like: const homeComponent = new HomeComponent();
customElements.define('home-component', HomeComponent);