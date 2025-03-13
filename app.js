
import HomeComponent from "./public/components/HomeComponent.js";
import NotFoundComponent from "./public/components/NotFoundComponent.js";
import FerienhausComponent from "./public/components/FerienhausComponent.js";
import ErlebenComponent from "./public/components/ErlebenComponent.js";
import ImpressumComponent from "./public/components/ImpressumComponent.js";
import DatenschutzComponent from "./public/components/DatenschutzComponent.js";
import KontaktComponent from "./public/components/KontaktComponent.js";

import HeroTeaserComponent from "./public/components/elements/HeroTeaserComponent.js";
import GalleryComponent from "./public/components/elements/GalleryComponent.js";
import ImageTextInColorComponent from "./public/components/elements/ImageTextInColorComponent.js";
import CardComponent from "./public/components/elements/CardComponent.js";
import SimpleTextComponent from "./public/components/elements/SimpleTextComponent.js";
import HighlightComponent from "./public/components/elements/HighlightComponent";
import TextInColorComponent from "./public/components/elements/TextInColorComponent";
import Gallery3Component from "./public/components/elements/Gallery3Component";

import KWM_Route from './public/core/kwm-route.js';
import KWM_Router from './public/core/kwm-router.js';

const myRouter = new KWM_Router({
    container: document.getElementById("kwmJS"),
    routes: [
        new KWM_Route({
            slug: "/",
            name: "Home",
            component: new HomeComponent()
        }),
        new KWM_Route({
            slug: "/ferienhaus",
            name: "Ferienhaus",
            component: new FerienhausComponent(),
        }),
        new KWM_Route({
            slug: "/erleben",
            name: "Erleben",
            component: new ErlebenComponent()
        }),
        new KWM_Route({
            slug: "/404",
            name: "Not Found",
            component: new NotFoundComponent()
        }),
        new KWM_Route({
            slug: "/kontakt",
            name: "Kontakt",
            component: new KontaktComponent()
        }),
        new KWM_Route({
            slug: "/impressum",
            name: "Impressum",
            component: new ImpressumComponent()
        }),
        new KWM_Route({
            slug: "/datenschutz",
            name: "Datenschutz",
            component: new DatenschutzComponent()
        }),
    ],
    slugHome: "/",
    slugNotFound: "/404"
});

myRouter.init();

// Navigating to the home page should display the Hero-Teaser similar like in the example picture
$(document).ready(function(){
    if (!sessionStorage.getItem('cookieAccepted')) {
        $('#cookieModal').modal('show');
    }

    $('#acceptButton').click(function() {
        $('#cookieModal').modal('hide');
        sessionStorage.setItem('cookieAccepted', 'true');
    });
});


