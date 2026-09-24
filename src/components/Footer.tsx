export const Footer = () => (
  <footer className="relative z-10 mt-20 border-t border-ink/40 bg-[hsl(25_30%_10%/0.85)]">
    <div className="container mx-auto flex flex-col items-center gap-2 px-4 py-8 text-center text-sm text-parchment/70">
      <div className="font-display text-lg text-parchment">Le Bazar du Professeur Feuch</div>
      <p>Inventions, fictions et bricolages de Benoît Lubert.</p>
      <nav aria-label="Écosystème Blacklace" className="flex flex-wrap justify-center gap-x-5 gap-y-2 py-3 text-xs"><a href="https://benoitlub.github.io/blacklace-dice/">Blacklace Dice ↗</a><a href="https://benoitlub.github.io/420-dice-game-reboot/">420 Dice ↗</a><a href="https://benoitlub.github.io/feuchlab/">Feuch Lab ↗</a><a href="https://feuch-game.benoitlubert.workers.dev/">Feuch Game ↗</a><a href="https://ko-fi.com/feuchinstitut">Ko-fi ↗</a></nav>
      <p className="text-xs">© {new Date().getFullYear()} — Tous droits préservés sous cloche en verre.</p>
    </div>
  </footer>
);