import { Button } from "@/components/ui/button";
import { Coffee, Mail, Send, Sparkles } from "lucide-react";

const kofiUrl = "https://ko-fi.com/feuchinstitut";

export const ContactSection = () => (
  <section id="contact" className="container mx-auto px-4 py-16 md:py-24">
    <div className="paper-card mx-auto grid max-w-4xl gap-8 p-8 md:grid-cols-[1.2fr_1fr] md:p-12">
      <div>
        <span className="label-stamp text-[0.7rem] text-primary">Le laboratoire écoute</span>
        <h2 className="mt-2 font-serif-display text-4xl text-ink">Glissez-moi un mot</h2>
        <p className="mt-4 text-muted-foreground">
          Une question, une commande spéciale, une idée de collaboration, ou
          simplement l'envie de discuter d'un de mes projets ? La porte du
          cabinet est toujours entrouverte.
        </p>

        <ul className="mt-6 space-y-3 text-sm">
          <li className="flex items-center gap-3">
            <Mail size={18} className="text-primary" />
            <a className="hover:text-primary" href="mailto:lubertvlc@gmail.com">
              lubertvlc@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Coffee size={18} className="text-primary" />
            <a className="hover:text-primary" href={kofiUrl} target="_blank" rel="noreferrer noopener">
              ko-fi.com/feuchinstitut
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Sparkles size={18} className="text-secondary" />
            <span>Réponse sous 3 à 7 jours ouvrables (vapeurs permettant)</span>
          </li>
        </ul>

        <Button asChild variant="parchment" className="mt-6">
          <a href={kofiUrl} target="_blank" rel="noreferrer noopener">
            <Coffee /> Offrir un café au laboratoire
          </a>
        </Button>
      </div>

      <form
        className="space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          const subject = encodeURIComponent("Bazar du Feuch — message");
          const body = encodeURIComponent(
            `${data.get("message")}\n\n— ${data.get("name")}`,
          );
          window.location.href = `mailto:lubertvlc@gmail.com?subject=${subject}&body=${body}`;
        }}
      >
        <input
          name="name"
          required
          placeholder="Votre nom"
          className="w-full rounded-md border border-border bg-parchment px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Votre courriel"
          className="w-full rounded-md border border-border bg-parchment px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Votre message…"
          className="w-full rounded-md border border-border bg-parchment px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <Button type="submit" variant="apothecary" className="w-full">
          <Send /> Envoyer la missive
        </Button>
      </form>
    </div>
  </section>
);
