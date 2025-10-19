import React from "react";

export default function ImpressumComponent() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Impressum</h1>

        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">Angaben gemäß § 5 TMG</h2>
          <p className="whitespace-pre-line">
            Susanne Renken
            {'\n'}Birkenhain 2d
            {'\n'}29640 Schneverdingen
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">Kontakt</h2>
          <p>
            Telefon: 
            <a href="tel:+491733963852" className="text-primary underline-offset-2 hover:underline">
              0173 3963 852
            </a>
          </p>
          <p>
            E-Mail: 
            <a href="mailto:renken.susanne@gmail.com" className="text-primary underline-offset-2 hover:underline">
              renken.susanne@gmail.com
            </a>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>Susanne Renken (gleiche Anschrift wie oben)</p>
        </section>

        <section className="mb-8">
          <p className="text-sm text-muted-foreground">
            Dieses Impressum gilt für die Website „QuasselBot".
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">Haftungsausschluss</h2>
          <h3 className="font-medium mb-1">Inhalte</h3>
          <p>
            Diese Website ist Teil eines persönlichen Portfolios und dient
            ausschließlich der Präsentation professioneller Projekte und
            Erfahrungen. Die Inhalte dieser Website (Portfolio) werden mit
            größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
            und Aktualität der Inhalte kann jedoch keine Gewähr übernommen
            werden.
          </p>

          <h3 className="font-medium mt-4 mb-1">Links zu externen Websites (z. B. LinkedIn, GitHub)</h3>
          <p>
            Diese Website enthält Links zu externen Websites Dritter, auf
            deren Inhalte kein Einfluss genommen werden kann. Deshalb kann
            für diese fremden Inhalte keine Gewähr übernommen werden. Für die
            Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
            oder Betreiber verantwortlich. Bei Bekanntwerden von
            Rechtsverstößen werde ich entsprechende Links umgehend entfernen.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">Urheberrecht</h2>
          <h3 className="font-medium mb-1">Inhalte</h3>
          <p>
            Die auf dieser Website bereitgestellten Texte, Bilder und sonstigen
            Inhalte sind – soweit nicht anders gekennzeichnet – urheberrechtlich
            geschützt und dürfen nicht ohne meine Zustimmung vervielfältigt,
            bearbeitet, verbreitet oder verwertet werden.
          </p>
          <p className="mt-2">
            Soweit Inhalte nicht von mir selbst erstellt wurden, werden die
            Urheberrechte Dritter beachtet und entsprechende Quellen
            gekennzeichnet. Bei Bekanntwerden von Urheberrechtsverletzungen
            werde ich betroffene Inhalte umgehend entfernen.
          </p>
        </section>

      </div>
    </main>
  );
}
