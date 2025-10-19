import React from "react";

export default function DatenschutzComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Datenschutzerklärung</h1>

        <section className="mb-6">
          <p>
            Wir freuen uns über Ihren Besuch auf der Website „QuasselBot“ und
            Ihr Interesse an unserem Angebot. Der Schutz Ihrer personenbezogenen
            Daten ist uns wichtig. Nachfolgend informieren wir Sie gemäß Art. 12
            ff. DSGVO in klarer und verständlicher Form über Art, Umfang und Zweck
            der Erhebung, Verarbeitung und Nutzung personenbezogener Daten.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">Verantwortlicher</h2>
          <p className="whitespace-pre-line">
            Susanne Renken
            {'\n'}Birkenhain 2d
            {'\n'}29640 Schneverdingen
          </p>
          <p className="mt-2">Telefon: 0173 3963 852</p>
          <p>E-Mail: renken.susanne@gmail.com</p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">Arten der verarbeiteten Daten</h2>
          <ul className="list-disc ml-6">
            <li>Bestandsdaten (z. B. Namen, Adressen)</li>
            <li>Kontaktdaten (z. B. E-Mail, Telefonnummer)</li>
            <li>Nutzungsdaten (z. B. besuchte Seiten, Zugriffszeiten)</li>
            <li>Metadaten (z. B. geräte- oder browserbezogene Informationen)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">Zwecke und Rechtsgrundlagen der Verarbeitung</h2>
          <p>
            Wir verarbeiten personenbezogene Daten zur Bereitstellung und zum Betrieb
            der Website, zur Kommunikation mit Nutzern sowie zur Erfüllung vertraglicher
            Pflichten. Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. b) DSGVO
            (Vertragsdurchführung), lit. f) DSGVO (berechtigtes Interesse) sowie lit. a)
            DSGVO (Einwilligung), sofern diese eingeholt wurde.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">Bereitstellung der Website & Server-Logfiles</h2>
          <p>
            Bei jedem Aufruf unserer Website werden automatisch Informationen in
            Server-Logfiles gespeichert (z. B. IP-Adresse, Zeitpunkt des Zugriffs,
            aufgerufene Seite). Diese Daten werden ausschließlich zur Sicherstellung
            des Betriebs, zur Fehleranalyse und zur Gewährleistung der Systemsicherheit
            verarbeitet. Rechtsgrundlage: Art. 6 Abs. 1 lit. f) DSGVO.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">Cookies und vergleichbare Technologien</h2>
          <p>
            Unsere Website verwendet Cookies, um die Nutzung zu erleichtern und
            Funktionen bereitzustellen. Manche Cookies sind technisch erforderlich,
            andere dienen der Analyse oder Personalisierung. Sofern nicht zwingend
            erforderlich, erfolgt die Nutzung erst nach Einwilligung. Sie können
            Cookies über die Browser-Einstellungen blockieren oder löschen; dies
            kann jedoch die Funktionalität der Website einschränken.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">Drittanbieter & Dienste</h2>
          <p>
            Zur Erbringung einzelner Funktionen können externe Dienstleister
            (z. B. Hosting, Analyse) eingesetzt werden. Dabei gelten die
            jeweiligen Datenschutzbestimmungen der Dienstleister. Eine Übermittlung
            in Drittländer erfolgt nur, wenn dies gesetzlich zulässig ist oder
            geeignete Garantien bestehen (z. B. Angemessenheitsbeschluss, Standardvertragsklauseln).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">Speicherdauer</h2>
          <p>
            Personenbezogene Daten werden nur so lange gespeichert, wie es für
            die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen
            dies vorschreiben. Nach Wegfall des Verarbeitungszwecks oder Ablauf
            gesetzlicher Fristen werden die Daten routinemäßig gelöscht oder gesperrt.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">Rechte der betroffenen Person</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
            der Verarbeitung sowie auf Datenübertragbarkeit. Außerdem können Sie
            jederzeit eine erteilte Einwilligung widerrufen (ohne die Rechtmäßigkeit
            der bis zum Widerruf erfolgten Verarbeitung zu berühren) und aus Gründen,
            die sich aus Ihrer besonderen Situation ergeben, der Verarbeitung widersprechen.
          </p>
          <p className="mt-2">
            Zur Ausübung Ihrer Rechte kontaktieren Sie bitte die oben genannte
            verantwortliche Person per E-Mail oder Post.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">Beschwerderecht</h2>
          <p>
            Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde über
            die Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Die zuständige
            Aufsichtsbehörde richtet sich in der Regel nach Ihrem Wohnsitz oder Arbeitsplatz.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">Änderungen dieser Datenschutzerklärung</h2>
          <p>
            Diese Datenschutzerklärung kann von Zeit zu Zeit angepasst werden. Die
            jeweils aktuelle Version ist auf dieser Website verfügbar. Datum der
            letzten Aktualisierung: {currentYear}.
          </p>
        </section>

        <section className="mb-8">
          <p className="text-sm text-muted-foreground">
            Wenn Sie Fragen zur Verarbeitung Ihrer personenbezogenen Daten haben,
            wenden Sie sich bitte an die oben genannten Kontaktdaten.
          </p>
        </section>

      </div>
    </main>
  );
}
