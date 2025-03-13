
import HomeComponent from "./components/HomeComponent.js";
import NotFoundComponent from "./components/NotFoundComponent.js";
import FerienhausComponent from "./components/FerienhausComponent.js";
import ErlebenComponent from "./components/ErlebenComponent.js";
import ImpressumComponent from "./components/ImpressumComponent.js";
import DatenschutzComponent from "./components/DatenschutzComponent.js";
import KontaktComponent from "./components/KontaktComponent.js";

import HeroTeaserComponent from "./components/elements/HeroTeaserComponent.js";
import GalleryComponent from "./components/elements/GalleryComponent.js";
import ImageTextInColorComponent from "./components/elements/ImageTextInColorComponent.js";
import CardComponent from "./components/elements/CardComponent.js";
import SimpleTextComponent from "./components/elements/SimpleTextComponent.js";
import HighlightComponent from "./components/elements/HighlightComponent.js";;

import KWM_Route from './core/kwm-route.js';
import KWM_Router from './core/kwm-router.js';

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
