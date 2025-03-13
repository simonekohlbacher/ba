'use strict';

import KWM_Component from '../core/kwm-component.js';

export default class ErlebenComponent extends KWM_Component {
    constructor() {
        super()
    }

    template() {
        return /*html*/`
        <section id="main_content">
        
            <hero-teaser-component
                heading="In Ruhe erleben" 
                text= "Raus aus dem Alltag und rein ins Vergnügen! "
                background-image="/images/outdoor/sonnengang4.JPG" 
                alt="Sonnenaufgang in den Bergen">
            </hero-teaser-component>
            
            <text-color-component
                heading= "Winterglück pur" 
                text= "Erlebe grenzenlosen Wintergenuss in der Region Schladming-Dachstein oder Richtung Salzburger Land: Genieße die Ski- und Snowboard-Action auf den Pisten der 4-Berge-Skischaukel “Hauser Kaibling, Planai, Hochwurzen, Reiteralm”.  Gönne auch deinem Auto eine kleine Auszeit und schwing dich direkt vom Häuschen auf die Piste! Die Winter-Talstation der Reiteralm ist nur 300 Meter entfernt und die Skipiste erreichst du in wenigen Schritten. </br>
                Gemütlich Wedeln oder in actiongeladene Abenteuer stürzen? HIer ist für jede*n etwas dabei! Doch auch abseits der Piste gibt es einiges zu entdecken: Bestaune die Winterwelt bei einer romantischen Winter-Wanderung, genieße die frische Winterluft bei einer Schneeschuhtour oder lade die Energiereserven bei einer Langlauftour auf."
                btn-text="Mehr Winter Highlights" 
                link="https://www.schladming-dachstein.at/de/Winter">
           </text-color-component>
           
           <gallery3-component
             image1="/images/haus/winter_haus1.JPG"  
               alt1="Außenansicht Ferienhaus im Sommer"
             
             image2="/images/haus/Prospekte.JPG"
               alt2="Schladming Dachstein Sommercard"

               image3="/images/haus/winter_haus2.JPG"
               alt3="Außenansicht Ferienhaus im Winter" >
            </gallery3-component>
            
              <image-text-color-component
                    heading= "Der Bergsommer wartet auf dich!" 
                    text="Genieße im Bergsommer die frische Luft und atemberaubende Ausblicke auf die umliegende Bergwelt. Erlebe Abwechslung beim Mountainbiken Wandern, Mountain GoKart und vielem mehr. Im Bergherbst bieten dir die Schladminger und Radstädter Tauern wahre Bilderbuch-Momente. </br>
                    Bei uns hast du den perfekten Ausgangspunkt für unzählige Wander- und Biketouren und einzigartigen Sommer Abenteuern. Im Sommer genießt du außerdem die Vorteile der Schladming-Dachstein Sommer-Card. "
                    btn-text="Mehr Sommer Highlights" 
                    link="https://www.schladming-dachstein.at/de/Sommer"
                    image="/images/outdoor/sonnengang.JPG"
                    alt="Sonnenuntergang in den Bergen">
             </image-text-color-component>
        
       
       
       
        </section>
        `;
    }
}

customElements.define('about-component', ErlebenComponent);