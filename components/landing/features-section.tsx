import { BoxIcon } from "@/components/icons";

const features = [
  {
    title: "Natürlich quasseln",
    desc: "Klingt wie ein echter Mensch und passt sich deinem Gespräch an.",
  },
  {
    title: "Chat personalisieren",
    desc: "Stimme Ton und Stil auf dich ab – vom sachlich bis schnackig.",
  },
  {
    title: "Sicher",
    desc: "Deine Unterhaltung bleibt privat. Datenschutz hat Priorität.",
  },
];

export default function FeaturesSection() {
  return (
    <section aria-labelledby="features-heading">
      <h2 id="features-heading" className="sr-only">
        Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f) => (
          <article
            key={f.title}
            className="rounded-md border border-input bg-card p-6"
            aria-labelledby={`feature-${f.title}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-md bg-accent p-2">
                <BoxIcon size={20} />
              </div>
              <h3 id={`feature-${f.title}`} className="text-lg font-semibold">
                {f.title}
              </h3>
            </div>

            <p className="text-muted-foreground">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
