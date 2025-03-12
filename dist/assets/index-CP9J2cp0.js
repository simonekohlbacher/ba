(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();class r extends HTMLElement{constructor(){super(),this._innerHTML="",this._mounted=!1,this._container=null,this._bindings=null}connectedCallback(){this.render()}onRender(){}onFirstRender(){}render(e){e&&(this._container=e,this._container.innerHTML="",this._container.appendChild(this)),this.innerHTML=this.template(this),this._mounted||(this.onFirstRender(),this._mounted=!0),this.onRender()}template(e){throw new Error("template: override me - return a string of HTML that describes how the component looks like")}registerRenderDependencies(e){e.forEach(n=>{n.subscribe(this.render.bind(this))})}}class h extends r{constructor(){super(),this.mainHeading="Klein & Fein",this.mainText="Unser Selbstversorger-Häuschen befindet sich im Winter direkt an der Ski-Piste Reiteralm. Im Sommer bietet das Haus den optimalen Ausgangspunkt für zahlreiche Erlebnisse."}template(){return`
        <section id="main_content">
           
            <hero-teaser-component
                heading="Ankommen & Abschalten.." 
                text= "im Ferienhaus Pürstl - direkt an der Piste der Reiteralm." 
                btn-text="" 
                link="#/" 
                background-image="/images/outdoor/skiing.jpg" 
                alt="Skifahren">
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
                    alt1="Aussenansicht Ferienhaus im Sommer"
                image2="/images/haus/aussen_winter_main.JPG"
                    alt2="Aussenansicht Ferienhaus im Winter"
                image3="/images/haus/Wohnküche.JPG"
                    alt3="Wohnküche mit Bett"
                image4="/images/haus/Küche.JPG"
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
        
        `}}customElements.define("home-component",h);class d extends r{constructor(){super(),this.text="Verlaufen? "}template(){return`
        <section id="main_content">
        <image src="/images/outdoor/schafe1.jpg" alt="Schafe am Berg" style="width: 100%; height: 70vh;"></image>
        <div class="specialSites">
            <h2>${this.text}</h2>
            <p>Hier gibt's nichts zu sehen. Außer Schafe vielleicht.</p>
        
            <button class="btn btn-primary" onclick="window.location.href='#/'">Zurück zur Startseite</button>
            
        </div>
        </section>
        
        `}}customElements.define("not-found-component",d);class c extends r{constructor(){super()}template(){return`
        <section id="main_content">
        
       <hero-teaser-component
                heading="Erholsame Auszeit" 
                text= ".. das ganze Jahr über" 
                btn-text="Jetzt anfragen" 
                link="mailto:info@reiteralm-ferienhaus.at" 
                background-image="/images/haus/aussen_sommer_main.JPG">
       </hero-teaser-component>
  
       <simple-text-component
            heading= "Ganz in Ruhe geniessen"
            text="Unser gemütliches Ferienhäuschen erstreckt sich über 2 Etagen 
                und bietet Platz für bis zu 5 Personen. Mit Blick und direktem 
                Zugang zur Skipiste der Reiteralm ist es der perfekte 
                Ausgangspunkt für zahlreiche Aktivitäten in der Region. 
                Das ganze Jahr über.">
       </simple-text-component>
        
  
           
       <div class="highlightContainer">
           <highlight-component
                title="60m²"
                text="2 Etagen bieten Platz für bis zu 5 Personen">
           </highlight-component>
           
           <highlight-component
                title="Ski In Ski Out"
                text="Direkt an der Piste gelegen">
           </highlight-component>
           
           <highlight-component
                title="Wohnküche"
                text="Voll ausgestattete Wohnküche">
           </highlight-component>
        </div>

        <img src="/images/outdoor/berge2.JPG" alt="Berglandschaft" class="standAloneImg"/>
        
        
        <text-color-component
            heading="Gemütliches Zuhause auf Zeit"
            text="Unsere Ferienwohnung bietet kostenfreies WLAN, ein Wohnzimmer mit Doppelcouch, ein Schlafzimmer mit Doppelbett und ein weiteres Schlafzimmer mit Einzelbett. Außerdem gibt es einen Balkon, ein Badezimmer mit WC und ein zusätzliches separates WC. Zur Ausstattung gehören zwei SAT-TV-Geräte und eine komplett ausgestattete Küche mit Essecke, Mikrowelle, Ceran Kochfeld, Backrohr, Kaffeemaschine und Kühlschrank mit Gefrierfach. Bettwäsche und Handtücher werden gestellt, und gegen Aufpreis bieten wir einen Brötchenservice an."
            btn-text="Check unser Instagram!" 
            link="https://www.instagram.com/ferienhaus_puerstl/">
        </text-color-component>
        
        
        <simple-text-component
            heading="Preise"
            text="Sommer: Auf Anfrage (inkl. Schladming-Dachstein Sommercard) </br>
                   Winter: 160,- € pro Ferienhaus/Nacht + Endreinigung € 50,- </br>
                   Preise in Euro und exkl. Ortstaxe (€ 2,50 pro Person/Nacht) </br>
                   Es gelten die allgemeinen Geschäftsbedingungen für die Hotellerie"
            link="https://www.wko.at/oe/tourismus-freizeitwirtschaft/
            hotellerie/allgemeine-geschaeftsbedingungen-hotellerie"
            btn-text="AGBH">
        </simple-text-component>


          <simple-text-component
               heading = "Klick dich durch..">
         </simple-text-component>
             
           <gallery-component
                image1="/images/haus/aussen_sommer.JPG"  
                    alt1="Aussenansicht Ferienhaus im Sommer"
                image2="/images/haus/Bett_oben_klein.JPG"
                    alt2="Schlafzimmer mit Bett"
                image3="/images/haus/Bad.JPG"
                    alt3="Badezimmer"
               
                image4="/images/haus/Küche.JPG"
                    alt4="Wohnküche"
                     image5="/images/haus/Bett_Wohnküche.JPG"
                    alt5="Wohnküche mit Bett"
                    
                image6="/images/haus/Schlafzimmer_oben_gross.JPG"
                    alt6="Schlafzimmer"    
             
               image7="/images/haus/Wohnküche_TV.JPG"
                    alt7="Wohnküche mit TV"
                image8="/images/haus/hausplan_1.jpg"
                    alt8="Hausplan"
                image9="/images/haus/hausplan_2.jpg"
                    alt9="Hausplan">
            </gallery-component>

        </section>
        `}}customElements.define("ferienhaus-component",c);class g extends r{constructor(){super()}template(){return`
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
        `}}customElements.define("about-component",g);class m extends r{constructor(){super()}template(){return`
        <section id="main_content">
        
        <img src="/images/outdoor/berge4.JPG" alt="Berglandschaft Bischofsmütze" class="standAloneImg"/>                   
        <div class="specialSites">
        
        <h1>Impressum</h1>
        </br>
        <h4>Allgemein</h4>
        <p>
          Alle Informationen und Erklärungen dieser Internetseiten sind unverbindlich. Der Medieninhaber sowie der Ersteller der Website übernehmen für die Richtigkeit, Aktualität und Vollständigkeit der Inhalte keine Gewähr. Es ergeben sich keine Rechtsansprüche aus den Inhalten der Internetseiten. Alle Angebote und Preise sind freibleibend und unverbindlich. Der Medieninhaber behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
        </p>
        
        <h4>Urheberrecht</h4>
        <p>
          Der Inhalt dieser Internetseiten ist urheberrechtlich geschützt. Grafiken, Texte, Logos, Fotos usw. dürfen nur nach schriftlicher Genehmigung des Medieninhabers für kommerzielle oder sonstige nicht persönliche Zwecke verwendet werden. Alle innerhalb dieser Internetseiten genannten und gegebenenfalls durch Dritte geschützten Marken-, Logos und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichnungsrechts und den Besitzrechten der eingetragenen Eigentümer. Allein wegen der Nennung kann nicht davon ausgegangen werden, dass Markenzeichen nicht durch Rechte Dritter geschützt sind.
        </p>
        
        <h4>Datenübermittlung</h4>
        <p>
          Es bestehen technische Möglichkeiten elektronisch gesendete Daten "abzuhören". Wir bitten Sie dies zur Kenntnis zu nehmen und daher garantieren wir nicht für die Abhörsicherheit der Datenübermittlung.
        </p>
        
        <h4>Haftung</h3>
        <p>
          Der Medieninhaber bzw. Ersteller der Website haftet nicht für Schäden, insbesondere nicht für unmittelbare oder mittelbare Folgeschäden, Datenverlust, entgangenen Gewinn, System- oder Produktionsausfällen, die durch die Nutzung dieser Internetseiten oder das Herunterladen von Daten entstehen. Dieser Haftungsausschluss gilt nicht bei Vorsatz oder grober Fahrlässigkeit. Die Rechtsbeziehung, welche durch die Nutzung der Internetseiten entstanden ist, unterliegt dem Recht der Bundesrepublik Österreich. Bei Rechtsstreitigkeiten, die sich aus der Nutzung dieser Website ergeben, ist der Gerichtsstand Schladming.
        </p>
        
        <h4>Verweise und Links</h4>
        <p>
          Bei Verweisen auf fremde Internetseiten ("Links"), die außerhalb unseres Verantwortungsbereiches liegen, würde eine Haftungsverpflichtungausschließlich in dem Fall in Kraft treten, in dem wir von den Inhalten wissen und es uns möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Hiermit erklären wir ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen Inhalte auf den verlinkten Seiten erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder die Urheberschaft der verlinkten Seiten haben wir keinerlei Einfluss. Sollten diese verlinkten Seiten Inhalte rechtswidriger Art enthalten oder auch moralisch bedenklich sein, so distanzieren wir uns hiermit von diesen Inhalten und bitten darum uns davon in Kenntnis zu setzen und diese Links werden sofort aus dem Internetangebot entfernt.
        </p>
        
        <h4>Datenschutz</h4>
        <p>
          Die Internetseiten dieser Website können Sie im Normalfall aufrufen, ohne Angaben über Ihre Person zu machen. Werden Ihr Name, Ihre Anschrift oder sonstige persönliche oder geschäftliche Daten von Ihnen eingegeben, so erfolgt die Bekanntgabe dieser Daten seitens des Nutzers auf ausdrücklich freiwilliger Basis. Wenn Sie sich entschließen, dem Medieninhaber persönliche Daten über das Internet zu überlassen, damit z. B. Korrespondenz abgewickelt oder eine Anmeldung ausgeführt werden kann, so unterliegen diese Daten den strengen Regelungen des Datenschutzgesetzes (DSG 2000) der Republik Österreich. Durch die Aufrufe der einzelnen Seite erhält der Medieninhaber Nutzungsdaten, die möglicherweise eine Identifizierung zulassen (zum Beispiel IP-Adresse, Datum, Uhrzeit und betrachtete Seiten). Diese Daten werden manchmal ausgewertet, um das Nutzerverhalten kennen zu lernen und Statistiken aufzustellen. Es findet keine personen-bezogene Verwertung statt. Die statistische Auswertung anonymisierter Datensätze bleibt vorbehalten.
        </p>
        
        <h4>Weitergabe personenbezogener Informationen an Dritte</h4>
        <p>
          Soweit der Medieninhaber gesetzlich oder per Gerichtsbeschluss dazu verpflichtet ist, wird er Ihre Daten im geforderten Umfang an auskunfts-berechtigte Stellen übermitteln. Für andere Zwecke gibt der Medieninhaber Ihre Daten nicht ohne Ihr ausdrückliches Einverständnis weiter.
        </p>
        
        <h4>Recht auf Widerruf</h2>
        <p>
          Um Ihre personenbezogenen Daten zu löschen, müssen Sie dies nur dem Medieninhaber mitteilen, und wir werden dies tun.
        </p>
        
        <h4>Zusätzliche Infos</h4>
        <p>
          Design: Ferienhaus Pürstl </br>
           Bildmaterial: Ferienhaus Pürstl, Reiteralm Bergbahnen, Schladming-Dachstein
        </p>
  
        <a href="/#" class="btn btn-primary">Zurück zur Startseite</a>
        </div>
           
        </section>
        `}}customElements.define("impressum-component",m);class b extends r{constructor(){super(),this.text="Coming soon"}template(){return`
        <section id="main_content">
       
           
        <img src="/images/outdoor/berge4.JPG" alt="Berglandschaft Bischofsmütze" class="standAloneImg"/>
        <div class="specialSites">
        
        
            <h1>Datenschutz</h1>
            </br>
            <h4>Grundlagen</h4>
            <p>
              Diese Datenschutzerklärung betrifft alle Personen, die die Dienstleistungen der Familie Pürstl-Kohlbacher (Ferienhaus Pürstl) nutzen. Wir informieren Sie damit über Art, Umfang und Zweck der Erhebung und Verwendung Ihrer personenbezogenen Daten durch unser Unternehmen. Wir achten Ihre Privatsphäre und sind bestrebt, die gesetzlichen Vorgaben für die Verarbeitung Ihrer personenbezogenen Daten (EU-Verordnung Nr. 679/2016 (DSGVO), DSG 2000, DSG 2018 und TKG 2003) genau einzuhalten. Alle Ihre personenbezogenen Daten werden auf dieser Grundlage verarbeitet. Verantwortlicher für die Datenverarbeitung ist Familie Pürstl-Kohlbacher, Ferienhaus Pürstl. Mit der Nutzung unserer Dienstleistungen und der Erteilung von Einwilligungen im Sinne dieser Erklärung bestätigen Sie, dass Sie das 14. Lebensjahr vollendet haben und in der Lage sind, eine zulässige Einwilligung zu erteilen, oder dass bereits eine wirksame Einwilligung Ihres Erziehungsberechtigten oder Ihres Sachwalters vorliegt.
            </p>
            
            <h4>Angaben gemäß Art 13 DSGVO</h4>
            <p>
              Ihre personenbezogenen Daten, das sind insbesondere Ihre Stammdaten (Name, Vorname, Adresse, Mail Adresse, Telefon- und Faxnummer, Geburtsdatum, Kundennummer) sowie Sprache und KFZ-Kennzeichen, die Daten in Reisedokumenten (Passnummer, Passdaten, Geburtsdatum, ausstellende Behörde, Laufzeit, Nationalität) und Ausweisen (Personalausweis, Führerschein etc. samt ausstellender Behörde und Laufzeit), die Daten zu Zahlungsart und im Zusammenhang mit Zahlungen, insbesondere mit EC-Karten, Kreditkarten und Bankkarten, die von Ihnen angefragte Aufenthaltsdauer sowie mit dem Aufenthalt zusammenhängende Destinationen, Hotels, Kontaktpersonen, Konditionen, Special Services, Gesundheitsdaten, Vielfliegernummer, persönliche Vorlieben, die Sie uns bekannt geben, und besondere Kategorien von Daten wie Gesundheitsdaten sowie Daten über besondere Bedürfnisse und zu Ehe/Partnerschaft,
              werden für unsere Dienstleistungen benötigt. Dazu gehören auch Buchungen von Reisen, Fremdenführern, Gastronomie, Mietfahrzeugen, Transfers, Registraturabwicklungen, Versicherungen, Events, Touren, Akkreditierungen, Gutscheinen einschließlich Kundenanlage, Verrechnung und deren Überprüfung (B2B, B2C, FIT), Ticketbuchungen und die Sommercard.
              Diese Daten werden deshalb zu diesen Zwecken von uns gespeichert, verarbeitet und, soweit erforderlich, an Dritte, mit denen wir zur Erbringung eines möglichst effektiven und bestmöglichen Service für unsere Kunden, zusammenarbeiten – dazu können auch Dienstleister in Drittstaaten als Auftragsverarbeiter, Software- und Agenturdienstleister gehören –, übermittelt.
              Profiling und automatisierte Entscheidungen setzen wir nicht ein.
              Die Rechtsgrundlagen für diese Datenverarbeitungsprozesse sind
              die Erfüllung unserer vorvertraglichen und vertraglichen Verpflichtungen Ihnen gegenüber, von Ihnen eingeholte Einwilligungen, gesetzliche, vertragliche oder sonstige rechtliche Verpflichtungen unsererseits (z.B. Dokumentationsrechte und -pflichten nach dem Rechnungswesen, Steuer- und Zollrecht, Vertragswesen, Meldewesen, Rechtsstreitigkeiten) sowie § 96 TKG und unsere berechtigten Interessen (z.B. die Verbesserung unseres Kundenservice, auch im Bereich der Direktwerbung oder die Wahrnehmung unserer eigenen rechtlichen Interessen).
              Die Dauer der Speicherung bemisst sich nach der Dauer unserer Geschäftsbeziehung, den von Ihnen erteilten Einwilligungen, darüber hinaus nach den für uns geltenden gesetzlichen Aufbewahrungspflichten und rechtlichen Verpflichtungen. Wir betonen, dass wir im Fall einer regelmäßigen Zusammenarbeit für unser bestmögliches Kundenservice bestrebt sind, Ihre bereits an uns übermittelten Kundenwünsche so gut zu kennen, dass wir Sie laufend und dauerhaft zufriedenstellen können.
            </p>
            
            <h4>Unsere Webauftritte</h4>
            <p>
              Durch den Aufruf unserer Website werden automatisch Ihre Zugriffsdaten erhoben und gespeichert. Diese Zugriffsdaten können insbesondere die aufgerufene Seite, die angesehenen Dateien, Datum und Uhrzeit des Aufrufs, IP-Adresse des Benutzers, Daten des aufrufenden Rechners, insbesondere des Browsers und des Betriebssystems, sowie die Datenmenge und die Meldung des erfolgreichen Aufrufs umfassen. Diese Zugriffsdaten werden von uns für interne statistische Zwecke verwendet, um die Sicherheit unseres Angebots zu gewährleisten und um das Angebot zu optimieren. Bei Verdacht einer rechtswidrigen Handlung werden die Zugriffsdaten zur Beweissicherung ausgewertet.
              Mit der Eingabe Ihrer personenbezogenen Daten in eines unserer Kontaktformulare stimmen Sie für die Dauer der Betreuung dieser konkreten Anfrage der Übermittlung an und Speicherung und Verarbeitung durch uns zu. Dies gilt insbesondere für Ihre Anfragen per Kontakt-Formular, Chat und E-Mails, die Sie uns senden. Wir benötigen diese Daten zur Bearbeitung Ihrer Anfrage und speichern in diesen Fällen auch Ihre IP-Adresse zu Zwecken der Beweissicherung. Die Speicherung erfolgt solange dies für die Betreuung allfälliger ergänzender oder nachträglicher gestellter Fragen durch Sie oder uns erforderlich ist.
              Die Daten Ihres Kontos werden nur über eine unverschlüsselte Internetverbindung übertragen (http). Für den Verlust von Daten oder den Zugriff Dritter auf Ihre Daten übernehmen wir keine Haftung.
              Die Rechtsgrundlagen für diese Datenverarbeitungen sind Ihre Einwilligung, unsere vorvertraglichen und vertraglichen Verpflichtungen Ihnen gegenüber, unsere berechtigten Interessen und rechtlichen Verpflichtungen aller Art und § 96 TKG.
              Der Inhalt unserer Website wurde sorgfältig erstellt und mehrfach kontrolliert, für die Aktualität, Richtigkeit und Vollständigkeit der bereitgestellten Informationen übernehmen wir jedoch keine Haftung. Ansprüche auf Schadenersatz wegen Nutzung oder Nichtnutzung der Informationen bzw. durch die Nutzung fehlerhafter oder unvollständiger Informationen,
              sind ausgeschlossen. Alle Angebote sind freibleibend und unverbindlich. Wir behalten uns das Recht vor, das Angebot oder Teile davon ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung der Website zeitweise oder endgültig einzustellen.
              Der Inhalt und die Programmierung unserer Website sind Urheber- und leistungsschutzrechtlich geschützt. Jede Vervielfältigung – auch auszugsweise – und öffentliche Wiedergabe, insbesondere das Kopieren von Texten, Grafiken und Fotos, ist ohne unsere vorhergehende schriftliche Zustimmung verboten.
            </p>

            <h4>Newsletter</h4>
            <p>Wir verschicken keine Newsletter.</p>
            
            <h4>Übermittlung an Dritte / Verpflichtungen von Auftragsverarbeitern</h4>
            <p>
              Ihre personenbezogenen Daten werden von uns unter Umständen innerhalb des Betriebes unter Berücksichtigung der zulässigen Verwendungszwecke, an Auftragsverarbeiter (z.B. für unsere elektronische Werbung in Form von Newslettern) sowie, an Dritte, die für die Erbringung der von Ihnen gewünschten Dienstleistungen beigezogen werden müssen, die sich alle uns gegenüber zur Einhaltung der geltenden Datenschutz-Standards verpflichtet haben,
              übermittelt. Sollte die Einhaltung europäischer Datenschutz-Standards nicht möglich sein – etwa weil im konkreten Fall Standardvertragsklauseln, Angemessenheitsbeschlüsse oder Zertifizierungen nicht gewährleistet sind – klären wir Sie rechtzeitig auf und holen auch die erforderlichen Einwilligungen von Ihnen ein. Für weitere Informationen kontaktieren Sie uns bitte unter <a href="mailto:info@reiteralm-ferienhaus.at">info@reiteralm-ferienhaus.at</a>.
            </p>
            
            <h4>Cookies und Tracking Dienste</h4>
            <p>
              Wir verwenden keine Cookies. Wir verwenden auf unserer Website auch Inhalte Dritter, um unseren Internet-Auftritt möglichst informativ und komfortabel für Sie zu gestalten. Dazu gehören zB Google-Maps, RSS-Feeds oder Youtube. Diese Dritt-Anbieter erhalten aus technischen Gründen Ihre IP-Adresse. Auf die Verwendung dieser Daten durch den Dritt-Anbieter haben wir keinen Einfluss. Wir verweisen diesbezüglich auf die Datenschutzerklärungen der jeweiligen Anbieter.
            </p>
            
            <h4>Kontakt</h4>
            <p>
              Sie können jederzeit unentgeltlich Auskunft über Ihre personenbezogenen Daten, die von uns gespeichert werden, verlangen. Sie haben als Betroffener auch das Recht auf Widerruf, Auskunft, Löschung, Richtigstellung, Einschränkung und Übertragung Ihrer personenbezogenen Daten, soweit dem keine gesetzliche Aufbewahrungspflicht unsererseits gegenübersteht. Für nähere Informationen zu Ihren Rechten als Betroffener kontaktieren Sie uns bitte unter <a href="mailto:info@reiteralm-ferienhaus.at">info@reiteralm-ferienhaus.at</a> oder unter +43 664 4636602. Wir helfen Ihnen gerne weiter. Für Beschwerden ist als Aufsichtsbehörde die Österreichische Datenschutzbehörde (DSB), Wickenburggasse 8-10, 1080 Wien, zuständig.
            </p>
            
            <h4>Sonstiges</h4>
            <p>
              Wir haben organisatorische und technische Schutzmaßnahmen, die wir laufend evaluieren und bei Bedarf anpassen, implementiert, um Ihre von uns gespeicherten und verarbeiteten personenbezogenen Daten zu schützen. Wir behalten uns vor, diese Datenschutzerklärung jederzeit zu ändern und an neue Entwicklungen anzupassen. Die neue Fassung gilt ab Bereitstellung auf unserer Website. Die aktuelle Fassung der Datenschutzerklärung und unser Impressum ist jederzeit auf der Website unter <a href="http://www.reiteralm-ferienhaus.at">www.reiteralm-ferienhaus.at</a> abrufbar.
            </p>
        <a href="/#" class="btn btn-primary">Zurück zur Startseite</a>

        </div>  
          
       
        </section>
        `}}customElements.define("datenschutz-component",b);class p extends r{constructor(){super()}template(){return`
        <section id="main_content">
 
           <img src="/images/outdoor/berge71.JPG" alt="Berglandschaft Herbst" class="standAloneImg"/>

           
           <simple-text-component 
                heading="Lass uns in Kontakt bleiben.." 
                text="So erreichst du uns">
           </simple-text-component>
           
           
           <image-text-color-component
             heading="Ferienhaus Pürstl"
                text="Familie Kohlbacher-Pürstl </br>
                Gleiming 19</br>
                8973 Pichl/Schladming </br>
                +43 664 46 36 602 </br>
                info@ferienhaus-reiteralm.at"
                btn-text="Schreib uns!" 
                link="mailto:info@reiteralm-ferienhaus.at"
                image="/images/outdoor/schafe3.JPG"
                alt="Schafe am Berg">
            </image-text-color-component>
           
           <simple-text-component 
                heading="Finde uns auf">
           </simple-text-component>
           
          
           <div class="contactLink" role="group">
                 <button onclick="window.open('https://www.instagram.com/ferienhaus_puerstl/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA%3D%3D', '_blank')" class="btn btn-primary">Instagram</button>
                 <button onclick="window.open('https://www.facebook.com/profile.php?id=100075966014770', '_blank')" class="btn btn-primary">Facebook</button>
                 <button onclick="window.open('https://www.google.at/maps/place/Ferienhaus+P%C3%BCrstl/@47.388498,13.5924077,18z/data=!4m6!3m5!1s0x47712ef87d250785:0xd079c4d86d0d0b4!8m2!3d47.3884345!4d13.5936093!16s%2Fg%2F11hzv5x18g?entry=tts', '_blank')" class="btn btn-primary">Maps</button>
           </div>
           
       
          
          <gallery3-component
          image1="/images/haus/Johnny.JPG"  
               alt1="Blick auf die Piste"
          image2="/images/outdoor/spiegelsee.JPG"
               alt2="Außenansicht Ferienhaus im Winter"
          image3="/images/outdoor/gastgeber.JPG"
               alt3="Skifahren">
        </gallery3-component>
           
                   
       
           
        </section>
        `}}customElements.define("kontakt-component",p);class f extends r{constructor(){super(),this.getAttribute("btn-text")}template(){const e=this.getAttribute("link")??"#/",n=this.getAttribute("btn-text")??"";let a="";return n&&e&&(a=`<button class="btn btn-secondary" onclick="window.location.href='${e}'">${n}</button>`),`
            <section class="hero-teaser">
                <div class="content">
                    <img src="${this.getAttribute("background-image")}" alt="${this.getAttribute("alt")}"/>
                    <div class="text">
                        <h1>${this.getAttribute("heading")??""}</h1>
                        <p>${this.getAttribute("text")??""}</p>
                        ${a}                    
                    </div>
                </div>
            </section>
        `}}customElements.define("hero-teaser-component",f);class k extends r{constructor(){super(),this.pictures=null,this.overlay=null,this.closeButton=null,this.nextButton=null,this.prevButton=null,this.currentIndex=0}connectedCallback(){super.connectedCallback(),this.initGallery()}async initGallery(){await new Promise(e=>{document.readyState==="complete"?e():window.addEventListener("load",e)}),this.pictures=document.querySelectorAll(".img-gallery"),this.overlay=document.getElementById("overlay"),this.closeButton=document.getElementById("closeButton"),this.nextButton=document.getElementById("nextButton"),this.prevButton=document.getElementById("prevButton"),this.pictures.forEach((e,n)=>{e.addEventListener("click",()=>this.openImage(n))}),this.closeButton.addEventListener("click",()=>this.closeImage()),this.nextButton.addEventListener("click",()=>this.nextImage()),this.prevButton.addEventListener("click",()=>this.prevImage())}openImage(e){this.pictures[e].classList.add("enlarge"),this.overlay.style.display="block",this.closeButton.style.display="block",this.currentIndex=e}closeImage(){const e=document.querySelector(".pictures .img-gallery.enlarge");e&&(e.classList.remove("enlarge"),this.overlay.style.display="none",this.closeButton.style.display="none")}nextImage(){const e=(this.currentIndex+1)%this.pictures.length;this.closeImage(),this.openImage(e)}prevImage(){const e=(this.currentIndex-1+this.pictures.length)%this.pictures.length;this.closeImage(),this.openImage(e)}template(){return`
            <section class="gallery">
               <div class="pictures">
                <img src="${this.getAttribute("image1")}" class="img-gallery" alt="${this.getAttribute("alt1")}">
                <img src="${this.getAttribute("image2")}" class="img-gallery"" alt="${this.getAttribute("alt2")}">                
                <img src="${this.getAttribute("image3")}" class="img-gallery"" alt="${this.getAttribute("alt3")}">                
                <img src="${this.getAttribute("image4")}" class="img-gallery"" alt="${this.getAttribute("alt4")}">                
                <img src="${this.getAttribute("image5")}" class="img-gallery"" alt="${this.getAttribute("alt5")}">                
                <img src="${this.getAttribute("image6")}" class="img-gallery"" alt="${this.getAttribute("alt6")}">                
                <img src="${this.getAttribute("image7")}" class="img-gallery"" alt="${this.getAttribute("alt7")}">                
                <img src="${this.getAttribute("image8")}" class="img-gallery"" alt="${this.getAttribute("alt8")}">                
                <img src="${this.getAttribute("image9")}" class="img-gallery"" alt="${this.getAttribute("alt9")}">                
            </div> 
            
            <div id="overlay">
                <button id="closeButton">X</button>
                <div id="btnContainer">
                    <button id="prevButton" class="galleryBtn"><</button>
                    <button id="nextButton" class="galleryBtn">></button>
                </div>
            </div>
            
            </section>
        `}}customElements.define("gallery-component",k);class w extends r{constructor(){super()}template(){return`
            <section class="image-and-text">
                <div class="content">
                    <div class="text">
                        <h2>${this.getAttribute("heading")??""}</h2>
                        </br>
                        <p>${this.getAttribute("text")??""}</p>
                        <p><a class="btn btn-secondary" target="_blank" href="${this.getAttribute("link")??"#/"}">${this.getAttribute("btn-text")??""}</a></p>
                    </div>
                    <img src="${this.getAttribute("image")}" alt="${this.getAttribute("alt")}" />
                </div>
            </section>
        `}}customElements.define("image-text-color-component",w);class z extends r{constructor(){super()}template(){return`
            <section class="card">
               <div class="card">
                  <img src="${this.getAttribute("image")}" class="card-img-top" alt="${this.getAttribute("alt")}">
                <div class="card-body">
                    <h4 class="card-title">${this.getAttribute("title")??""}</h4>
                    <p class="card-text">${this.getAttribute("text")??""}</p>
                    <a class="btn btn-primary" href="${this.getAttribute("link")??""}">${this.getAttribute("btn-text")??""}</a>
                 </div>
               </div>
            </section>
        `}}customElements.define("card-component",z);class v extends r{constructor(){super(),this.getAttribute("btn-text")}template(){const e=this.getAttribute("heading")??"",n=this.getAttribute("text")??"",a=this.getAttribute("link")??"#/",t=this.getAttribute("btn-text")??"";let s="";return t&&a&&(s=`<a class="btn btn-primary" href="${a}">${t}</a>`),`
        <section class="simpleText">
            <div class="content">
                <h1>${e}</h1>
                <p>${n}</p>
                ${s}
            </div>
        </section>
    `}}customElements.define("simple-text-component",v);class A extends r{constructor(){super()}template(){return`
           <section class="highlights">
                    <div class="card highlight">
                        <div class="card-body highlight">
                            <div class="card-front">
                                <h5 class="card-title">${this.getAttribute("title")??""}</h5>
                            </div>
                            <div class="card-back">
                                <p class="card-text">${this.getAttribute("text")??""}</p>
                            </div>
                        </div>
                    </div>
             
            </section>
        `}}customElements.define("highlight-component",A);class I extends r{constructor(){super()}template(){return`
            <section class="text-color">
                <div class="content">
                    <div class="text">
                        <h2>${this.getAttribute("heading")??""}</h2>
                        </br>
                        <p>${this.getAttribute("text")??""}</p>
                        <p><a class="btn btn-secondary" target="_blank" href="${this.getAttribute("link")??"#/"}">${this.getAttribute("btn-text")??""}</a></p>
                    </div>

                </div>
            </section>
        `}}customElements.define("text-color-component",I);class S extends r{constructor(){super(),this.pictures=null,this.overlay=null,this.closeButton=null,this.nextButton=null,this.prevButton=null,this.currentIndex=0}connectedCallback(){super.connectedCallback(),this.initGallery()}async initGallery(){await new Promise(e=>{document.readyState==="complete"?e():window.addEventListener("load",e)}),this.pictures=document.querySelectorAll(".img-gallery"),this.overlay=document.getElementById("overlay"),this.closeButton=document.getElementById("closeButton"),this.nextButton=document.getElementById("nextButton"),this.prevButton=document.getElementById("prevButton"),this.pictures.forEach((e,n)=>{e.addEventListener("click",()=>this.openImage(n))}),this.closeButton.addEventListener("click",()=>this.closeImage()),this.nextButton.addEventListener("click",()=>this.nextImage()),this.prevButton.addEventListener("click",()=>this.prevImage())}openImage(e){this.pictures[e].classList.add("enlarge"),this.overlay.style.display="block",this.closeButton.style.display="block",this.currentIndex=e}closeImage(){const e=document.querySelector(".pictures .img-gallery.enlarge");e&&(e.classList.remove("enlarge"),this.overlay.style.display="none",this.closeButton.style.display="none")}nextImage(){const e=(this.currentIndex+1)%this.pictures.length;this.closeImage(),this.openImage(e)}prevImage(){const e=(this.currentIndex-1+this.pictures.length)%this.pictures.length;this.closeImage(),this.openImage(e)}template(){return`
            <section class="gallery">
               <div class="pictures">
                <img src="${this.getAttribute("image1")}" class="img-gallery" alt="${this.getAttribute("alt1")}">
                <img src="${this.getAttribute("image2")}" class="img-gallery"" alt="${this.getAttribute("alt2")}">                
                <img src="${this.getAttribute("image3")}" class="img-gallery"" alt="${this.getAttribute("alt3")}">                
            </div> 
            
            <div id="overlay">
                <button id="closeButton">X</button>
                <div id="btnContainer">
                    <button id="prevButton" class="galleryBtn"><</button>
                    <button id="nextButton" class="galleryBtn">></button>
                </div>
            </div>
            
            </section>
        `}}customElements.define("gallery3-component",S);class l{constructor({slug:e,name:n,component:a,canRender:t}){this.slug=e,this.component=a,this.name=n,this.canRender=t}displayRoute(e){this.canRender&&!this.canRender()||this.component.render(e)}static getSlugFromHash(){return window.location.hash.slice(1).split("?")[0]}isCurrent(){return l.getSlugFromHash()===this.slug}}class u{constructor({container:e,routes:n,slugHome:a,slugNotFound:t}){this.routes=n,this.slugHome=a??"/",this.slugNotFound=t??"/404",this.container=e,this.activeRoute=null}init(){window.addEventListener("hashchange",this.changeView.bind(this)),this.changeView()}static redirect(e=""){location.hash=e}changeView(){if(/^$|^#$/.test(location.hash)){u.redirect(this.slugHome);return}this.activeRoute=this.routes.find(e=>e.isCurrent()),this.activeRoute?this.activeRoute.displayRoute(this.container):(console.error(`Page '${location.hash}' could not be found`),u.redirect(this.slugNotFound))}static getGetUrlSearchParams(){return new URLSearchParams(window.location.href.split("?")[1]??"")}}const x=new u({container:document.getElementById("kwmJS"),routes:[new l({slug:"/",name:"Home",component:new h}),new l({slug:"/ferienhaus",name:"Ferienhaus",component:new c}),new l({slug:"/erleben",name:"Erleben",component:new g}),new l({slug:"/404",name:"Not Found",component:new d}),new l({slug:"/kontakt",name:"Kontakt",component:new p}),new l({slug:"/impressum",name:"Impressum",component:new m}),new l({slug:"/datenschutz",name:"Datenschutz",component:new b})],slugHome:"/",slugNotFound:"/404"});x.init();$(document).ready(function(){sessionStorage.getItem("cookieAccepted")||$("#cookieModal").modal("show"),$("#acceptButton").click(function(){$("#cookieModal").modal("hide"),sessionStorage.setItem("cookieAccepted","true")})});
