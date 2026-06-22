export const Footer = () => (
  <footer className="mt-20 border-t border-border bg-parchment-deep/60">
    <div className="container mx-auto flex flex-col items-center gap-2 px-4 py-8 text-center text-sm text-muted-foreground">
      <div className="font-display text-lg text-ink">Le Bazar du Professeur Feuch</div>
      <p>Inventions, fictions et bricolages de Benoît Lubert.</p>
      <p className="text-xs">© {new Date().getFullYear()} — Tous droits préservés sous cloche en verre.</p>
    </div>
  </footer>
);