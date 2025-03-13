'use strict';

import KWM_Component from '../core/kwm-component.js';

export default class ImpressumComponent extends KWM_Component {
    constructor() {
        super()
    }

    template() {
        return /*html*/`
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
  
        <a href="/ba/public#" class="btn btn-primary">Zurück zur Startseite</a>
        </div>
           
        </section>
        `;
    }
}

customElements.define('impressum-component', ImpressumComponent);